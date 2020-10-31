import React from 'react'
import styled from 'styled-components';

export default function Footer() {
    return (
        <Container>
            <p>© 2020 - All Rights Lecensed</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80px; 
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.SecundaryBackgroundColor};
    color: ${({ theme }) => theme.colors.secundaryTextColor }
`;