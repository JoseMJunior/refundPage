import { Route, Routes } from "react-router";
import { NOTFound } from "../pages/NOTFound";
import { Refund } from "../pages/Refund";
import { AppLayout } from "../components/AppLayout";





export function EmpoyeeRoutes(){
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Refund/>}/>
            </Route>

            <Route path="*" element={<NOTFound/>}/>
        </Routes>
    )



}