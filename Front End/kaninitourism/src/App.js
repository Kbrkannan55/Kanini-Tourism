import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import RegistrationForm from './Components/RegisterForUser/Register';
import Register from './Components/RegisterForUser/Register';
import Login from './Components/Login/Login';
import TravelAgentPage from './Components/TravelAgentPage/TravelAgentPage';
import RegistrationFormforAgent from './Components/RegisterForAgent/Registerforagent';
import Adminpage from './Components/Adminpage/Adminpage';
import AvailableAgencies from './Components/AvailableAgencies/AvailableAgencies';
import Feedback from './Components/Feedback/Feedback';
import Place from './Components/Places/Place';
import ShowPlace from './Components/Places/ShowPlace';
import Payment from './Components/Payment/Payment';
import Chatbot from './Components/Chatbot/Chatbot';
import GalleryImages from './Components/Places/Place';
import AdminImage from './Components/AdminImages/AdminImage';
import ShowSpot from './Components/Spot/ShowSpot';
import CRUDgallery from './Components/AdminImages/ShowAdminImage';
import Hotel from './Components/Hotel/Hotel';
import ShowHotel from './Components/Hotel/ShowHotel';
import Package from './Components/Package/Package';
import Booking from './Components/Booking/Booking';
import Invoice from './Components/Invoice/Invoice';
import TravelAgentHotel from './Components/TravelAgentHotel.jsx/TravelAgentHotel';
import TravelAgentSpot from './Components/TravelAgentSpot/TravelAgentSpot';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddingPackage from './Components/AddingPackage/AddingPackage';
import TravelAgentPackage from './Components/TravelAgentPackage/TravelAgentPackage';
import ShowAdminImage from './Components/AdminImages/ShowAdminImage';
import { NotificationsOffOutlined } from '@mui/icons-material';
import ProtectedAdmin from './Components/Protected/ProtectedAdmin';
import ProtectedAgent from './Components/Protected/ProtectedAgent';
import ProtectedUser from './Components/Protected/ProtectedUser';


function App() {
  const roles=sessionStorage.getItem('role')
  const token=sessionStorage.getItem('accessToken')

  return (
    <>
     
      <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/package' element={<Package />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/agentsignup' element={<RegistrationFormforAgent />} />
          <Route path='/adminpage' element={(roles === "Admin" ? <Adminpage/> : <NotFoundPage/>)}/>
          <Route path='/agentpage' element={<ProtectedAgent>roles={token}<TravelAgentPackage/></ProtectedAgent>}/>
          <Route path='/book' element={<Booking />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/invoice' element={<Invoice />} />
          <Route path='/avaiableagencies' element={(roles === "Admin") ? <AvailableAgencies />:<NotFoundPage/>} />
          <Route path='/adminimage' element={roles === "Admin" ? <ShowAdminImage />:<NotFoundPage/>} />
          <Route path='/showplace' element={<ShowPlace />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
