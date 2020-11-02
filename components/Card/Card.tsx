import Link from 'next/link';
import React from 'react'
import { Button, ButtonPrimary } from '../Button';
import { Container, ContainerIcon, Title } from './Card_Style';
import { SiAudioboom } from "react-icons/si";

interface PostData {
    itemJson : AudioObject
}

// export interface PostObject {
//     titleAudio: string;
//     descAudio: string; 
//     slugAudio: string;
//     audios: AudioObject[];
//     tags: TagObject[];
// }

// export interface AudioObject {
//     url: string;
// }

// export interface TagObject {
//     tagName: string;
//     tagSlug: string;
// }

export interface AudioObject {
    id:                string;
    createdBy:         string;
    lastModifiedBy:    string;
    data:              Data;
    created:           Date;
    lastModified:      Date;
    status:            string;
    statusColor:       string;
    schemaName:        string;
    schemaDisplayName: string;
    version:           number;
    _links:            Links;
}

export interface Links {
    self:     Previous;
    previous: Previous;
}

export interface Previous {
    href:   string;
    method: string;
}

export interface Data {
    title:     Descricao;
    descricao: Descricao;
    audios:    Audios;
    ativo:     Ativo;
    tags:      Audios;
    slug:      Slug;
}

export interface Ativo {
    iv: boolean;
}

export interface Audios {
    iv: string[];
}

export interface Descricao {
    iv: string;
}

export interface Slug {
    iv: string;
}

export default function Card({ itemJson } : PostData) {
    const { data : {
        title,
        slug
    } } = itemJson;
    return (
        <Container>
            <ContainerIcon>
                <SiAudioboom size={60}/>
            </ContainerIcon>
            <Title>{ title.iv }</Title>
            <Link href={`/audio/${slug.iv}`} passHref>
                <ButtonPrimary> OUVIR ÁUDIO </ButtonPrimary>
            </Link>
        </Container>
    )
}
