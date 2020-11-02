import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import styled, { ThemeContext } from 'styled-components';
import WaveSurfer from "wavesurfer.js";
import { ButtonComment, ButtonDesLike, ButtonLike, ButtonPlay } from "./Button";

const formWaveSurferOptions = ref => ({
    container: ref,
    waveColor: "#eee",
    progressColor: "OrangeRed",
    cursorColor: "OrangeRed",
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 150,
    normalize: true,
    partialRender: true
});

export default function Waveform({ url }) {
    
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);

    const [playing, setPlay] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [mounted, setMounted] = useState(false)
    const theme = useContext(ThemeContext);

    useEffect(() => {
        setPlay(false);

        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create({
            ...options,
            barWidth: 3,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'WebAudio',
            height: 80,
            progressColor: theme.colors.primaryColor,
            responsive: true,
            waveColor: "#222222",
            cursorColor: 'transparent'

        });
        wavesurfer.current.load(url);

        wavesurfer.current.on("ready", function () {
            // https://wavesurfer-js.org/docs/methods.html
            // make sure object stillavailable when file loaded
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(volume);
                setVolume(volume);
            }
            setMounted(true);
        });

        wavesurfer.current.on("interaction", function () {
            if (wavesurfer.current.isPlaying())
                setPlay(false);
        });

        return () => wavesurfer.current.destroy();
    }, [url]);

    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current.playPause();
    };

    const onVolumeChange = e => {
        const { target } = e;
        const newVolume = + target.value;
        
        if(newVolume === 0 )
            wavesurfer.current.setVolume(0);

        if (newVolume) {
            setVolume(newVolume);
            wavesurfer.current.setVolume(newVolume || 1);
        }
        
    };

    return (
        <div>
            <Wave id="waveform" ref={waveformRef} />
            {mounted && <ContainerVolume>

                <label htmlFor="volume">Volume</label>
                <input
                    type="range"
                    id="volume"
                    name="volume"
                    min="0.00"
                    max="1"
                    step=".025"
                    onChange={onVolumeChange}
                    defaultValue={volume}
                />
            </ContainerVolume> }
            <div className="controls">
                {mounted ?
                    <ContainerActions>
                        <ButtonPlay onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</ButtonPlay>
                        <ButtonLike>
                            <AiFillLike />
                        </ButtonLike>

                        <ButtonDesLike>
                            <AiFillDislike />
                        </ButtonDesLike>

                        <ButtonComment>
                            <FaCommentDots />
                        </ButtonComment>

                    </ContainerActions> :

                    <LoadingText> Loading...</LoadingText>
                }
            </div>
        </div>
    );
}

const ContainerVolume = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    label {
        font-weight: bold;
        margin-bottom: 8px;
    }
`

export const Wave = styled.div`
  margin: 26px 0px; 
  width: 100%;
  height: 90px;
`;

const LoadingText = styled.div`
  font-size: 32px;
  padding: 16px; 
  margin: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerActions = styled.div`
  flex: 1;
  height: 60px;
  display: flex;
  align-items: center;
  margin: 16px 0px;
`;
