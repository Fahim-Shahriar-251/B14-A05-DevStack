import { use } from 'react';
import type { technologyType } from '../../type';

export interface technologyProps {
    technologyDataPromise: Promise<technologyType[]>;
}

const TechnologiesStack = ({ technologyDataPromise }: technologyProps) => {

    const technologies = use(technologyDataPromise);

    return (
        <div>
            {
                technologies.map(technology => {
                    return (
                        <img key={technology.id} src={technology.icon} alt="" />
                    );
                })
            }
        </div>
    );
};

export default TechnologiesStack;