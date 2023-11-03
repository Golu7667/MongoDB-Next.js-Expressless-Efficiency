import { Box, Button, Center, Img, Input, InputGroup, InputLeftAddon, Text, VStack, Divider, cookieStorageManager } from "@chakra-ui/react"
import { useState } from "react"


export default function Index() {
  const [name, setName] = useState()

const handleSubmit=()=>{
  
}


  return (

    <Center w={"100%"} h={"100vh"}>
      <VStack>
        <Text fontSize='6xl'>Login</Text>
        <Divider w="200px" h="10px" bgColor={"blue.400"} />
        <Box w={"600px"} h={"400px"} boxShadow='dark-lg' rounded='xl'>
          <VStack>
            <Img src="../man.svg" w={"200px"} />
            <InputGroup display={"flex"} justifyContent={"center"} mt={"20px"}>
              <InputLeftAddon children='Name' />
              <Input type='text' value={name} placeholder='Enter Your Name' w={"300px"} onChange={(e)=>setName(e.target.value)} />
            </InputGroup>
            <Button colorScheme='teal' variant='solid' mt="50px" w="200px" onClick={()=>handleSubmit}>
             Register
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Center>

  )
}