import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signup(){
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[passwordConfirm, setPasswordConfirm] = useState("")
    const[isLOading, setIsLoading] = useState(false)
    
    function onSubmit(e: React.FormEvent){
        e.preventDefault()
        console.log(name,email,password, passwordConfirm)
    }
    

    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4"> 
            <Input
                required
                legend="Name"
                placeholder="Seu nome"
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                required
                legend="E-mail"
                type="email"
                placeholder="seu@email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                required
                legend="Senha"
                type="password"
                placeholder="senha"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                required
                legend="Confirme sua senha"
                type="password"
                placeholder="senha"
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            
            <Button type="submit" isLoading={isLOading}>Cadastrar</Button>

            <a
                href="/"
                className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
            >
                Já tem uma conta? Faça Login
            </a>

        </form>
    )
}