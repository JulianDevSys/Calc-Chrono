import { Outlet } from "react-router-dom";
export default function Principal(){
    return(
        <div className="principal_container">
            <Outlet/>
        </div>
    )
}