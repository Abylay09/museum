import React from 'react'
import { Box, Card, Heading, Image, } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function ExhibitItem({ image, name, typeId, id }) {
    const navigate = useNavigate()
    return (
        <Card onClick={() => navigate(`/exhibit-info/${typeId}/${id}`)} className='type-block' width={"100%"} height='270px' py={7}>
            <Image
                boxSize='220px'
                objectFit='contain'
                src={image}
                alt='Dan Abramov'
            />
            <Heading as='span' size='sm' mt={5}>
                {name}
            </Heading>
        </Card>
    )
}

export default ExhibitItem