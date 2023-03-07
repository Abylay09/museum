import React from 'react'
import { MenuItem, Image, Menu, MenuButton, MenuDivider, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
    const navigate = useNavigate();
    return (
        <header>
            {/* <Box boxSize='sm'> */}
            <Image
                boxSize='80px'
                objectFit='cover'
                src='http://collection.kunstkamera.ru/api/spf/Ajs0QiFcFV2BR8prUUur7Dmf7lFIk6J6LBChgFjEnHBWBcJE6xroTgWFlWhsu3h0.data'
                alt='museum logo' />

            <nav className='menu'>
                <Link to={"/"}>Категорий экспонатов</Link>
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
            </nav>
            {/* </Box> */}
        </header>
    )


}

export default Header