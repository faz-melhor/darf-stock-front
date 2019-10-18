import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 2px;

    p {
        margin-bottom: 10px;
    }
`;

export const Content = styled.div`
    padding: 16px;
    > div {
        width: 100%;
    }
`;

export const Footer = styled.footer`
    background-color: rgba(0, 0, 0, 0.05);
    height: 60px;
    text-align: end;
    padding: 5px 16px 0 0;

    p {
        margin-bottom: 5px;
    }
`;

export const ListItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    div:first-child {
        width: 100%;
    }
`;

export const Profit = styled.div`
    text-align: center;

    p {
        font-weight: bold;
        margin-bottom: 0;
    }
`;