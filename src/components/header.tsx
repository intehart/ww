import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-black text-lg" : "text-gray-400 text-lg";

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-screen-xl mx-auto py-5">
        <ul className="list-none flex gap-3">
          <li>
            <NavLink to="/" className={activeLink}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" className={activeLink}>
              Обо мне
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={activeLink}>
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
