import React from 'react'
import { BUTTONLIST } from "../../utils/constants";
import Button from './Button';

const ButtonList = () => {
    return (
        <div className='flex ml-4'>
            {
                BUTTONLIST.map(buttonName => {
                    return <Button key={JSON.stringify(buttonName)} buttonName={buttonName} />
                })
            }
        </div>
    )
}

export default ButtonList