import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../components/Button';
import Main from '../../components/layout/Main'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import { API } from '../../services/api';
// import { PostObject } from '../../components/Card/Card';
import Head from 'next/head';
import Axios from 'axios';
import { AudioObject } from '../../components/Card/Card';
const Waveform = dynamic(() => import('../../components/WaveForm'), { ssr: false, });

function Audio({ post }) {
    const router = useRouter()
    return (
        <Main title={post.title} >
            <Article>
                <TitlePage>{post.title}</TitlePage>
                <Paragraph>
                    {post.description}
                </Paragraph>

                <Waveform url={`https://painel.zapaudios.com/assets/${post.audio_file}`} />

                <Button onClick={() => router.back()}>Voltar</Button>
            </Article>
        </Main>
    )
}

Audio.getInitialProps = async (ctx) => {

    const { slug } = ctx.query

    const response = await API.get(`/items/audios/${slug}`)

    if (response.status === 200 && response.data) {
        const post = response.data.data as AudioObject
        return { post }
    }
    // const response = await API.get(`/posts?slugAudio=${slug}`)
    // if (response.status === 200 && response.data.length > 0) {
    //     const posts = response.data;
    //     return { posts }
    // }

    ctx.res.writeHead(301, { Location: '/' });
    ctx.res.end();

    return {}
}

export default Audio

export const Article = styled.article`

`;

const TitlePage = styled.h1`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secundaryTextColor};
  opacity: 0.7;
`;
