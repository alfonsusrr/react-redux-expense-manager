/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom'
import { screen, fireEvent, getByTestId, render } from '@testing-library/react'
import renderWithProviders from './utils/render';
import ExpenseForm from '../../src/components/ExpenseForm'
import { emptyStore } from '../fixtures/testStore';
import expenses from '../fixtures/expenses';
import moment from 'moment'

describe('Expense form', () => {
    test('should render ExpenseForm correctly', () => {
        const { asFragment } = renderWithProviders(<ExpenseForm/>, { store: emptyStore })
        expect(asFragment()).toMatchSnapshot()
    })

    test('should correctly render add expense form', () => {
        renderWithProviders(<ExpenseForm action="Add"/>, { store: emptyStore })
        expect(screen.getByText("Add Expense")).toBeInTheDocument()
    })
    
    test('should correctly render edit expense form with expense data', () => {
        renderWithProviders(<ExpenseForm expense={expenses[0]} action="Edit"/>, { store: emptyStore})
        expect(screen.getByTestId("description")).toHaveValue(expenses[0].description)
        expect(screen.getByTestId("amount")).toHaveValue(expenses[0].amount.toString())
        expect(screen.getByTestId("note")).toHaveValue(expenses[0].note)
        expect(screen.getByDisplayValue(moment(expenses[0].createdAt).format("YYYY-MM-DD"))).toBeInTheDocument()
    })

    test('should render error for invalid form submission', () => {
        renderWithProviders(<ExpenseForm />, { store: emptyStore })
        fireEvent.change(screen.getByTestId("description", { target: {value: 'Test description'}}))
        fireEvent.click(screen.getByTestId("submit"))
        expect(screen.getByText('Please provide description and amount')).toBeInTheDocument()
        fireEvent.change(screen.getByTestId("description", { target: {value: ''}}))
        fireEvent.change(screen.getByTestId("amount", { target: {value: '2020'}}))
        fireEvent.click(screen.getByTestId("submit"))
        expect(screen.getByText('Please provide description and amount')).toBeInTheDocument()
    })

    test('should not set amount other than number', () => {
        const amount = '1as21'
        renderWithProviders(<ExpenseForm />, { store: emptyStore })
        fireEvent.change(screen.getByTestId("amount", { target: {value: amount}}))
        expect(screen.getByTestId("amount")).toHaveValue('')
    })

    test('should set amount if valid number', () => {
        renderWithProviders(<ExpenseForm />, { store: emptyStore })
        fireEvent.change(screen.getByTestId("amount", { target: { value: '2020' }}))
        expect(screen.getByTestId("amount")).toHaveValue('2020')
    })

    test('should set description', () => {
        renderWithProviders(<ExpenseForm />, { store: emptyStore })
        fireEvent.change(screen.getByTestId("description", { target: { value: 'test' }}))
        expect(screen.getByTestId("description")).toHaveValue('test')
    })
});