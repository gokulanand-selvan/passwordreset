import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import bgimage from "./images/background.png"

export const PasswordChanged = () => {
    return (
        <Box sx={{ background: `url(${bgimage})`, height: "77vh", paddingRight: '32rem', paddingLeft: '33rem', paddingTop: "8%", }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                <Box >
                    <p style={{ font: "Poppins", fontWeight: 700, fontSize: "28px", lineHeight: "57.6px", color: "#000000" }}>Password Changed</p>
                </Box>
                <Box sx={{ marginTop: "20px" }} >
                    Your password has been updated! Now get back
                    in the driver seat, racers are waiting for you!
                </Box>
                <Box>
                    <Button sx={{ color: "#FFFFFF", backgroundColor: "black", width: "372px", marginTop: "40px" }}>JOIN A RACE</Button>
                </Box>
            </Box>

        </Box>
    )
}
