import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import styled, { ThemeContext } from 'styled-components';
import WaveSurfer from "wavesurfer.js";
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js';
import MinimapPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js';
import { Button, ButtonComment, ButtonDesLike, ButtonLike, ButtonPlay, ButtonPrimary } from "./Button";

const formWaveSurferOptions = ref => ({
    container: ref,
    waveColor: "#eee",
    progressColor: "OrangeRed",
    cursorColor: "OrangeRed",
    barWidth: 3,
    barRadius: 3,
    responsive: true,
    height: 150,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
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
            progressColor: '#2D5BFF',
            responsive: true,
            waveColor: '#EFEFEF',
            cursorColor: 'transparent',
        });
        wavesurfer.current.load(url);

        wavesurfer.current.on("ready", function () {
            // https://wavesurfer-js.org/docs/methods.html

            wavesurfer.current.play();
            setPlay(true);

            // make sure object stillavailable when file loaded
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(volume);
                setVolume(volume);
            }
            setMounted(true);
        });

        wavesurfer.current.on("interaction", function () {
            if(wavesurfer.current.isPlaying())
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
        const newVolume = +target.value;

        if (newVolume) {
            setVolume(newVolume);
            wavesurfer.current.setVolume(newVolume || 1);
        }
    };

    return (
        <div>
            <Wave id="waveform" ref={waveformRef} />
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

                <input
                    type="range"
                    id="volume"
                    name="volume"
                    // waveSurfer recognize value of `0` same as `1`
                    //  so we need to set some zero-ish value for silence
                    min="0.01"
                    max="1"
                    step=".025"
                    onChange={onVolumeChange}
                    defaultValue={volume}
                />
                <label htmlFor="volume">Volume</label>
            </div>
        </div>
    );
}


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
