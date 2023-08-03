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

function App() {
  
  return (
    <>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet"></link>
    {/* <Home/> */}
    {/* <Navbar/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Home/> */}
    {/* <TravelAgentPage/> */}
    {/* <RegistrationForm/> */}
    {/* <RegistrationFormforAgent/> */}
    <Adminpage/>
    </>
  );
}

export default App;
