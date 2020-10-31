import Link from 'next/link';
import React from 'react'
import { Button, ButtonPrimary } from '../Button';
import { Container, Title } from './Card_Style';

interface CardData {
    itemJson : CardObject
}

interface CardObject {
    titleAudio: string;
    descAudio: string; 
    slugAudio: string;
}

export default function Card({ itemJson } : CardData) {
    const { titleAudio, descAudio, slugAudio } = itemJson;
    return (
        <Container>
            <Title>{ titleAudio }</Title>
            <Link href={`/audio/${slugAudio}`} passHref>
                <ButtonPrimary> OUVIR ÁUDIO </ButtonPrimary>
            </Link>
        </Container>
    )
}
