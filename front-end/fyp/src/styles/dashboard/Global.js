import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ContainerSidebar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  border-right: 2px solid rgba(36, 44, 92);

  @media (min-width: 1920px) {
    width: 15%;
  }
`;
