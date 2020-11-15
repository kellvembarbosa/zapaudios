import Link from 'next/link';
import React from 'react'
import { ButtonPrimary } from '../Button';
import { Container, ContainerIcon, Title } from './Card_Style';
import { SiAudioboom } from "react-icons/si";

interface PostData {
    itemJson : AudioObject
}

export interface AudioObject {
    id:           string;
    status:       string;
    sort:         null;
    user_created: string;
    date_created: Date;
    title:        string;
    description:  string;
    audio_file:   string;
}


export default function Card({ itemJson } : PostData) {
    const { id, title } = itemJson;

    return (
        <Container>
            <ContainerIcon>
                <SiAudioboom size={60}/>
            </ContainerIcon>
            <Title>{ title }</Title>
            <Link href={`/audio/${id}`} passHref>
                <ButtonPrimary> OUVIR ÁUDIO </ButtonPrimary>
            </Link>
        </Container>
    )
}
