import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { BsFillBellFill } from "react-icons/bs";
export default function PopOutReminds() {
  return (
    <Menu>
      <MenuButton as="button" transition="all 0.2s">
        <BsFillBellFill size={20} />
      </MenuButton>
      <MenuList w="80vw" float={"right"}>
        <MenuItem fontSize={"large"}>Your banana has been expired!</MenuItem>
        <MenuDivider />
        <MenuItem fontSize={"large"}>
          Your Fridge was opened by Eric at 3:00pm yesterday!
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
