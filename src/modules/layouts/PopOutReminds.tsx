import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Divider,
} from "@chakra-ui/react";
import { BsFillBellFill } from "react-icons/bs";
import { useFridge } from "../swr/useFridge";
export default function PopOutReminds() {
  const { data } = useFridge();

  return (
    <Menu>
      <MenuButton as="button" transition="all 0.2s" borderRadius={"full"}>
        <BsFillBellFill size={20} />
      </MenuButton>
      <MenuList w="80vw" float={"right"}>
        {data?.notification.length ? (
          data?.notification.map((item: string, index: number) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))
        ) : (
          <MenuItem>No notification</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
}
