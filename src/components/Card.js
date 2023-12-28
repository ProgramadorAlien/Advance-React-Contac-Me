import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(

    <VStack
    color={"black"}
    bg={"white"}
    borderWidth="1px"
    borderRadius="lg"
    
  >
    <Image src={imageSrc} alt={title}  borderRadius="lg"/>
    <VStack align="start" spacing={4} p={4} alignItems={"flex-start"}>
      <HStack justifyContent={"space-betwee"} alignItems={"center"}>
        <Heading as="h3" size="md" >
        {title}
        </Heading>
      </HStack>
      <Text color="gray.600">{description}</Text>
    </VStack>
    <HStack justify="flex-firts" w="100%" p={4}>
    <Text as="h3" size="md" color={"red"}>
        See more
      </Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" color="red" />
    </HStack>
  </VStack>

  );
};

export default Card;
