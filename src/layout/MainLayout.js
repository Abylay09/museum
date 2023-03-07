import React from 'react'
import { Outlet } from 'react-router-dom'
import "./Layout.css"
function MainLayout() {
    return (
        <div style={{ display: 'flex', flexDirection: "column", height: "100vh" }}>
            <div style={{ flex: "1",}}>
                <Outlet />
            </div>
            <footer>
                <h5>
                    @ 2018 Музей антропологии и этнографии им. Петра Великого (Кунсткамера) Российской академии наук
                </h5>
                Все права защищены.
            </footer>
        </div>
    )
}

export default MainLayout