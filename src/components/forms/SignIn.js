import React, { useRef } from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Lorem,
    useDisclosure
} from '@chakra-ui/react'
import Form from "./Form";


function SignIn() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null)

    return (
        <>
            <Button colorScheme='linkedin' onClick={onOpen}>
                Войти
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader mb={2}>Авторизация</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Form/>
                    </ModalBody>

                    <ModalFooter display="flex" alignItems="center" justifyContent="center" gap="15px">
                        <Button colorScheme='red'   onClick={onClose}>
                            Закрыть
                        </Button>
                        
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SignIn