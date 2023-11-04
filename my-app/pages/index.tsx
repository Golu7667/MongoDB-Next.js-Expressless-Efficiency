import { Box, Button, Center, Img, Input, InputGroup, InputLeftAddon, Text, VStack, Divider, cookieStorageManager } from "@chakra-ui/react"
import { useState } from "react"


export default function Index() {
  const [name, setName] = useState<string>('');

const handleSubmit=async()=>{
  try {
    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (response.status === 201) {
      console.log('Name saved successfully');
    } else {
      console.error('Failed to save name');
    }
  } catch (error) {
    console.error('Error:', error);
  }
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