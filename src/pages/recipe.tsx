import Header from "@/modules/Recipe/Header";
import SelectItem from "@/modules/Recipe/SelectItem";
import { Button, Flex } from "@chakra-ui/react";

export default function Recipe() {
  return (
    <Flex direction={"column"} padding={"20px"}>
      <Header />
      <Flex direction={"column"} gap="6">
        <SelectItem />
        <SelectItem />
      </Flex>
      <Button
        position={"sticky"}
        bg="blue.800"
        color={"white"}
        marginTop={"20px"}
      >
        Generate
      </Button>
    </Flex>
  );
}
