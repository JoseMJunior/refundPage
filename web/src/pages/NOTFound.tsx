export function NOTFound(){
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-400">
            <div className="flex flex-col">
                <h1 className="text-gray-100 font-semibold text-2xl mb-10"> 
                    Ops erro 404
                </h1>
                <a 
                    href="/"
                    className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
                >
                    Voltar para o inicio
                </a>
            </div>
        </div>
    )
}