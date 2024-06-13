import styled from "styled-components";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";

const DropdownComponent = RadixDropdown.Root;

const Trigger = styled(RadixDropdown.Trigger)`
  color: blue;
`;

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
