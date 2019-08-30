import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"
import Container from "../styles/Container"
import {UserProvider, NotificationProvider} from "../context"
import Notification from "./Notification"

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-family: "Roboto", sans-serif;
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles/>

            <StyledLayout>
                <NotificationProvider>
                    <UserProvider>
                        <Header/>
                    </UserProvider>

                    <Container>{children}</Container>
                    <Footer/>

                    <Notification/>
                </NotificationProvider>
            </StyledLayout>
        </>
    </ThemeProvider>
)

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
