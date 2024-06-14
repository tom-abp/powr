import styled from "styled-components";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { Button } from "./Button";

const DropdownComponent = RadixDropdown.Root;

function Trigger(props: RadixDropdown.DropdownMenuTriggerProps) {
  return <Button as={RadixDropdown.Trigger} {...props} />;
}

const Item = styled(RadixDropdown.Item)`
  background: grey;
`;

const StyledContent = styled(RadixDropdown.Content)`
  padding: 4px;
`;

function Content(props: RadixDropdown.MenuContentProps) {
  return (
    <RadixDropdown.Portal>
      <StyledContent {...props} />
    </RadixDropdown.Portal>
  );
}

export const Dropdown = Object.assign(DropdownComponent, {
  Trigger,
  Item,
  Content,
});
