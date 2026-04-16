import { NavLink } from "react-router";
import { useAuthStore } from "../store/authStore";
import { useFavoritesStore } from "../store/favoritesStore";

export function Header() {
  const {isLoggedIn}=useAuthStore()
  const {favoritesCount}=useFavoritesStore()
  const numberOfFavorites=favoritesCount()
  return (
    <>
      <header className="header">
        <h1 className="header__h1">
          <svg
            className="header__svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          DevJobs
        </h1>
        <nav className="header__nav">
          <NavLink to="/" className={({isActive}) => `header__a ${isActive ? 'nav-link-active' : ''}`}>
            Home
          </NavLink>{" "}
          &nbsp;| &nbsp;
          <NavLink to="/search" className={({isActive}) => `header__a ${isActive ? 'nav-link-active' : ''}`}>
            Empleos
          </NavLink>
          {
            isLoggedIn && (
              <NavLink
                className={({isActive}) => `header__a ${isActive ? 'nav-link-active' : ''}`}
                to="/profile"
              >
                  Profiles ❤️{numberOfFavorites}
              </NavLink>
            )
          }
        </nav>
        <HeaderUserButton />
      </header>
    </>
  );
}
const HeaderUserButton=()=>{
  const {isLoggedIn,login,logout}=useAuthStore()
  const {clearFavorites}=useFavoritesStore()
  const handleLogout=()=>{
    logout()
    clearFavorites()
  }
  return isLoggedIn
          
     ?  <button className="boton-azul" onClick={handleLogout}>Cerrar Sesión</button>
     :   <button className="boton-azul" onClick={login}>Iniciar Sesión</button>
}