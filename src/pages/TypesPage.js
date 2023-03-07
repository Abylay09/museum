import { Spinner, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from 'react';
import ExhibitType from '../components/exhibit-types/ExhibitType';
function TypesPage() {
    const [loading, setLoading] = useState(false);
    const [types, setTypes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8888/getCollections");
                const result = await response.json();
                setTypes(result)
                setLoading(false)
            } catch (error) {
                setLoading(!loading);
            }
        }
        fetchData()
    }, [])
    return (
        <>
            {
                loading ? <Spinner /> : <SimpleGrid width={"100%"} minChildWidth='250px' spacing='50px' columns={3} >{types.map(item => <ExhibitType key={item.id} id={item.id} image={item.image} type={item.type} />)}</SimpleGrid>
            }
        </>
    )
}

export default TypesPage