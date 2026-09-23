import type { Dispatch, SetStateAction } from "react";
import type { technologyType } from "../../type";
import YourStackCard from "./YourStackCard";
import { toast } from "react-toastify";

export interface yourStackType {
    addedStack: technologyType[];
    setAddedStack: Dispatch<SetStateAction<technologyType[]>>;
}

const YourStack = ({ addedStack, setAddedStack }: yourStackType) => {

    const handleRemove = ({ technology }: { technology: technologyType }): void => {
        const restStack = addedStack.filter(filteredTechnology => {
            return filteredTechnology.id !== technology.id;
        });
        setAddedStack(restStack);
        toast.error(`${technology.name} successfully removed from your stack`);
    }

    const handleRemoveAll = () => {
        setAddedStack([]);
        toast.error("All technologies successfully removed from your stack");
    }

    return (
        <div>
            {
                addedStack.length === 0 ? (
                    <div className='border rounded-2xl text-gray-300 p-6 space-y-3'>
                        <h2 className='font-bold text-black text-2xl'>Your Stack</h2>
                        <p className='text-gray-400'>No Technologies Selected yet</p>
                        <div className='border rounded-2xl border-dotted text-gray-300 p-6 flex justify-center'>
                            <p>Your Stack is empty</p>
                        </div>
                    </div>
                ) :
                    <div className='flex flex-col border rounded-2xl text-gray-300 p-6 space-y-3'>
                        <h2 className='font-bold text-black text-2xl'>Your Stack</h2>
                        <p className='text-gray-400'> {addedStack.length} technologies selected</p>
                        <YourStackCard addedStack={addedStack} handleRemove={handleRemove} ></YourStackCard>
                        <button onClick={handleRemoveAll}
                            className="border border-red-500 rounded-2xl font-bold text-red-500 p-3 cursor-pointer">
                            Remove All
                        </button>
                    </div>
            }
        </div>
    );
};

export default YourStack;