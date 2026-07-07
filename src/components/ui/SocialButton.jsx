
const SocialButton = ({icon: Icon}) => {
    return (
        <button
            className="outline-none grid place-content-center w-9 h-9 text-text-muted rounded-full backdrop-blur-xs cursor-pointer shadow-glass hover:scale-110 hover:text-text transition-transform duration-300"
        >
            <Icon/>
        </button>
    )
}

export default SocialButton;