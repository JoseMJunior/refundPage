import { Routes, Route } from "react-router";
import { SigIn } from "../pages/SignIn";
import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element= {<AuthLayout/>}>
                <Route path="/" element={<SigIn />} />
            </Route>
        </Routes>
    );
}
