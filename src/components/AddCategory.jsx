import { useState } from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
        // console.log(event.target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault()
        const newInputValue = inputValue.trim();

        
        if( newInputValue.length <= 1 ) return;
        onNewCategory( newInputValue )
        // setCategories(categorias => [inputValue,...categorias])
        setInputValue('')
    }
    return (
        <form onSubmit={(event)=> onSubmit(event)} aria-label='form'>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event)=>onInputChange(event)}
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}