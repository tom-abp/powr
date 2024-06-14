import { useParams } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export function PairMenu() {
  const { pair } = useParams();

  return (
    <Dropdown>
      <Dropdown.Trigger>{pair}</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>ETH/USDC</Dropdown.Item>
        <Dropdown.Item>BTC/USDC</Dropdown.Item>
        <Dropdown.Item>LINK/USDC</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
