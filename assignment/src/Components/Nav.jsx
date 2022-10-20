import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import logo from "./images/logo.png"

export const Nav = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-around", background: '#33A0D9', height: "8vh" }}>
                <img src={logo} alt="logo" />
                <Box sx={{ textAlign: "center", }}>
                    <ul style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", listStyleType: "none" }}>
                        <li style={{ marginRight: "20px" }}> <a href='empty'> Join a Race </a> </li>
                        <li style={{ marginRight: "20px" }}>  <a href='link'> Leaderboard </a> </li>
                        <li style={{ marginRight: "20px" }}> <a href='link' > <Button>Login</Button> </a> </li>
                    </ul>
                </Box>
            </Box>
        </>
    )
}
