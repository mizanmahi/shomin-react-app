import React from 'react';
import './form-input.style.scss';

const FromInput = ({ handleChange, label, ...otherInputParams }) => {
    return (
        <div className='group'>
            <input 
                type={ otherInputParams.type } 
                onChange={ handleChange } 
                name={ otherInputParams.name }
                className='form-input'
                id={ otherInputParams.id }
                value={otherInputParams.value}
                required
            />

            {
                label ?
                (<label 
                    htmlFor={ otherInputParams.id }
                    className={`${otherInputParams.value.length ? 'shrink' : ''} form-input-label`} >{label}
                </label>) :
                null
            }
        </div>
    )
}

export default FromInput;