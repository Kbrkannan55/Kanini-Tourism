import { Navigate, useNavigate } from "react-router-dom";

function ProtectedUser({role, children})
{
    if(localStorage.getItem("Role")!= null && localStorage.getItem("Role") === "User")
    {
        return children;
    }
    return <Navigate to="/"/>
}

export default ProtectedUser;
