import React from 'react'
import Header from '../components/Header'
import { Outlet } from "react-router-dom";
import Socials from '../components/Socials'

export default function Root() {
    return (
        <>
        <Socials />
        <Header />
        <div id="page-container">
            <Outlet />
        </div>
        </>
        )
}