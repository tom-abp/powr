import { HTMLProps } from "react";
import styled from "styled-components";

export function Content(props: HTMLProps<HTMLDivElement>) {
  return <StyledContent {...props}>content</StyledContent>;
}

export const StyledContent = styled.main`
  padding: 4px;
  flex-grow: 1;
`;
