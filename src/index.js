import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
