import React from 'react'
import { Outlet } from 'react-router-dom'
import Layouts from '../../components/Layouts'

const Organizer = () => {
    return (
        <Layouts.Third>
            <Outlet/>
        </Layouts.Third>
    )
}

export default Organizer