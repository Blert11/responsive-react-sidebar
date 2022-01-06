import { useContext } from "react"
import { FaTimes } from "react-icons/fa"
import { AppContext } from "./Context"
import { links, social } from "./Data"

const Sidebar = () => {
    const {isSidebarOpen,closeSidebar} = useContext(AppContext)
    return (
      <aside
        className={`${
          isSidebarOpen ? "sidebar show-sidebar" : "sidebar"
        }`}
      >
        <div className="sidebar-header">
          <h2>Sidebar</h2>
          <button onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>
                  {link.icon} <span> </span>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="links-social">
          {social.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    );
}
export default Sidebar