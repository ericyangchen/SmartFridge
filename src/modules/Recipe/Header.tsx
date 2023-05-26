import { Flex, CloseButton, Link, Text } from "@chakra-ui/react";

export default function Recipe() {
  return (
    <Flex w="100%" h="8vh" position="sticky" justify={"space-between"}>
      <Text fontSize="2xl" fontWeight={"700"}>
        Generate Recipe
      </Text>
      <Link href="/home">
        <CloseButton />
      </Link>
    </Flex>
  );
}
