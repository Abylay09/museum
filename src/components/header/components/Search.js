import React, { useState } from 'react'
import { Search2Icon, CloseIcon } from '@chakra-ui/icons'
import { Box, HStack, VStack, StackDivider, Input, Heading, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
function Search() {
    const [text, setText] = useState("");
    const [show, setShow] = useState(false);
    const [finds, setFinds] = useState([]);
    const navigate = useNavigate();
    async function findExhibit() {
        let res = await fetch(`http://localhost:8888/find/${text}`);
        let result = await res.json();

        if (result.length !== 0) {
            setFinds(result)
            setShow(true)
        } else {
            setShow(true)
        }
    }
    return (
        <HStack align={"center"} gap="25px" pos="relative">
            <Input onChange={e => setText(e.target.value)} w={"300px"} placeholder='Введите название экспоната' />
            <Search2Icon w="18px" height="18px" cursor={"pointer"} onClick={findExhibit} />

            {
                show
                    ? <Box bg='#CBD5E0' pos="absolute" top="150%" left="-8px" w="100%" h="auto" p={5} borderRadius={"xl"} zIndex="overlay">
                        <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Heading as='h2'size='md'> Результаты</Heading>
                            <CloseIcon _hover={{ cursor: "pointer" }} onClick={() => setShow(false)} />
                        </Box>
                        <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={4}
                            align='stretch'
                        >
                            {finds.length == 0
                                ? <Heading as='h5' size='sm' mt={5} textAlign="center">
                                    Не удалось найти экспонат(ы)
                                </Heading>
                                : <Box mt={5}>{finds.map(item =>
                                    <Box display="flex" alignItems="center" justifyContent="space-around" mb={5} px={1} py={3} _hover={{
                                        background: "rgba(240, 240, 240, 0.8)",
                                        color: "teal.500",
                                        cursor: "pointer"
                                    }} onClick={() => navigate(`/exhibit-info/${item.type_id}/${item.id}`)} >
                                        <Image boxSize='100px'
                                            objectFit='contain' src={item.image} />
                                        <Heading as='span' size='sm'> {item.name}</Heading>

                                    </Box>)}
                                </Box>}

                        </VStack>

                    </Box>
                    : ""
            }

        </HStack >
    )
}

export default Search