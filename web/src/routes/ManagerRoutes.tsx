import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../pages/Dashboard";
import { NOTFound } from "../pages/NOTFound";

export function ManagerRoutes(){
    return (
        <Routes>
            <Route path="/" element={<AppLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
            </Route>

            <Route path="*" element={<NOTFound/>}/>
        </Routes>
    )
}