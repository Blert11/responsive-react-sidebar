import { useContext } from "react"
import { FaBars } from "react-icons/fa"
import { AppContext } from "./Context"

const Home = () =>{
    const {openSidebar, openModal} = useContext(AppContext)
    return (
        <main className="container-home">
            <button onClick={openSidebar} className="btn-open-sidebar">
                <FaBars/>
            </button>
            <button onClick={openModal} className="btn-open-modal">Show modal</button>
        </main>
    )
}
export default Home