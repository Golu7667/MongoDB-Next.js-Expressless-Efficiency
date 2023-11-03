import { Box, Button, Center, Img, Input, InputGroup, InputLeftAddon, Text, VStack } from "@chakra-ui/react"


export default function Index() {
  console.log("log")
  return (
    
      <Center w={"100%"} h={"100vh"}>
        <VStack>
          <Text fontSize='6xl'>Login</Text>
      <Box w={"600px"} h={"400px"} boxShadow='dark-lg' rounded='xl'>
        <VStack>
        <Img src="../man.svg" w={"200px"}/>
        <InputGroup display={"flex"} justifyContent={"center"} mt={"20px"}>
          <InputLeftAddon children='Name' />
          <Input type='text' placeholder='Enter Your Name' w={"300px"}/>
        </InputGroup>
        <Button mt={"20px"}>Click Here</Button>
        </VStack>
      </Box>
      </VStack>
      </Center>
   
  )
}