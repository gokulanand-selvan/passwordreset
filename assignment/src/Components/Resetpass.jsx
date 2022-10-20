import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bgimage from "./images/background.png"

// let obj = {
//     color: sam === true ? "res" : "black"
// }

export default function Resetpass() {

    const [password, setPassword] = useState("")
    const [retypepassword, setRetypePassword] = useState("")
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()
    }
    const clickHandler = () => {
        if (password !== retypepassword) {
            setError(true)
            setErrorMessage("Incorrect password")
        }
        if (password.length < 8) {
            setError(true)
            setErrorMessage("Incorrect password")
        }

        else {
            navigate("/success")
        }
    }

    return (
        <Box sx={{ background: `url(${bgimage})` }} >
            <Box sx={{ display: "flex", justifyContent: "center", height: "82vh", paddingRight: '32rem', paddingLeft: '33rem', paddingTop: "8%" }}>
                <Box >
                    <p style={{ font: "Poppins", fontWeight: 700, fontSize: "28px", lineHeight: "57.6px", color: "#000000" }}>
                        Password Reset </p>
                    <form onSubmit={handleSubmit}>
                        <p style={{ font: "Avenir Next", fontWeight: 700, lineHeight: "32.78px", color: "#000000", marginTop: "20px" }} >
                            NEW PASSWORD </p>
                        <label>
                            <input type="password" name="name"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ border: 'solid black 3px', width: "372px" }} />
                        </label>
                        <p style={{ font: "Avenir Next", fontWeight: 700, lineHeight: "32.78px", letter: "20.5%", marginTop: "20px", color: "#000000" }}>
                            RE-ENTER NEW PASSWORD
                        </p>
                        <label>
                            <input type="password" name="name"
                                value={retypepassword}
                                onChange={(e) => setRetypePassword(e.target.value)}
                                style={{ border: error ? '3px solid red ' : '3px solid black ', width: "372px" }} />
                            {error}
                            <p style={{ color: "red" }}>{errorMessage}</p>
                        </label>
                    </form>
                    <>
                        <Button type="submit" onClick={() => { clickHandler(); setPassword(""); setRetypePassword("") }} sx={{ marginTop: "20px", color: "#FFFFFF", backgroundColor: "black", width: "372px" }} >RESET PASSWORD</Button>
                    </>
                </Box>
            </Box>
        </Box>
    )
}


