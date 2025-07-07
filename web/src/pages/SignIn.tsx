import { useActionState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SigIn(){
    const [state, formAction, isLoading] = useActionState(signIn, null)

    
    function signIn(prevState: any, formData: FormData){

    }
    

    return (
        <form action = {formAction} className="w-full flex flex-col gap-4"> 
            <Input
                name="email"
                required
                legend="E-mail"
                type="email"
                placeholder="seu@email.com"
                />

            <Input
                name="password"
                required
                legend="Senha"
                type="password"
                placeholder="senha"
            />
            
            <Button type="submit" isLoading={isLoading}>Entrar</Button>

            <a
                href="/signup"
                className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
            >
                Criar conta
            </a>

        </form>
    )
}