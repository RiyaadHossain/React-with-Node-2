
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import Update from './Components/Update/Update';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add' element={<AddUser />}/>
        <Route path='/user/:id' element={<Update />}/>
      </Routes>
    </div>
  );
}

export default App;
