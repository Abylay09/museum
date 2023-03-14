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
                Фотоколлекция <ChevronDownIcon />
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => navigate(`/exhibit/${2}`)}>Фотоколлекция</MenuItem>
                <MenuItem onClick={() => navigate(`/exhibit/${3}`)}>Этнография Европы</MenuItem>
                <MenuItem onClick={() => navigate(`/exhibit/${4}`)}>Этнография Сибири</MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => navigate(`/exhibit/${5}`)}>Этнография Америки</MenuItem>
                <MenuItem onClick={() => navigate(`/exhibit/${6}`)}>Антропологические пластические реконструкции, прижизненные маски. XIX - XX вв.</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuComponent