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
                    © Copyright 1995-2023 Museum.Computer - All Rights Reserved
                </h5>

            </footer>
        </div>
    )
}

export default MainLayout