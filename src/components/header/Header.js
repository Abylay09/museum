import React, { useEffect, useState } from 'react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SignIn from '../forms/SignIn'
import MenuComponent from './components/Menu'
function Header() {
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem("worker")) {
            setLogged(true)
        } else {
            setLogged(false)
        }
    }, [])
    return (
        <header>
            <Image
                boxSize='80px'
                objectFit='cover'
                src='http://collection.kunstkamera.ru/api/spf/Ajs0QiFcFV2BR8prUUur7Dmf7lFIk6J6LBChgFjEnHBWBcJE6xroTgWFlWhsu3h0.data'
                alt='museum logo' />

            <nav className='menu'>
                {
                    logged
                        ? (<>
                            <Link to={"/"}>Категорий экспонатов</Link>
                            <MenuComponent />
                            <Link to={"/admin"}>Личный кабинет</Link>

                            {/* <SignIn /> */}
                        </>) 
                        : (<>
                            <Link to={"/"}>Категорий экспонатов</Link>
                            <MenuComponent />
                            <SignIn />
                        </>) 
                }
            </nav>
        </header>
    )


}

export default Header