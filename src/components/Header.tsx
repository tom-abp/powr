import styled from "styled-components";
import { Logo } from "./Logo";
import { PairMenu } from "./PairMenu";
import { ExpiryMenu } from "./ExpiryMenu";

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <PairMenu />
      <ExpiryMenu />
    </StyledHeader>
  );
}

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
`;
