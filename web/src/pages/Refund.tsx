import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";
import { CATEGORIES, CATEGORIES_KEYS} from "../utils/categories"
import fileSvg from "../assets/file.svg"

export function Refund(){
    const [name,setName] = useState("")
    const [category,setCategory] = useState("")
    const [amount,setAmount] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [filename,setFilename] = useState<File | null>(null)
    const navigate = useNavigate()
    const params = useParams<{ id: string}> ()

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        if(params.id){
            return navigate(-1)
        }

        console.log(name, category, amount, filename)
        navigate("/confirm", { state: {fromSubmit:true}})
    }

    return (
        <form 
            onSubmit={onSubmit}
            className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]"
        >
            <header>
                <h1 className="text-xl font-bold text-gray-100">
                    Solicitação de reembolso
                </h1>
                <p className="text-sm text-gray-200 mt-2 mb-4">
                    Dados da despesa para solicitar reembolso.
                </p>
            </header>

            <Input
                required
                legend="Nome da solicitação"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!!params.id}
            />

            <div className="flex gap-4">
                <Select
                    required
                    legend="Categoria"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    disabled={!!params.id}
                >
                    {CATEGORIES_KEYS.map((category) => (
                        <option
                        key={category}
                        value={category}
                        >
                            {CATEGORIES[category].name}
                        </option>
                    ))}
                </Select>

                <Input
                    required
                    legend="Valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={!!params.id}
                />
            </div>

            {params.id ? (
                <a 
                    href="https://kick.com/following" 
                    target="_blank"
                    className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
                >
                    <img src={fileSvg} alt="Ícone de arquivo" />
                    Abrir comprovante
                </a>
            ) : (
                <Upload 
                    filename={filename && filename.name} 
                    onChange={(e) => e.target.files && setFilename(e.target.files[0])}
                    disabled={!!params.id}
                />
            )}
                
                

            <Button 
                type="submit"
                isLoading={isLoading}
            >
                {params.id ? "Voltar" : "Enviar"}
            </Button>
            
        </form>
    )
}