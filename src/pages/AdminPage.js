import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Box, Container, Grid, GridItem, TableContainer, Table, Spinner, Heading, HStack, Button } from '@chakra-ui/react'
import DataTableRow from '../components/admin/DataTableRow'
import AddExhibit from '../components/admin/AddExhibit'
import { useNavigate } from 'react-router-dom'

function AdminPage() {
    const [types, setTypes] = useState([])
    const [typeData, setTypeData] = useState([])
    const [title, setTitle] = useState();
    const [dataLoading, setDataLoading] = useState()

    const navigate = useNavigate();

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
            setDataLoading(true);
            const response = await fetch(`http://localhost:8888/getExhibits/${id}`);
            const result = await response.json();
            setTypeData(result)
            setDataLoading(false)
        } catch (error) {
            setDataLoading(!dataLoading);
        }
    }

    function exit() {
        sessionStorage.clear()
        navigate("/");
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
            <GridItem rowSpan={2} colSpan={1} bg='#63B3ED' pt={5}>
                <Box position="sticky" top={"0"} left={"0"} px={2}>
                    {types.map(item => <Box
                        as='p'
                        fontSize='md'
                        px={2}
                        mb={5}
                        fontWeight='semibold'
                        onClick={() => {
                            getTypeData(item.id);
                            setTitle(item.type)
                        }}
                        _hover={{ bg: '#E2E8F0', cursor: "pointer" }}>{item.type}</Box>)}
                    <Button onClick={exit} w="100%" backgroundColor="red" color="#000000">Выйти</Button>
                </Box>
                {/* <Box px={2}>
                    <Button onClick={exit} w="100%" backgroundColor="red" color="#000000">Выйти</Button>
                </Box> */}
            </GridItem>

            <GridItem rowSpan={2} bg='papayawhip' >


                {dataLoading ?
                    <Spinner color='red.500' size='lg' style={{ margin: "25% 0 0 50% ", transform: "translateX(-50%)" }} />
                    : <>
                        <HStack align="center" justify="space-between" w="100%" px={4} py={5}>
                            <Heading as='h2' size='md'>
                                {title}
                            </Heading>

                            {
                                typeData.length != 0 ? <Box
                                    as='span'
                                    fontSize='md'
                                    px={2}
                                    fontWeight='semibold'>
                                    <AddExhibit updatePage={(id) => getTypeData(id)} info={typeData} types={types} />
                                </Box>
                                    : ""
                            }

                        </HStack>

                        <TableContainer whiteSpace="wrap" >
                            <Table variant='simple' size='md' pos="relative" colorScheme="blue">
                                {typeData?.map(data => <DataTableRow updatePage={() => getTypeData(data.type_id)} data={data} />)}
                            </Table>
                        </TableContainer>
                    </>}

            </GridItem>
        </Grid >
        // </Container >

    )
}

export default AdminPage