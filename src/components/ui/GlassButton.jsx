
const GlassButton = ({ label = "", icon: Icon, iconSet = false, size = 20, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`${label ? "px-5" : "px-3"} outline-none flex justify-center items-center gap-3.75 w-auto h-auto py-3 shadow-glass backdrop-blur-xs rounded-full font-normal transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-bg/40`}
        >
            {label}
            {iconSet && <Icon size={size} />}
        </button>
    )
}

export default GlassButton;