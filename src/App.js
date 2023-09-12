
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "react-router-dom"
import Details from './components/details/Details';
import AddCart from './components/addCart/AddCart';
import Dashboard from './components/dashboard/Dashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/addCart' element={<AddCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
