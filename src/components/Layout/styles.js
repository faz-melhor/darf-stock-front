import styled from 'styled-components';

export const MainLayout = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  min-height: -webkit-fill-available;
  min-height: 100vh;
  ${props =>
    props.centered &&
    `
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  `}
`;