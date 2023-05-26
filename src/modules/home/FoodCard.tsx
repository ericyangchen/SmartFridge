import {
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
export default function FoodCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      borderRadius={"20px"}
      padding={"10px"}
      bg={"blackAlpha.200"}
      w="full"
      gap={4}
      align={"center"}
      justify={"start"}
    >
      <Flex
        width={"50px"}
        height={"50px"}
        alignItems={"center"}
        justify={"center"}
        bg={"white"}
        borderRadius={"10px"}
      >
        <Image src="foodItem.png" width={"40px"} height={"40px"}></Image>
      </Flex>
      <Flex
        align={"left"}
        justifyContent={"left"}
        fontSize={"xs"}
        fontWeight={500}
        direction={"column"}
      >
        <Text fontWeight={700} fontSize={"lg"}>
          Food Name
        </Text>
        <Text>
          In Fridge Since:
          <br /> {"20220101"}
        </Text>
        <Text>
          Expiration Date:
          <br /> {"20231013"}
        </Text>
      </Flex>
      <Spacer />
      <Button
        alignSelf={"end"}
        justifySelf={"end"}
        borderRadius={"10px"}
        height={"30px"}
        bg={"blue.800"}
        color={"white"}
        onClick={onOpen}
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={"80vw"}>
          <ModalHeader>Edit Expiration Date</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Expiration Date: </Text>
            <Input type="date" />
          </ModalBody>

          <ModalFooter>
            <Button color="blue.800" mr={3} onClick={onClose}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
