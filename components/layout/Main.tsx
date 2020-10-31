import React, { useEffect } from 'react'
import { down, up } from 'styled-breakpoints';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

export default function Main({ children }) {
    return (
        <Container>
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
`;
