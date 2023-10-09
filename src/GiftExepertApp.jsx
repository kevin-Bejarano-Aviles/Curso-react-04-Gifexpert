import { useState } from "react";
import { AddCategory,GiftGrid } from "./components";

export const GiftExepertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory)=>{

        if( categories.includes(newCategory) ) return;
        // console.log(event);

        setCategories([newCategory,...categories]);
        // setCategories([...categories,'valorant'])
    }

    return (
        <>
            <h1>GiftExepertApp</h1>
            <AddCategory //crear un input y emitir el valor cuando la persona hace enter
                // setCategories = {setCategories} 
                onNewCategory = { (valor) => onAddCategory(valor) }
            />
            
                
            {
                categories.map( category => (
                    <GiftGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }
            
        </>
    )
}
