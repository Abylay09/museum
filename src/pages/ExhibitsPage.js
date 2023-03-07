import { SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ExhibitItem from '../components/exhibit-item/ExhibitItem';

function ExhibitsPage() {
    const [loading, setLoading] = useState(false);
    const [exhibits, setExhibits] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8888/getExhibits/${params.id}`);
                const result = await response.json();
                setExhibits(result)
                setLoading(false)
            } catch (error) {
                setLoading(!loading);
            }

        }
        fetchData()
    }, [params.id])
    return (
        <SimpleGrid width={"100%"} minChildWidth='250px' spacing='50px' columns={3} >
            {exhibits.map(exhibit => <ExhibitItem key={exhibit.id} typeId={exhibit.type_id} id={exhibit.id} image={exhibit.image} name={exhibit.name} />)}
        </SimpleGrid>
    )
}

export default ExhibitsPage