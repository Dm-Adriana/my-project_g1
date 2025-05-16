import { Link } from "react-router-dom"
import "./HeaderComponent.css"
function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title"> 🦋 Welcome</h1>
        <nav>
          <div className="link-container">
          <ul className="link-list">
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="blog">Blog</Link>
            </li>
          </ul>
          </div>
        </nav>
    </header>
  )
}
export default HeaderComponent