import { Container } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'


function Exhibitslayout() {
    return (
        <>
            <Header />
            <div className='exhibits-section '>
                <Container centerContent maxW='container.lg'>
                    <Outlet />
                </Container>
            </div>
        </>

    )
}

export default Exhibitslayout