import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    padding: 16px;
    border: 2px solid ${({ theme }) => theme.colors.primaryColor};
    border-radius: 16px;
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryColor}; 

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

export const ButtonLike = styled(Button)`
    flex: 1;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 32px;
    padding: 8px;
    margin: 2px;
    border: none;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const ButtonDesLike = styled(Button)`
    flex: 1;
    background-color: transparent;
    color: #E24444;
    font-size: 32px;
    padding: 8px;
    margin: 2px;
    border: none;
    display: flex;
    justify-content:center;
    align-items: center;
`

export const ButtonComment = styled(ButtonLike)`
    background-color: transparent;
    color: #50D86A;
`;

export const ButtonPrimary = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.textColor}; 
`

export const ButtonPlay = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.textDarkColor}; 
    flex: 2; 
    margin: 2px;
`