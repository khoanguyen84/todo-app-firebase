import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import WorkSpace from './pages/WorkSpace';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<WorkSpace />} />
      </Routes>
    </>
  );
}

export default App;
