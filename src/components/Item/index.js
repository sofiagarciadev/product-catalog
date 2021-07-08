import { Box, Flex, Image, Text, Center } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import CommonButton from "../common/Button";
function Item({ description, price, image }) {
  return (
    <Box
      h="200px"
      bgColor="gray.100"
      margin="20px 0"
      borderRadius="5px"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box w="250px">
        <Image
          src={image}
          alt="comida"
          maxW="100%"
          maxH="100%"
          w="100%"
          borderRadius="5px"
        />
      </Box>
      <Center h="80%" w="300px" borderRight="1px" borderColor="gray.500">
        <Text noOfLines={5}>{description}</Text>
      </Center>
      <Box w="150px" fontWeight="bold" fontSize="x-large" textAlign="center">
        ${price}
      </Box>
      <Flex cursor="pointer">
        <Center bgColor="green.300" w="50px" h="50px">
          <PhoneIcon boxSize="20px" color="gray.100" />
        </Center>
        <CommonButton
          border="1px"
          borderColor="gray.200"
          value="To order"
          colorScheme="whiteAlpha"
          color="black"
          h="50px"
        />
      </Flex>
    </Box>
  );
}

export default Item;
