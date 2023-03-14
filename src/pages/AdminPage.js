import React, { useEffect, useState, useRef } from 'react'
import { Box, Container, Grid, GridItem, TableContainer, Table } from '@chakra-ui/react'
import DataTableRow from '../components/admin/DataTableRow'

function AdminPage() {
    const [types, setTypes] = useState([])
    const [typeData, setTypeData] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                // setLoading(true);
                const response = await fetch("http://localhost:8888/getCollections");
                const result = await response.json();
                setTypes(result)
                // setLoading(false)
            } catch (error) {
                // setLoading(!loading);
            }
        }
        getData()
    }, [])

    async function getTypeData(id) {
        try {
            // setLoading(true);
            const response = await fetch(`http://localhost:8888/getExhibits/${id}`);
            const result = await response.json();
            setTypeData(result)
            console.log(typeData);
            // setLoading(false)
        } catch (error) {
            // setLoading(!loading);
        }
    }

    return (
        // <Container maxW='container.xl' mb={5}>
        <Grid
            w={"100%"}
            maxH="auto"
            minH="100vh"
            templateRows='repeat(2, 1fr)'
            // templateColumns='0.2fr 0.82fr'
            templateColumns='200px auto'
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg='#90CDF4' >
                <Box position="sticky" top={"0"} left={"0"} >
                    {types.map(item => <Box
                        as='p'
                        fontSize='md'
                        px={2}
                        fontWeight='semibold'
                        onClick={() => getTypeData(item.id)}
                        _hover={{ bg: '#E2E8F0', cursor: "pointer" }}>{item.type}</Box>)}
                </Box>

            </GridItem>

            <GridItem rowSpan={2} bg='papayawhip' >
                <TableContainer whiteSpace="wrap">
                    <Table variant='simple' size='md'>
                        {typeData?.map(data => <DataTableRow data={data} />)}
                    </Table>
                </TableContainer>
            </GridItem>
        </Grid>
        // </Container >

    )
}

export default AdminPage