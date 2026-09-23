import { use, useState } from 'react';
import type { technologyType } from '../../type';
import TechnologiesCard from './TechnologiesCard';
import YourStack from './YourStack';
import { toast } from 'react-toastify';

export interface technologyProps {
    technologyDataPromise: Promise<technologyType[]>;
}

const Technologies = ({ technologyDataPromise }: technologyProps) => {

    const technologies = use(technologyDataPromise);

    const [addedStack, setAddedStack] = useState<technologyType[]>([]);
    const handleAddedStack = (technology: technologyType): void => {
        setAddedStack([...addedStack, technology]);
        toast.success(`${technology.name} successfully added to your stack`);
    }

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-3xl'>
                Explore the{" "}
                <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>
                    Technologies
                </span>
            </h2>
            <p className="text-gray-600">Pick one technology per category to build your ideal stack.</p>

            <div className='grid grid-cols-1 md:grid-cols-4 mt-15 gap-6'>
                <div className='md:col-span-3'>
                    <TechnologiesCard technologies={technologies} addedStack={addedStack} handleAddedStack={handleAddedStack}></TechnologiesCard>
                </div>

                <div className='md:col-span-1'>
                    <div>
                        <YourStack addedStack={addedStack} setAddedStack={setAddedStack}></YourStack>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Technologies;