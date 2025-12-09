import { Link } from "react-router-dom"

function Button({children, disabled, to, onClick, type="primary"}) {
    const base = "bg-darkbrown-1 hover:bg-darkbrown-2 focus:ring-darkbrown-2 focus:bg-darkbrown-2 inline-block cursor-pointer rounded-full text-base font-semibold tracking-wide uppercase transition-colors duration-300 focus:ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed text-sm"

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4 ',
        menuButton: base + ' px-4 py-3 md:px-6 md:py-4 w-35 sm:w-45 mt-2 mb-3 md:my-0 md:absolute left-7/10 top-3/4 shadow-md/30',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
        secondary: 'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
    }
    
    if(to) return <Link to={to} className={styles[type]}>{children}</Link>

    if(onClick) return <button disabled={disabled} onClick={onClick} className={styles[type]}>{children}</button>

    return (
        <button disabled={disabled} className={styles[type]}>{children}</button>
    )

    
}

export default Button
