import { FaStar } from 'react-icons/fa';
import type { technologyType } from '../../type';

export interface technologiesProps {
    technologies: technologyType[]
}

const TechnologiesCard = ({ technologies }: technologiesProps) => {

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {
                technologies.map(technology => {
                    return (
                        <div className='conainter mx-auto border border-gray-300 rounded-2xl p-4 space-y-5'>
                            <div className='flex justify-between items-center'>
                                <img className='h-9 w-auto' src={technology.icon} alt="" />
                                <p className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] p-1.5 rounded-xl text-white'> {technology.badge} </p>
                            </div>
                            <div className='space-y-4 text-gray-500'>
                                <h2 className='font-bold text-black'> {technology.name} </h2>
                                <p className="leading-8"> {technology.description} </p>
                                <hr className="text-gray-300" />
                                <div className='flex flex-row justify-between items-center'>
                                    <p> {technology.category} </p>
                                    <p> {technology.difficulty} </p>
                                    <p className='flex justify-between items-center gap-1'>
                                        <FaStar className='text-yellow-500' />
                                        {technology.rating}
                                    </p>
                                </div>
                                <button className="btn btn-neutral w-full rounded-2xl ">Add to Stack</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TechnologiesCard;