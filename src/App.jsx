
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

// Pages
import Register from '../FireBaseProject/Pages/Register';
import Login from '../FireBaseProject/Pages/Login';
import ListForm from '../FireBaseProject/Pages/ListForm'



// Componnents
import MyNavbar from '../FireBaseProject/Components/MyNavbar';

function App() {
  return (
    <div>
     <MyNavbar/>
   <Routes>
         <Route  path ="/" element={ <h1>Home</h1>}/>
          <Route  path ="/register" element={ <Register/>}/>
          <Route  path ="/login" element={ <Login/>}/>
          <Route  path ="/list" element={ <ListForm/>}/>

   </Routes>
   </div>
  )
}

export default App