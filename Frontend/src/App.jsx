import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import FormComponent from './components/FormComponent.jsx'
import SubmittedForms from './components/SubmittedForms'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<FormComponent/>}/>
        <Route path='/forms' element={<SubmittedForms/>}/>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
