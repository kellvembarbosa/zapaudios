import styled from 'styled-components';

export const Button = styled.button`
  
`;

export const ButtonPrimary = styled(Button)`
    width: 100%;
    padding: 16px;
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    color: ${({ theme }) => theme.colors.textColor}; 
    border-radius: 16px;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    
`