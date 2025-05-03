type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean
    variant?: "base" | "icon"
}

const variants = {
    button:{
        base: "h-12",
        icon: "h-12 w-12"
    }
}

export function Button({ children, isLoading, type = "button", variant = "base", ...rest}: Props){
    return(
        <button 
            type={type} 
            disabled={isLoading} 
            className="flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 tramsition ease-linear disabled:opacity-50 disabled:cursor-progress"
            {...rest}
        >
            {children}
        </button>
    )
}