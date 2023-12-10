import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategories = ({setCatergories}) => {

    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length >2){
            setCatergories(c=>[inputValue,...c]);
            setInputValue('');;
        }
    }
    return (

        <form onSubmit={handelSubmit}>
            {/* <h2>{inputValue}</h2> */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )

}

AddCategories.propTypes = {
   setCatergories: PropTypes.func.isRequired
    
}
