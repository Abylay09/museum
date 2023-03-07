import { Container, VStack } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

function Layout() {
    return (
        <>
            {/* <VStack> */}

            <Header />
            <div className='types-section '>
                <Container centerContent maxW='container.lg'>
                    <Outlet />
                </Container>
            </div>

            {/* </VStack> */}
        </>
    )
}

export default Layout