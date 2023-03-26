import React, { useEffect, useState } from 'react'
import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SignIn from '../forms/SignIn'
import MenuComponent from './components/Menu'
import Search from './components/Search'
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
            {/* <HStack gap={"50px"}> */}
                <Image
                    boxSize='80px'
                    objectFit='cover'
                    // src='http://collection.kunstkamera.ru/api/spf/Ajs0QiFcFV2BR8prUUur7Dmf7lFIk6J6LBChgFjEnHBWBcJE6xroTgWFlWhsu3h0.data'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAllBMVEX///94uesAAAA+PULu7vDy8vJHR0cYGBkhISHS0tN+fn4WIitzseEHBwg2Njrl5ehmZmcsKy9+wvYNFRnJycs3Nzdqo8++vr4dHB8lJCeIiImioqSsrK5KSU94doBZV1//5UeXl5hTU1O2trichyrYujpvYR7/3kWBbyMxKQ0RERHb29xkmsRbW1sQDARRRhZraXLnyD46oMnRAAAC0UlEQVR4nO2ba1PiMBSGsVdA2pC12BZQaVHRsq67///PbU86C4VCclITHZfzfHGAQ3yaixknbwYDgiAIgiC+jKQYY1kwKwaj0tEgGvsWFHQMgMC4ghfqOjhT0w5jaDXkSPIKyhOzCv6sbjN38UR1/disA8yGKIbGcyUcynj9hdLstASHENquEBMB+iuuOyKw4xBjJmN2GQ7RXML0cxwqdh5v/fUO7JIclhLml7MulIR2HcQ+oMLy30k3zpSIrc2mA5ZjB+/jpMIh/oemw3aMmUa6hCqNtsPChgEwRDukthRUEnsHvykPDdO0Kh2OvUMBtQUzMCkPYOuho1gne4e3unTuse3ILM3W5KAc/KCuTFk6y4Ym4QvGVINx4BAmXmB6OvKR+JdHx2Fm2mHYz+HaGFFvh58TQ9xe93a4vTLEhBzIgRzIgRzIgRzIgRzIgRzIgRzIgRzIgRzIgRzIgRzI4Xs7TH4Y4qq/w40x+p+hGOU7OlRpcxBokoJ5EdbB3vlm4jQOcR5WGZc6iHPetSzH048EhrdyXd7EQqpuj+wdPFESTA1Tima5CAcKoo5E69zfWvRARDKi1ovzDs1o2CBz3bz+8evx6RleHnfEQQ4kCTBRHl0imIewPh9Xm827AwMjcRgMtul5EngW9+GIOzjLXbbroDurfV62eWrIcz5tNqsXp5tz1ckFwbP8vj8mq98dtctO5oKg6nmz+vOq7gcZsM7DjsI9xMEKpYNYFu8voNBZGBoOsG7irsND/XapdGiFazvhGJTDdgFANILfdXBh+OHzIpE57BZndfIjlQPD5sZTiYMbi1aiExEhjAM6tDSXOdS/i+f81N71mQ7nwDq4soAw8Hbg0N0UJGBy5uAwVcSg/GLnYCVvDw7BQs5yunOwcu9Acz4MfAv3L3QdbNxD2WJ303T3jVLHAHUfJ8FdMFq3v4K+lzS3dC+JIAiCIP5r/gL98dtsnX4sEQAAAABJRU5ErkJggg=='
                    alt='museum logo' />

                <Search />
            {/* </HStack> */}


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