import { Flex, Text, Center, Link } from "@chakra-ui/react";
import { IoDocumentText } from "react-icons/io5";
export default function FunctionMenu() {
  return (
    <Flex padding={"5px 20px"} direction={"column"}>
      {/* <Text fontSize={"xl"} fontWeight={500}>
        Function Bar
      </Text> */}
      <Link href="/recipe">
        <Flex bg="#F4EFFA" borderRadius={"20px"} margin={"0px 10px"}>
          <Flex padding={" 10px"} gap={4}>
            <Center
              bg="white"
              width={"50px"}
              height={"50px"}
              borderRadius={"25px"}
            >
              <IoDocumentText size="25px" color="#44337A" />
            </Center>
            <Text
              fontSize={"md"}
              fontWeight={700}
              marginLeft={"10px"}
              margin={"auto 0px"}
              color="#44337A"
            >
              Generate Recipe
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}
