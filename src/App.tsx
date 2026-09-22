import { Suspense, useState } from "react";
import TechnologiesStack from "./components/technologies/TechnologiesStack";
import type { technologyType } from "./type";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

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
                <TechnologiesStack technologyDataPromise={technologyDataPromise} ></TechnologiesStack>
            </Suspense>
        </>
    )
}

export default App;
