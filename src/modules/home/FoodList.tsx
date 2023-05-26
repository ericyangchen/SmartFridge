import { Flex, Text, Image, Button, Box, Spacer } from "@chakra-ui/react";
import FoodCard from "./FoodCard";

export default function FoodList() {
  return (
    <Flex padding={"5px 20px"} direction={"column"}>
      <Text fontSize={"xl"} fontWeight={500}>
        Fridge items
      </Text>
      <Flex margin={"10px"}>
        <FoodCard />
      </Flex>
    </Flex>
  );
}
