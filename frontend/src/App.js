import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Users from './pages/Users';
import RumahKost from './pages/RumahKost';
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddRumahKost from './pages/AddRumahKost';
import EditRumahKost from './pages/EditRumahKost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/add" element={<AddUser/>}/>
        <Route path="/users/edit/:id" element={<EditUser/>}/>
        <Route path="/rumah-kost" element={<RumahKost/>}/>
        <Route path="/rumah-kost/add" element={<AddRumahKost/>}/>
        <Route path="/rumah-kost/:id" element={<EditRumahKost/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
