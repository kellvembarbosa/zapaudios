import Head from 'next/head';
import React, { useEffect } from 'react'
import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface MainProps {
    children: React.ReactNode;  
    title?: string;
}

export default function Main({ children, title } : MainProps) {
    return (
        <Container>
            <Head>
                <title> { title ? `${title} | Zap Áudios ` : `Zap Áudios - Áudios para WhatsApp e Telegram`}</title>
            </Head>
            <Header />
            <Wrapper>
                <ContainerMain>
                    {children}
                </ContainerMain>
            </Wrapper>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 0px auto; 

    ${up("sm")}{
        width: 70%;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    margin: 16px 16px 16px 16px;
    display: flex;
    flex: 1;
`;
