import styled from 'styled-components';

export const Box = styled.div`
  max-width: 480px;
  height: auto;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Container = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 15px;
  margin: 0;
`;

export const CardContainer = styled.li`
  width: 480px;
`;
