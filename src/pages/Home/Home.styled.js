import styled from 'styled-components';

export const Box = styled.div`
  width: 480px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 0;
`;

export const CardContainer = styled.li`
  width: 480px;
`;
