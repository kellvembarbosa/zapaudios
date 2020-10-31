import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Button } from '../../components/Button';
import Main from '../../components/layout/Main'
import { useRouter } from 'next/router'
import dynamic from "next/dynamic";
import { API } from '../../services/api';
import { PostObject } from '../../components/Card/Card';
const Waveform = dynamic(() => import('../../components/WaveForm'), { ssr: false, });

function Audio({ posts }) {
    const router = useRouter()

    return (
        posts && posts.map(post => (
            <Main key={ post.id}  title={post.title}>
                <Article>
                        <TitlePage>{post.titleAudio}</TitlePage>
                        <Paragraph>
                            {post.descAudio}
                        </Paragraph>

                        {post.audios.map((audio, index) => {
                            console.log("url ===> ", `https://api.zapaudios.com${audio.url}`)
                            return (<Waveform key={index} url={`https://api.zapaudios.com${audio.url}`} />)
                        })}

                        <Button onClick={() => router.back()}>Voltar</Button>
                </Article>
            </Main>
        ))
    )
}

Audio.getInitialProps = async (ctx) => {

    const { slug } = ctx.query

    const response = await API.get(`/posts?slugAudio=${slug}`)
    if (response.status === 200 && response.data.length > 0) {
        const posts = response.data;
        return { posts }
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
