import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { filledStore, emptyStore } from "../../fixtures/testStore"

const renderWithProviders = (
    ui, 
    {
        store = emptyStore,
        ...renderOptions
    } = {}
) => {
    function Wrapper({ children }) {
        return <Provider store={store}><Router>{children}</Router></Provider>
    }
    return { store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}

export default renderWithProviders