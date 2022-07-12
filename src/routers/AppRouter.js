import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import * as Pages from '../components/pages/'

const AppRouter = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/">
                <Route index element={<Pages.ExpenseDashboardPage/>} />
                <Route path="create" element={<Pages.AddExpensePage/>}/>
                <Route path="edit">
                    <Route index element={<Pages.EditExpensePage/>}/>
                    <Route path=":id" element={<Pages.EditExpensePage/>}/>
                </Route>
                <Route path="help" element={<Pages.HelpPage/>}/>
                <Route path="*" element={<Pages.NotFoundPage/>}/>
            </Route>
        </Routes> 
    </BrowserRouter>
)

export default AppRouter