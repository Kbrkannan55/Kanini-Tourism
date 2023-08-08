import { Navigate, useNavigate } from "react-router-dom";
import Adminpage from "../Adminpage/Adminpage";

function ProtectedAdmin({role, children})
{
    if(sessionStorage.getItem("role")!= null && sessionStorage.getItem("role") === "Admin")
    {
        return <Adminpage/>;
    }
    return <Navigate to="/notfoundpage"/>
}

export default ProtectedAdmin;
