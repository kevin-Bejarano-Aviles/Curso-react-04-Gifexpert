/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto ', () => {
        //? Se crea el sujeto de prueba
        render( <AddCategory onNewCategory={()=>{}} /> );

        //? Extraemos el input del html
        const input = screen.getByRole('textbox');


        //? Disparamos el evento
        fireEvent.input( input, {target: { value:'Saitama' }} );


        //? Hacemos la asercion de lo que esperamos que suceda
        expect( input.value ).toBe('Saitama')
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        //TODO: ???
        const onNewCategory = jest.fn();
        //jest.fn = jest funcion == mock
        //mock = simulacion osea no es la implementacion real de la funcion, es una simulacion de la funcion 
        //pero al ser un jest mock tu tienes el control de la funcion 

        

        render( <AddCategory onNewCategory={onNewCategory} /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input,{target:{value:inputValue}} );
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={onNewCategory} /> );

        const form = screen.getByRole('form');

        fireEvent.submit(form);
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
 



    });
    
    
})
