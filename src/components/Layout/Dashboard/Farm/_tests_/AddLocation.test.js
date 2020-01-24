import React from 'react';
import { render, cleanup } from '@testing-library/react';

import AddLocation from '../Locations/AddLocation'

afterEach(() => {
    cleanup();
    console.error.mockClear();
})

// Spy
console.error = jest.fn();

test('<AddLocation />', () => {
    render(<AddLocation />)
    expect(console.error).not.toHaveBeenCalled()
})



