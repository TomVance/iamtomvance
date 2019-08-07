import React from "react"

export const themes = {
  light: {
    name: "light",
    primary: "#4cb896",
    text: "#333",
    backgroundColor: "#fff",
  },
  dark: {
    name: "dark",
    primary: "#4cb896",
    text: "#fff",
    backgroundColor: "#333",
  },
}

export default React.createContext(themes.light)
