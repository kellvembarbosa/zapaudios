import Link from 'next/link';
import React from 'react'
import { ButtonPrimary } from '../Button';
import { Container, ContainerIcon, Title } from './Card_Style';
import { SiAudioboom } from "react-icons/si";

interface PostData {
    itemJson : AudioObject
}

// export interface AudioObject {
//     id:           string;
//     status:       string;
//     sort:         null;
//     user_created: string;
//     date_created: Date;
//     title:        string;
//     description:  string;
//     audio_file:   string;
// }

export interface AudioObject {
    id:    number;
    slug:  string;
    title: Title;
    acf:   Acf;
}

export interface Acf {
    description: string;
    audio_file:  string;
    tags:        Tag[];
}

export interface Tag {
    term_id:          number;
    name:             string;
    slug:             string;
    term_group:       number;
    term_taxonomy_id: number;
    taxonomy:         string;
    description:      string;
    parent:           number;
    count:            number;
    filter:           string;
}

export interface Title {
    rendered: string;
}


export default function Card({ itemJson } : PostData) {
    const { id, title, slug } = itemJson;

    return (
        <Container>
            <ContainerIcon>
                <SiAudioboom size={60}/>
            </ContainerIcon>
            <Title>{ title.rendered }</Title>
            <Link href={`/audio/${slug}`} passHref>
                <ButtonPrimary> OUVIR ÁUDIO </ButtonPrimary>
            </Link>
        </Container>
    )
}
