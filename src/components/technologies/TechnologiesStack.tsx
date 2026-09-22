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
                
            }
        </div>
    );
};

export default TechnologiesStack;