import { Routes, Route } from "react-router";
import { SigIn } from "../pages/SignIn";
import { AuthLayout } from "../components/AuthLayout";
import { Signup } from "../pages/Signup";
import { NOTFound } from "../pages/NOTFound";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element= {<AuthLayout/>}>
                <Route path="/" element={<SigIn/>} />
                <Route path="/signup" element={<Signup/>} />
            </Route>
            <Route path="*" element={<NOTFound/>}/>
        </Routes>
    );
}
