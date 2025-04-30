import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";
import { EmpoyeeRoutes } from "./EmployeeRoute"; 

export function Routes() {
    return (
        <BrowserRouter>
            <EmpoyeeRoutes />
        </BrowserRouter>
    );
    }
