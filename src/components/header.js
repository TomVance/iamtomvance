import PropTypes from "prop-types"
import React, { useContext } from "react"
import ThemeContext from "../contexts/theme"
import ReactToggle from "react-toggle"
import "react-toggle/style.css" // for ES6 modules

const Header = ({ siteTitle }) => {
  const theme = useContext(ThemeContext)

  return (
    <header
      style={{
        borderTop: `5px solid #4cb896`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <ReactToggle
          onChange={() =>
            theme.setCurrentTheme(theme.name === "dark" ? "light" : "dark")
          }
          icons={false}
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
