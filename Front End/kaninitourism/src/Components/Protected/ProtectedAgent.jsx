import { Navigate, useNavigate } from "react-router-dom";
import Adminpage from "../Adminpage/Adminpage";
import TravelAgentPackage from "../TravelAgentPackage/TravelAgentPackage";

function ProtectedAgent({role, children})
{
    if(sessionStorage.getItem("role")!= null && sessionStorage.getItem("role") === "Agent")
    {
        return <TravelAgentPackage/>;
    }
    return <Navigate to="/notfoundpage"/>
}

export default ProtectedAgent;
