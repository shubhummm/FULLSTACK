import { useState } from "react"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <h2>Theme Toggle SPA</h2>

      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <p>
        This is a simple SPA that switches between light and dark themes
        using React state.
      </p>
    </div>
  )
}

export default App