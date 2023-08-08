import { Navigate, useNavigate } from "react-router-dom";
import Adminpage from "../Adminpage/Adminpage";
import Booking from "../Booking/Booking";

function ProtectedUser({role, children})
{
    if(sessionStorage.getItem("role")!= null && sessionStorage.getItem("role") === "User")
    {
        return <Booking/>;
    }
    return <Navigate to="/notfoundpage"/>
}

export default ProtectedUser;
