import React from 'react'
import { MenuItem, Image, Menu, MenuButton, MenuDivider, MenuList, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons'
function MenuComponent() {
    const navigate = useNavigate();

    return (
        <Menu>
            <MenuButton
                px={5}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
            >
                Калькуляторы <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => navigate(`/exhibit/${2}`)}>Калькуляторы</MenuItem>
                <MenuItem onClick={() => navigate(`/exhibit/${3}`)}>Пейджеры</MenuItem>
                <MenuItem onClick={() => navigate(`/exhibit/${4}`)}>Материнские платы</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => navigate(`/exhibit/${5}`)}>Видеокарты</MenuItem>
                <MenuItem onClick={() => navigate(`/exhibit/${6}`)}>Процессоры</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuComponent