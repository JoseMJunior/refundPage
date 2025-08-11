import { Route, Routes } from "react-router";
import { NOTFound } from "../pages/NOTFound";
import { Refund } from "../pages/Refund";
import { AppLayout } from "../components/AppLayout";
import { Confirm } from "../pages/Confirm";





export function EmployeeRoutes(){
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Refund/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Route>

            <Route path="*" element={<NOTFound/>}/>
        </Routes>
    )



}