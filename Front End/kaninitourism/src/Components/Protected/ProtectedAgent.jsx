import { Navigate, useNavigate } from "react-router-dom";

function ProtectedAgent({role, children})
{
    if(localStorage.getItem("Role")!= null && localStorage.getItem("Role") === "Agent")
    {
        return children;
    }
    return <Navigate to="/"/>
}

export default ProtectedAgent;
