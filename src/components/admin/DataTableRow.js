import React, { useEffect, useState } from 'react'
import {
    Tbody, Tr, Td, Image, Button, useDisclosure, FormControl,
    FormLabel,
    Input,
    Box,
    VStack,
    Heading,
} from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function DataTableRow(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [openModal, setOpenModal] = useState(false);
    const [closeModal, setCloseModal] = useState(true);
    const [daleteValues, setDaleteValues] = useState({
        id: props.data.id,
        type_id : props.data.type_id,
    });
    const [value, setValue] = useState({
        id: props.data.id,
        name: "",
        ethnicity: "",
        place_of_creation: "",
        geography: "",
        creation_time: "",
        author: "",
        gatherer: "",
        material: "",
        size: "",
        type_id: props.data.type_id,
        image: ""
    })

    useEffect(() => {
        setValue({
            ...value,
            name: props.data.name || "",
            ethnicity: props.data.ethnicity || "",
            place_of_creation: props.data.place_of_creation || "",
            geography: props.data.geography || "",
            creation_time: props.data.creation_time || "",
            author: props.data.author || "",
            gatherer: props.data.gatherer || "",
            material: props.data.material || "",
            size: props.data.size || "",
            type_id: props.data.type_id || "",
            image: props.data.image || ""
        })
    }, [])

    function handleChange(evt) {
        const info = evt.target.value;
        setValue({
            ...value,
            [evt.target.name]: info
        });
    }

    async function modifyData() {
        // console.log(document.getElementById("name").placeholder);
        let response = await fetch("http://localhost:8888/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        })

        let result = await response.json();

        if (response.ok) {
            props.updatePage()
        } else {
            alert("Ошибка добавления")
        }
    }

    async function deleteData() {
        // console.log(document.getElementById("name").placeholder);
        let response = await fetch("http://localhost:8888/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(daleteValues)
        })

        if (response.ok) {
            props.updatePage()
        } else {
            alert("Ошибка добавления")
        }
    }

    return (
        <Tbody>
            <Tr style={{ fontSize: "14px", fontWeight: "500" }}>
                <Td>{props.data.name}</Td>
                <Td>{props.data.ethnicity}</Td>
                <Td >
                    <Image margin="0 auto" src={props.data.image} boxSize='150px'
                        objectFit='contain' />
                </Td>
                <Td >
                    <VStack >
                        <Button w="100%" colorScheme='blue' onClick={onOpen}>
                            Изменить
                        </Button>
                        <Button onClick={() => {
                            setOpenModal(true);

                        }} w="100%" colorScheme='red' >
                            Удалить
                        </Button>
                    </VStack>
                    {/* <Button colorScheme='teal' variant='solid'>Изменить</Button> */}

                    <Drawer onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                            <DrawerBody>
                                <FormControl className='exhibit-add-form' my={3}>
                                    <FormLabel>Название</FormLabel>
                                    <Input name="name" type='text' onChange={e => handleChange(e)} value={value.name} />

                                    <FormLabel>Этническая принадлежность</FormLabel>
                                    <Input name="ethnicity" type='text' onChange={e => handleChange(e)} value={value.ethnicity} />

                                    <FormLabel>Место создания</FormLabel>
                                    <Input name="place_of_creation" type='text' onChange={e => handleChange(e)} value={value.place_of_creation} />

                                    <FormLabel>Географическая локализация места создания</FormLabel>
                                    <Input name="geography" type='text' onChange={e => handleChange(e)} value={value.geography} />

                                    <FormLabel>Тип экспоната (ID)</FormLabel>
                                    <Input name="type_id" value={props.data.type_id} _placeholder={{ opacity: 1, color: '#171923' }} type='text' disabled={true} />

                                    <FormLabel>Время создания</FormLabel>
                                    <Input name="creation_time" type='text' onChange={e => handleChange(e)} value={value.creation_time} />






                                    <FormLabel>Автор</FormLabel>
                                    <Input name="author" type='text' onChange={e => handleChange(e)} value={value.author}
                                        disabled={props.data.hasOwnProperty("author") ? false : true} />




                                    <FormLabel>Собиратель-частное лицо</FormLabel>
                                    <Input name="gatherer" type='text' onChange={e => handleChange(e)} value={value.gatherer}
                                        disabled={props.data.hasOwnProperty("gatherer") ? false : true} />


                                    {/* 
                                    {
                                        props.data.hasOwnProperty("author")
                                            ? <>
                                                <FormLabel>Автор</FormLabel>
                                                <Input id="author" type='text' placeholder={props.data.author} />
                                            </> : ""
                                    }

                                    {
                                        props.data.hasOwnProperty("gatherer")
                                            ? <>
                                                <FormLabel>Собиратель-частное лицо</FormLabel>
                                                <Input id="gatherer" type='text' placeholder={props.data.gatherer} />

                                            </> : ""
                                    } */}




                                    <FormLabel>Материал</FormLabel>
                                    <Input name="material" type='text' onChange={e => handleChange(e)} value={value.material} />

                                    <FormLabel>Размер</FormLabel>
                                    <Input name="size" type='text' onChange={e => handleChange(e)} value={value.size} />




                                    <FormLabel>Аннотация</FormLabel>
                                    <Input name="annotation" type='text'
                                        value={value.annotation}
                                        onChange={e => handleChange(e)}
                                        disabled={props.data.hasOwnProperty("annotation") ? false : true} />





                                    <FormLabel>Экспедиция</FormLabel>
                                    <Input name="expedition" type='text' value={value.expedition}
                                        onChange={e => handleChange(e)}
                                        disabled={props.data.hasOwnProperty("expedition") ? false : true} />


                                    {/* {
                                        props.data.hasOwnProperty("annotation")
                                            ? <>
                                                <FormLabel>Аннотация</FormLabel>
                                                <Input id="annotation" type='text' placeholder={props.data.annotation} />
                                            </> : ""
                                    }

                                    {
                                        props.data.hasOwnProperty("expedition")
                                            ? <>
                                                <FormLabel>Экспедиция</FormLabel>
                                                <Input id="expedition" type='text' placeholder={props.data.expedition} />
                                            </> : ""
                                    } */}

                                    <FormLabel>Картинка</FormLabel>
                                    <Input id="image" type='text' onChange={e => handleChange(e)} value={value.image} />

                                    <Input onClick={modifyData} borderWidth='2.5px' borderColor="#1A365DE" variant='solid' mt={5} type="submit" _hover={{ cursor: "pointer", background: "#fefefe" }} />
                                </FormControl>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Td>
            </Tr>

            <Modal isOpen={openModal} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Удаление товара</ModalHeader>
                    <ModalCloseButton onClick={() => {
                        setCloseModal(true)
                        setOpenModal(false)
                    }} />
                    <ModalBody>
                        <Heading as="h1" size="md">Действительно хотите удалить экспонат?</Heading>

                        <Box textAlign="center" my={5}>
                            <Button w="250px" bgColor="teal" onClick={deleteData}>ДА</Button>
                        </Box>
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            setCloseModal(true)
                            setOpenModal(false)
                        }}>
                            Close
                        </Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </Tbody>
    )
}

export default DataTableRow

// "geography": "Сан-Педро-Цильцакуапан",
// "creation_time": "2013",
// "author": null,
// "gatherer": "Давлетшин Альберт Иршатович",
// "material": "лист пальмовый, цветок растения",
// "size": "Длина - 39,0; ширина - 22,0.",
// "type_id": 5,
// "image": "http://collection.kunstkamera.ru/api/spf/P3jjNFapKkK6a3WhXoU9KYP-33Kd9wxvpPHybU_lJ7eXExHi0D9onyh5ZFkKjUvd.webp?w=1000&h=1000",
// "annotation": null

{/* <Td>{props.data.place_of_creation}</Td>
                <Td>{props.data.geography}</Td>
                <Td>{props.data.creation_time}</Td>
                <Td>{props.data.author}</Td>
                <Td>{props.data.gatherer}</Td>
                <Td>{props.data.material}</Td>
                <Td>{props.data.size}</Td> */}
{/* <Td >{props.data.annotation}</Td> */ }