import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Spinner,
  Center,
} from "@chakra-ui/react";
import SelectItem from "./SelectItem";
import { useFridge } from "../swr/useFridge";
import { useState } from "react";

export default function GenerateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { data } = useFridge();
  const [selectData, setSelectData] = useState([]);
  console.log(selectData);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={"90vw"}>
        <ModalHeader>Generate Recipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction={"column"} gap="6">
            {data?.items.length ? (
              data?.items.map((item: any, index: number) => (
                <SelectItem
                  key={index}
                  data={item}
                  selectData={setSelectData}
                />
              ))
            ) : (
              <Center>
                <Spinner />
              </Center>
            )}
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
