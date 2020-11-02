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
const Waveform = dynamic(() => import('../../components/WaveForm'), { ssr: false, });

function Audio({ posts }) {
    const router = useRouter()
    const title = posts[0]?.data.title.iv
    return (
        <Main title={title} >
            { posts && posts.map((post, index) => (
                <Article key={post.id} >
                    <TitlePage>{post.data.title.iv}</TitlePage>
                    <Paragraph>
                        {post.data.descricao.iv}
                    </Paragraph>

                    { post.data.audios.iv.map((audio, index) => {
                        return (<Waveform key={index} url={`https://painel.spinui.com/api/assets/zapaudios/${audio}`} />)
                    })}

                    <Button onClick={() => router.back()}>Voltar</Button>
                </Article>
            ))}
        </Main>
    )
}

Audio.getInitialProps = async (ctx) => {

    const { slug } = ctx.query

    const response = await Axios.get(`https://painel.spinui.com/api/content/zapaudios/audios?$filter=data/slug/iv%20eq%20%27${slug}%27`)

    console.log("====>", response.data)

    if (response.status === 200 && response.data.total > 0) {
        const posts = response.data.items
        return { posts }
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
