import React from 'react'
import { Box, Card, Heading, Image, } from '@chakra-ui/react'
import "./ExhibitType.css"
import { useNavigate } from 'react-router-dom';
function ExhibitType({ type, image, id}) {
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/exhibit/${id}`)} className='type-block' width={"100%"} height='270px' py={7}>
            <Image
                boxSize='180px'
                objectFit='contain'
                src={image}
                alt='Dan Abramov'
            />
            <Heading as='span' size='sm' mt={5}>
                {type}
            </Heading>
        </Card>
    )
}

export default ExhibitType