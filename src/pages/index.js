import ThemeContext, { themes } from "../contexts/theme"
import React, { useState, useContext } from "react"
import { useInterval } from "../hooks/useInterval"

import Layout from "../components/layout"
import SEO from "../components/seo"

const wordList = ["Good Morning", "Good Afternoon", "Good Evening"]

function getWord(hours) {
  if (hours < 12) return wordList[0]
  if (hours < 17) return wordList[1]
  return wordList[2]
}

const IndexPage = () => {
  const theme = useContext(ThemeContext)
  const [delay] = useState(3600000)
  const [currentHours, setCurrentHours] = useState(new Date().getHours())

  useInterval(() => {
    setCurrentHours(new Date().getHours())
  }, delay)

  return (
    <Layout>
      <SEO title="Home" />

      <h1 style={{ fontSize: "4rem", color: theme.text }}>
        {getWord(currentHours)},
      </h1>

      <div style={{ color: theme.text }}>
        <ul>
          <li>
            <strong>Current Location</strong>: Canterbury, UK
          </li>
          <li>
            <strong>Will be attending: </strong>
            <i>Nothing planned for the rest of the year yet.</i>
          </li>
          <li>
            <strong>Speaking At: </strong>
            <i>I don't yet have anything lined up but I loved too!</i>
          </li>
        </ul>
      </div>

      <div style={{ width: "70%", color: theme.text }}>
        <p>
          I'm a Software Engineer, with a passion for Javascript. Currently
          working as a Javascript Engineer at the wonderful{" "}
          <a
            style={{ color: theme.primary }}
            href="https://twitter.com/hxtechteam"
          >
            @hxtechteam.
          </a>
        </p>

        <p>
          I also do some writing from time to time, all of this can be found
          over on my medium account{" "}
          <a
            style={{ color: theme.primary }}
            href="https://medium.com/@TomVance"
          >
            https://medium.com/@TomVance
          </a>
        </p>

        <p>
          And if you're really eager to hear more from me I sometimes tweet over
          at
          <a
            style={{ color: theme.primary }}
            href="https://twitter.com/tomvance94"
          >
            @tomvance94
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default () => {
  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{ ...themes[currentTheme], setCurrentTheme }}>
      <IndexPage />
    </ThemeContext.Provider>
  )
}
