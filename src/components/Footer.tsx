import logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <footer className="my-10">
            <hr className="text-gray-300" />

            <div className="container mx-auto">
                <div className="flex justify-between pt-1 pl-2.5 pr-2.5 mb-10 gap-3">
                    <div className="space-y-3.5">
                        <img className="h-6.25 w-auto" src={logo} alt="Logo" />
                        <p className="text-gray-500">Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>
                        <ul className="flex gap-5 space-y-2">
                            <li><a href="">GitHub</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3.5">
                        <h2 className="font-bold">PRODUCT</h2>
                        <ul className="text-gray-500 space-y-2" >
                            <li><a href="">Home</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Projects</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3.5">
                        <h2 className="font-bold">COMPANY</h2>
                        <ul className="text-gray-500 space-y-2">
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3.5">
                        <h2 className="font-bold">LEGAL</h2>
                        <ul className="text-gray-500 space-y-2">
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="text-gray-300 container mx-auto" />

                <div className="flex justify-between  pl-2.5 pr-2.5 mt-10">
                    <h2 className="text-gray-500">© 2026 Dev Stack. All rights reserved.</h2>

                    <ul className="flex justify-between text-gray-500 gap-5">
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Terms</a></li>
                    </ul>
                </div>
            </div>


        </footer>
    );
};

export default Footer;