import { Container } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

function InfoLayout() {
    return (
        <>
            <Header />
            {/* <div style={{width : "100%", height: "100vh"}}> */}
                <Container centerContent maxW='container.xl' maxH="100%">
                    <Outlet />
                </Container>
            {/* </div> */}
        </>

    )
}

export default InfoLayout