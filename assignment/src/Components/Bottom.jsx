import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Bottom() {
    return (
        <>
            <Box sx={{ background: '#33A0D9', height: "10vh" }} >
                <ul style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", height: "100%", listStyleType: "none" }}>
                    <li> About Us </li>
                    <li> Privacy Policy </li>
                    <li> Tutorial </li>
                    <li> Terms of Service </li>
                </ul>
            </Box>
        </>
    )
}
