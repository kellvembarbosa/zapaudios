import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.SecundaryBackgroundColor};
    border-radius: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    flex: 1;
`