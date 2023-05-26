import { Button, Checkbox, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import moment from "moment";
export default function SelectItem() {
  return (
    <Flex w="100%">
      <Checkbox size="lg" colorScheme="blue">
        <Flex
          borderRadius={"10px"}
          padding={"15px"}
          bg={"blackAlpha.200"}
          w="100%"
          gap={4}
          align={"center"}
          justify={"start"}
        >
          <Text fontWeight={700} fontSize={"lg"}>
            Food Name
          </Text>
          <Spacer />
          <Text fontWeight={500} fontSize={"sm"} color={"gray.400"}>
            Expired in {moment("2023-10-13").fromNow(true)}
          </Text>
        </Flex>
      </Checkbox>
    </Flex>
  );
}
