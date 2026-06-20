import { Link } from "react-router-dom";
import Logo from '../../assests/logo.png'
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropDownLoggedIn, DropDownLoggedOut } from "../index";
import { useCart } from "../../context";

export const Header = () => {
const {cartList} = useCart()
const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)
const [search, setSearch] = useState(false)
const [dropDown, setDropDown] = useState(false)
const token = JSON.parse(sessionStorage.getItem("token"))

  useEffect(()=> {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if (darkMode){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[darkMode])

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 ">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 md:px-6 py-3">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="h-7"
              alt="E-Book Logo"
            />
            <span className="self-center text-xl text-heading dark:text-white font-semibold whitespace-nowrap">
              E-Book
            </span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
            <span onClick={()=> setSearch(!search)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
            <span className="relative text-2xl bi bi-cart-fill">
                 <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
            </span>
            </Link>
            <span onClick={()=> setDropDown(!dropDown)} className="cursor-pointer text-2xl text-gray-700 dark:text-white bi bi-person-circle"></span>
            {dropDown && (token ? <DropDownLoggedIn setDropDown={setDropDown} /> : <DropDownLoggedOut setDropDown={setDropDown} /> ) }
          </div>
        </div>
      </nav>
      {search && <Search setSearch={setSearch} /> }
      
    </header>
  );
};
