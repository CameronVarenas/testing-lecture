import React from 'react';
import axios from 'axios';
import ToDos from '../Components/Todos'
import { render, act } from '@testing-library/react';

it('renders the todos component', async () => {
    let component;

    jest.spyOn(axios, 'get').mockImplementation(() => {
        Promise.resolve({
            data: [{id: 1, title: 'test title'}]
        })
    })

    await act(async () => {
        const {container} = render(<ToDos />)
        component = container;
    })

    expect(component.textContent).toContain('test title')
})