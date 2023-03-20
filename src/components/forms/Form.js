import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Text,
    Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    async function auth(event) {
        event.preventDefault();
        let response = await fetch(`http://localhost:8888/auth/${name}/${password}`)
        let result = await response.json();
        if (response.ok) {
            sessionStorage.setItem("worker", `${result.name}$${result.id}`);
            navigate("/admin")
        }else{
            alert("Данного пользователя нет в системе")
        }

    }

    const handleInputChangeName = (e) => setName(e.target.value)
    const handleInputChangePassword = (e) => setPassword(e.target.value)


    const isNameError = name === ''
    const isPasswordError = password === ''
    let valid = isNameError && isPasswordError;

    return (
        <FormControl mb={5}>
            <FormLabel>Имя</FormLabel>
            <Input type='email' value={name} onChange={handleInputChangeName} mb={2} placeholder='Ваше имя' />
            {!isNameError ? "" : (
                <Text fontSize='14px' color='tomato'>
                    Имя обязательно к заполнению
                </Text>
            )}
            <FormLabel mt={5}>Пароль</FormLabel>
            <Input type='password' value={password} onChange={handleInputChangePassword} mb={2} placeholder='Ваш пароль' />
            {!isPasswordError ? "" : (
                <Text fontSize='14px' color='tomato'>
                    Пароль обязательно к заполнению
                </Text>
            )}
            <Button colorScheme='green' mt={5} style={{ marginLeft: "50%", transform: "translateX(-50%)" }} onClick={auth}>
                Авторизоваться
            </Button>
        </FormControl>
    )
}