import logo from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-40 bg-white'>
            <div className='container mx-auto flex justify-between items-center p-2'>
                <div>
                    <img src={logo} alt="Logo" />
                </div>

                <div>
                    <ul className='flex justify-between gap-5 font-bold'>
                        <li><a href=""><span className='text-[#DB2777]'>Home</span></a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <button className="btn btn-secondary rounded-3xl ">Sign In</button>
                    <button className="btn btn-secondary rounded-3xl ">Sign Up</button>
                </div>
            </div>
            <hr className="text-gray-300" />
        </nav>
    );
};

export default Navbar;