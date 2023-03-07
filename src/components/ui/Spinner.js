import React from 'react'
import { Spinner } from '@chakra-ui/react'
function Spinner() {
    return (
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    )
}

export default Spinner