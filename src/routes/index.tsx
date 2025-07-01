import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";
import { EmpoyeeRoutes } from "./EmployeeRoute"; 
import { ManagerRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";

const isLoading = false
//const session = undefined
const session = {
    user: {
        role: "manager"
    }
}

export function Routes() {
    function Route(){
        switch (session?.user.role) {
            case "employee":
                return <EmpoyeeRoutes/>
            case "manager":
                return <ManagerRoutes/>
            default:
                return <AuthRoutes/>
        }
    }

    if (isLoading){
        return <Loading/>
    }
    
    return (
        <BrowserRouter>
            <Route />
        </BrowserRouter>
    );
}
