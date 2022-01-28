import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "./react-router-dom"
import { Home, User, Profile } from "./components"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home name="at" />} />
      <Route path="/user" element={<User />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
