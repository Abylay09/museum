import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Image, Spinner } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
function ExhibitInfoPage() {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState([]);
    const params = useParams();
    const naviagte = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8888/exhibit/getData/${params.typeId}/${params.id}`);
                const result = await response.json();
                setInfo(result)
                setLoading(false)
            } catch (error) {
            }
        }
        fetchData()
    }, [])
    return (
        <>
            {
                loading ? <Spinner />
                    : <>
                        <div 
                            style={{ width: "100%", textAlign: "left", marginBottom: "15px", cursor: "pointer", fontWeight: "600" }} >
                            <ChevronLeftIcon w={"32px"} /> <span onClick={() => naviagte(`/exhibit/${info.type_id}`)}>Назад</span>
                        </div>
                        <Flex justify={"space-between"} align={"start"} w={"100%"} >
                            <TableContainer maxWidth="50%" whiteSpace="wrap" style={{ paddingBottom: "50px" }}>
                                <Table variant='simple' size='md' >
                                    <TableCaption>Данные об экспонате</TableCaption>
                                    <Tbody>
                                        <Tr>
                                            <Td>Наименование, название</Td>
                                            <Td>{info.name}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Страна производитель</Td>
                                            <Td>{info.ethnicity}</Td>
                                        </Tr>
                                        {/* <Tr>
                                            <Td>Географическая локализация места создания</Td>
                                            <Td>{info.geography}</Td>
                                        </Tr> */}
                                        <Tr>
                                            <Td>Время создания</Td>
                                            <Td>{info.creation_time ? info.creation_time : "-"}</Td>
                                        </Tr>
                                        {/* <Tr>
                                            <Td>Собиратель-частное лицо</Td>
                                            <Td>{info.gatherer ? info.gatherer : "-"}</Td>
                                        </Tr> */}
                                        <Tr>
                                            <Td>Описание</Td>
                                            <Td>{info.material}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Размер</Td>
                                            <Td>{info.size}</Td>
                                        </Tr>
                                        {
                                            info.annotation
                                                ? <Tr>
                                                    <Td>Размер</Td>
                                                    <Td>{info.annotation}</Td>
                                                </Tr>
                                                : ""
                                        }

                                    </Tbody>
                                </Table>
                            </TableContainer>

                            <Image src={info.image} boxSize='380px'
                                objectFit='contain' />
                        </Flex>
                    </>
            }
        </>
    )
}

export default ExhibitInfoPage