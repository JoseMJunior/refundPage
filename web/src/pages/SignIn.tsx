import { Input } from "../components/Input";

export function SigIn(){
    return(
        <form className="w-full flex flex-col gap-4"> 
            <Input
                required
                legend="E-mail"
                type="email"
                placeholder="seu@email"
            />
            <Input
                required
                legend="Senha"
                type="password"
                placeholder="senha"
            />

        </form>
    )
}