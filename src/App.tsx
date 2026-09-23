import { Suspense, useState } from "react";
import type { technologyType } from "./type";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Technologies from "./components/technologies/Technologies";

const fectchTechnologyData = async (): Promise<technologyType[]> => {
    const res = await fetch("./data.json");
    const data = await res.json();;
    return data;
}

function App() {

    const [technologyDataPromise] = useState(() => fectchTechnologyData());
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Suspense fallback={<div>Loading Data...</div>}>
                <Technologies technologyDataPromise={technologyDataPromise}></Technologies>
            </Suspense>
            <Footer></Footer>
        </>
    )
}

export default App;
