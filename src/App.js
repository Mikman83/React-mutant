import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <Content/>
            </div>
        </BrowserRouter>
    )
}

export default App;
