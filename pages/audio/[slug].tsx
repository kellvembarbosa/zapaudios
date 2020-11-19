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
    const {
        title, acf: {
            description,
            audio_file
        } } = post

        console.log("audio_file ===>", audio_file)
    return (
        <Main title={title.rendered} >
            <Article>
                <TitlePage>{title.rendered}</TitlePage>
                <Paragraph>
                    {description}
                </Paragraph>

                <Waveform url={audio_file} />

                <Button onClick={() => router.back()}>Voltar</Button>
            </Article>
        </Main>
    )
}

Audio.getInitialProps = async (ctx) => {

    const { slug } = ctx.query

    const responseWP = await API.get(`/audios?slug=${slug}&_fields[]=title&_fields[]=acf&_fields[]=slug&_fields[]=id&per_page=10&page=1`);

    if (responseWP.data?.length > 0) {
        const post = responseWP.data[0] as AudioObject;
        return { post }
    }

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
