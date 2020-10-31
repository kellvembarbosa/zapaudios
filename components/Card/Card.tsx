import Link from 'next/link';
import React from 'react'
import { Button, ButtonPrimary } from '../Button';
import { Container, ContainerIcon, Title } from './Card_Style';
import { SiAudioboom } from "react-icons/si";

interface PostData {
    itemJson : PostObject
}

export interface PostObject {
    titleAudio: string;
    descAudio: string; 
    slugAudio: string;
    audios: AudioObject[];
    tags: TagObject[];
}

export interface AudioObject {
    url: string;
}

export interface TagObject {
    tagName: string;
    tagSlug: string;
}

export default function Card({ itemJson } : PostData) {
    const { titleAudio, descAudio, slugAudio } = itemJson;
    return (
        <Container>
            <ContainerIcon>
                <SiAudioboom size={60}/>
            </ContainerIcon>
            <Title>{ titleAudio }</Title>
            <Link href={`/audio/${slugAudio}`} passHref>
                <ButtonPrimary> OUVIR ÁUDIO </ButtonPrimary>
            </Link>
        </Container>
    )
}
