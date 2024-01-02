"use client"
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from '../store'
import { Provider } from 'react-redux'
import styles from './page.module.css'

import Main from '../pages/main'
import Layout from '../pages/layout'
import Form from '../pages/form'

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        <Router>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/layout' element={<Layout />} />
              <Route path='/form' element={<Form />} />
            </Routes>
        </Router>
      </Provider>
    </main>
  )
}
