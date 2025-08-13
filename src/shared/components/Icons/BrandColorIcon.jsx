function BrandColorIcons({ Icon, className, onClick }) {
    return <div className={`text-brand-default hover:text-brand-light active:text-brand-active
                            dark:text-brand-dark-default dark:hover:text-brand-dark-light dark:active:text-brand-dark-active
                            transition-all duration-300 w-fit h-fit ${className}`}
        onClick={onClick ? onClick : () => { }}>
        <Icon className={className} />
    </div>
}

export default BrandColorIcons;