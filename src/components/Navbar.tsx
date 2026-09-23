import { useState } from "react";
import logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {

    const [active, setActive] = useState("signUp");
    const [menu, setMenu] = useState(false);

    return (
        <nav className='sticky top-0 z-40 bg-white'>
            <div className='container mx-auto flex justify-between items-center p-2'>

                <button onClick={() => setMenu(!menu)} className="lg:hidden text-2xl">
                    <RxHamburgerMenu />
                </button>

                <div>
                    <img src={logo} alt="Logo" />
                </div>

                <div className="hidden lg:block">
                    <ul className='flex justify-between gap-5 font-bold'>
                        <li><a href=""><span className='text-[#DB2777]'>Home</span></a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <button onClick={() => setActive("signIn")} className={`btn border-0 ${active === "signIn" ? "btn-secondary" : ""} rounded-3xl`}>Sign In</button>
                    <button onClick={() => setActive("signUp")} className={`btn border-0 ${active === "signUp" ? "btn-secondary" : ""} rounded-3xl`}>Sign Up</button>
                </div>
            </div>

            {/* For small screen */}
            {menu && (
                <div className=" container mx-auto lg:hidden">
                    <ul className="flex flex-col gap-5 py-5 font-bold">
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

            )}

            <hr className="text-gray-300" />
        </nav>
    );
};

export default Navbar;