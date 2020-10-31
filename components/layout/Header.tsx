import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { themeState } from '../../recoils/atoms';
import { changeMode } from '../../recoils/selectors';
import Switch from "react-switch";
import Link from 'next/link';
import Image from 'next/image';
import { down } from 'styled-breakpoints';
import { AiFillFileZip, AiFillHome, AiFillQuestionCircle } from "react-icons/ai";

export default function Header() {
    const isDarkMode = useRecoilValue(themeState)
    const setDarkMode = useSetRecoilState(changeMode);

    return (
        <Container>
            <Wrapper>
                <ContainerLogo>
                    <Image height={50} width={50} src="/assets/img/whatsapp.png" />
                </ContainerLogo>
                <ContainerMenu>
                    <Link href="/" passHref>
                        <MenuItem isActive>
                            <AiFillHome size={24} /> Home
                        </MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem>
                            <AiFillFileZip size={24} /> Terms of Service
                        </MenuItem>
                    </Link>
                    <Link href="/" passHref>
                        <MenuItem>
                            <AiFillQuestionCircle size={24} /> Contato
                        </MenuItem>
                    </Link>
                </ContainerMenu>
                <ContainerAvatar>
                    <Switch onChange={() => setDarkMode(!isDarkMode)} checked={!isDarkMode} />
                </ContainerAvatar>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 80px; 
    background-color: ${({ theme }) => theme.colors.SecundaryBackgroundColor};
    -webkit-box-shadow: -1px 3px 5px 0px rgba(49, 50, 50, 0.2);
    -moz-box-shadow:    -1px 3px 5px 0px rgba(49, 50, 50, 0.2);
    box-shadow:         -1px 3px 5px 0px rgba(49, 50, 50, 0.2);
`;
const Wrapper = styled.div`
    flex-direction: row;
    margin: 0 auto;
    height: 80px; 
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${down('md')}{
        width: 100%;
    }
`;


const ContainerMenu = styled.div`
    display: flex;
    flex-direction: row;
`

const MenuItem = styled.a<{ isActive?: boolean }>`
    display: flex;
    justify-content: center; align-items: center;
    padding: 16px; 
    color: ${({ theme, isActive }) => isActive ? theme.colors.textColor : theme.colors.secundaryColor};
    text-decoration: none;

    svg {
        margin-right: 12px;
        margin-bottom: 4px;
    }

    :hover {
       color: ${({ theme }) => theme.colors.textColor};
    }

    ${down('sm')}{
        display: none;
    }
`

const ContainerLogo = styled.div`
    margin-left: 16px;
`

const ContainerAvatar = styled.div`
    margin-right: 16px;
    display: flex;
    
`