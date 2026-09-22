import { Suspense, useState } from "react";
import TechnologiesStack from "./components/technologies/TechnologiesStack";
import type { technologyType } from "./type";
import Navbar from "./components/Navbar";

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
            <Suspense fallback={<div>Loading Data...</div>}>
                <TechnologiesStack technologyDataPromise={technologyDataPromise} ></TechnologiesStack>
            </Suspense>
        </>
    )
}

export default App;
