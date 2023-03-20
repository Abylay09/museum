import React, { useEffect } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure, Button
} from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    Input,
    Select
} from '@chakra-ui/react'

function AddExhibit({ info, types, updatePage }) {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState({
        name: "",
        ethnicity: "",
        place_of_creation: "",
        geography: "",
        creation_time: "",
        expedition: "",
        author: "",
        gatherer: "",
        material: "",
        size: "",
        type_id: info[0].type_id,
        image: ""
    })

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    function handleChange(evt) {
        const info = evt.target.value;
        setValue({
            ...value,
            [evt.target.name]: info
        });
    }

    async function sendData() {
        console.log(value);
        let response = await fetch("http://localhost:8888/addExhibit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(value)
        })

        let result = await response.json();

        // if (response.ok) {
        //     updatePage(info[0].type_id)
        // } else {
        //     alert("Ошибка добавления")
        // }
    }

    return (
        <>
            <Button
                onClick={() => handleClick("md")}
                key={"md"}
                backgroundColor={"#F6AD55"}
            >Добавить экспонат</Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader mb={3}>
                        Добавить экспонат
                    </DrawerHeader>

                    <DrawerBody>

                        {/* <Select placeholder='medium size' size='sm' >
                            {
                                types.map((type, index) => {
                                    return <option value={index}>{type.type}</option>
                                })
                            }

                        </Select> */}

                        <FormControl className='exhibit-add-form' my={3}>
                            <FormLabel>Название</FormLabel>
                            <Input type='text' name="name" onChange={e => handleChange(e)} value={value.name} />

                            <FormLabel>Этническая принадлежность</FormLabel>
                            <Input type='text' name="ethnicity" onChange={e => handleChange(e)} value={value.ethnicity} />

                            <FormLabel>Место создания</FormLabel>
                            <Input type='text' name="place_of_creation" onChange={e => handleChange(e)} value={value.place_of_creation} />

                            <FormLabel>Географическая локализация места создания</FormLabel>
                            <Input type='text' name="geography" onChange={e => handleChange(e)} value={value.geography} />

                            <FormLabel>Тип экспоната (ID)</FormLabel>
                            <Input _placeholder={{ opacity: 1, color: '#171923' }} type='text' disabled={true} placeholder={info[0].type_id} />

                            <FormLabel>Время создания</FormLabel>
                            <Input name="creation_time" type='text' onChange={e => handleChange(e)} value={value.creation_time} />

                            {
                                info[0]?.hasOwnProperty("expedition") ? <>
                                    <FormLabel>Экспедиция</FormLabel>
                                    <Input name="annotation" type='text'
                                        value={value.expedition}
                                        onChange={e => handleChange(e)} />
                                </> : ""
                            }

                            {
                                info[0]?.hasOwnProperty("author") ? <>
                                    <FormLabel>Аннотация</FormLabel>
                                    <Input name="annotation" type='text'
                                        value={value.annotation}
                                        onChange={e => handleChange(e)} />
                                </> : ""
                            }

                            {
                                info[0]?.hasOwnProperty("gatherer") ? <>
                                    <FormLabel> Собиратель-частное лицо</FormLabel>
                                    <Input type='text' name="gatherer" onChange={e => handleChange(e)} value={value.gatherer}
                                        disabled={info[0].hasOwnProperty("gatherer") ? false : true} />
                                </> : ""
                            }



                            <FormLabel>Материал</FormLabel>
                            <Input name="material" type='text' onChange={e => handleChange(e)} value={value.material} />

                            <FormLabel>Размер</FormLabel>
                            <Input name="size" type='text' onChange={e => handleChange(e)} value={value.size} />

                            {
                                info[0]?.hasOwnProperty("annotation") ? <>
                                    <FormLabel>Аннотация</FormLabel>
                                    <Input name="annotation" type='text'
                                        value={value.annotation}
                                        onChange={e => handleChange(e)} />
                                </> : ""
                            }

                            <FormLabel>Картинка</FormLabel>
                            <Input name="image" type='text' onChange={e => handleChange(e)} value={value.image} />

                            <Input onClick={sendData} borderWidth='2.5px' borderColor="#F6E05E" mt={5} colorScheme="twitter" type="submit" _hover={{ cursor: "pointer", background: "#fefefe" }} />
                        </FormControl>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default AddExhibit