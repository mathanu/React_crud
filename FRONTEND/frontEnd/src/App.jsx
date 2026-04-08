import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Employee from './Components/Employee';
import CreateEmp from './Components/CreateEmp';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateEmp from './Components/UpdateEmp';
import Header from './Components/Header';


const App=()=>{

  return(
    <div className='App'>
      <Header/>
      <BrowserRouter>
      <Routes>

        <Route path ='/' element={<Employee/>}></Route>
        <Route path ='/create' element={<CreateEmp/>}></Route>
        <Route path='/view/:id' element={<UpdateEmp />}></Route>
        <Route path ='/update/:id' element={<UpdateEmp/>}></Route>
      </Routes>
      </BrowserRouter>

    

    </div>
  )
}


export default App;
