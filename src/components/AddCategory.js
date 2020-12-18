import React, {useState} from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value )
    }
    const submith = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 1){
            setCategories( cats => [inputValue,...cats])
        }

    }
    return (
        <form onSubmit={ submith }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
                />
        </form>
    )
}
AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}