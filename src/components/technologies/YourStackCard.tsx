import type { technologyType } from "../../type";
import { RxCross1 } from "react-icons/rx";

export interface yourStackType {
    addedStack: technologyType[];
    handleRemove: ({ technology }: { technology: technologyType }) => void;
}

const YourStackCard = ({ addedStack, handleRemove }: yourStackType) => {

    return (
        <div className="flex flex-col gap-5">
            {
                addedStack.map(technology => {
                    return (
                        <div key={technology.id}
                            className="flex gap-6 justify-around items-center border p-4 rounded-2xl">
                            <div className="flex gap-5 items-center">
                                <img className="h-9" src={technology.icon} alt="Icon" />
                                <div>
                                    <h2 className="text-black font-bold"> {technology.name} </h2>
                                    <p className="text-gray-500"> {technology.category} </p>
                                </div>
                            </div>
                            <span onClick={() => handleRemove({ technology })} className="text-3xl text-red-500 cursor-pointer">
                                <RxCross1 />
                            </span>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default YourStackCard;