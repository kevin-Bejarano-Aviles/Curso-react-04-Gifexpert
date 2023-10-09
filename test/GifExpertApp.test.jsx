/* eslint-disable no-undef */
import { fireEvent, getAllByRole, render, renderHook, screen } from "@testing-library/react"
import { GiftExepertApp } from "../src/GiftExepertApp"
import { useState } from "react";


describe('Pruebas en <GifExpertApp/>', () => {
    test('si se actualiza el state de el array de imagenes ', () => {
        render(<GiftExepertApp/>);
        // const { result } = renderHook(()=>useState(['One Punch']));
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input,{target:{value:'Goku'}});
        fireEvent.submit(form)
        
        // const { categories } =  result.current;
        expect(input.value).toBe('')
        const h2 = screen.getAllByRole("heading",{level:2});
        expect(h2.length).toBe(2);
        screen.debug();
        // expect(categories).toEqual(['One Punch','Goku'])
    })
    
})
