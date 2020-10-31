import React from 'react'
import styled from 'styled-components';
import { Button } from '../../components/Button';
import Main from '../../components/layout/Main'
import { useRouter } from 'next/router'
import AudioSpectrum from 'react-audio-spectrum'
import { API } from '../../services/api';

function Audio() {
    const router = useRouter()
    return (
        <Main>
            <audio id="audio-element"
                src="https://api.zapaudios.com/uploads/chegou_o_ingresso_752dee0033.mp3"
                autoPlay
            >
            </audio>
            <AudioSpectrum
                id="audio-canvas"
                height={200}
                width={300}
                audioId={'audio-element'}
                capColor={'red'}
                capHeight={2}
                meterWidth={2}
                meterCount={512}
                meterColor={[
                    { stop: 0, color: '#f00' },
                    { stop: 0.5, color: '#0CD7FD' },
                    { stop: 1, color: 'red' }
                ]}
                gap={4}
            />
            <Button onClick={() => router.back()}>Back</Button>
        </Main>
    )
}

export default Audio


Audio.getInitialProps = async (ctx) => {
    // const response = await API.get('/post?')
    // if (response.status === 200 && response.data) {
    //   const posts = response.data
    //   return { posts }
    // }
  
    return {}
  }

const Container = styled.div`
  
`;