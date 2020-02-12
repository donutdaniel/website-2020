import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import "./layout.css"

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
theme.typography.h2['fontSize'] = '24px'
theme.typography.h4['fontSize'] = '24px'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Helmet>
      <main>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
