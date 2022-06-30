import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import PortfolioItem from '../components/PortfolioItem'

const AppRouterPortfolio = () => (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/">
                <Route path="portfolio">
                    <Route index element={<Portfolio/>}/>
                    <Route path=":id" element={<PortfolioItem/>}/>
                </Route>
                <Route path="contact" element={<Contact/>}></Route>
                <Route index element={<Home/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default AppRouterPortfolio