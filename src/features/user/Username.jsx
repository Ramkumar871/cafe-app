import { useSelector } from "react-redux"
import store from "../../store"

function Username() {
    const username = useSelector((store) => store.user.username)

    if(!username) return null;

    return (
        <div className="hidden md:block">
            {username}
        </div>
    )
}

export default Username
