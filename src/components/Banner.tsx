import { useState } from "react";
import banner from "../assets/banner-stack.png"

const Banner = () => {

    const [active, setActive] = useState("exTech");

    return (
        <div className="container mx-auto flex justify-between items-center p-2 mt-10 mb-10">
            <div className="space-y-5">
                <h2 className="font-bold text-4xl">
                    Build Your Ideal
                    <span className="block bg-linear-to-r from-[#FF5722] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h2>
                <p className="text-left text-gray-600">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex gap-4">
                    <button onClick={() => setActive("exTech")}
                        className={`btn rounded-2xl ${active === "exTech" ? "bg-linear-to-r from-[#F97316] to-[#EC4899]" : ""} `}>
                        Explore Technologies
                    </button>
                    <button onClick={() => setActive("learnMore")}
                        className={`btn rounded-2xl ${active === "learnMore" ? "bg-linear-to-r from-[#F97316] to-[#EC4899]" : ""} `}>
                        Learn More
                    </button>
                </div>
            </div>

            <div>
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;