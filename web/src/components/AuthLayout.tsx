import { Outlet } from "react-router";
import logoSvg from "../assets/logo.svg"

export function AuthLayout() {
    return (
        <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100">
            <main>
                <img src={logoSvg} alt="Logo" />
                <Outlet/>
            </main>
        </div>

    )
}