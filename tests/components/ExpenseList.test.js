/**
 * @jest-environment jsdom
 */

import React from "react";
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import renderWithProviders from "./utils/render";
import ExpenseList from "../../src/components/ExpenseList";
import { filledStore, emptyStore } from "../fixtures/testStore";

test('Should render ExpenseList with expenses', () => {
    const { asFragment } = renderWithProviders(<ExpenseList/>, { store: filledStore})
    expect(asFragment()).toMatchSnapshot()
})

test('Should render ExpenseList with empty message', () => {
    const { asFragment } = renderWithProviders(<ExpenseList/>, { store: emptyStore})
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByText(/No expenses/i)).toBeInTheDocument()
})
