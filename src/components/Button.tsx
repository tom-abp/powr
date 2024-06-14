import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.background.clickable};
  border: ${({ theme }) => theme.border.clickable};
`;
