import React from 'react'
import { Tbody, Tr, Td, Image } from '@chakra-ui/react'
function DataTableRow(props) {
    console.log(props);
    return (
        <Tbody>
            <Tr style={{ fontSize: "14px" }}>
                <Td>{props.data.name}</Td>
                <Td>{props.data.ethnicity}</Td>
                {/* <Td>{props.data.place_of_creation}</Td>
                <Td>{props.data.geography}</Td>
                <Td>{props.data.creation_time}</Td>
                <Td>{props.data.author}</Td>
                <Td>{props.data.gatherer}</Td>
                <Td>{props.data.material}</Td>
                <Td>{props.data.size}</Td> */}
                {/* <Td >{props.data.annotation}</Td> */}
                <Td>
                    <Image src={props.data.image} boxSize='150px'
                        objectFit='contain' />
                </Td>

            </Tr>
            
        </Tbody>
    )
}

export default DataTableRow

// "geography": "Сан-Педро-Цильцакуапан",
// "creation_time": "2013",
// "author": null,
// "gatherer": "Давлетшин Альберт Иршатович",
// "material": "лист пальмовый, цветок растения",
// "size": "Длина - 39,0; ширина - 22,0.",
// "type_id": 5,
// "image": "http://collection.kunstkamera.ru/api/spf/P3jjNFapKkK6a3WhXoU9KYP-33Kd9wxvpPHybU_lJ7eXExHi0D9onyh5ZFkKjUvd.webp?w=1000&h=1000",
// "annotation": null