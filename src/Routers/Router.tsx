import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import React from 'react';
import Home from '../Components/Home/Home';
import { Login } from '../Components/Auth/Login';
import { Register } from '../Components/Auth/Register';
import { Profile } from '../Components/Profile/Profile';

export const AppRoutes: React.FC= () => {
    return (
    <BrowserRouter>
        <Routes> 
            <Route path='/' element = {<Home />} />
            <Route path='/login' element= {<Login />} />
            <Route path='/register' element= {<Register />} />
            <Route path='/profile' element= {<Profile />} />
            <Route path='/create' element= '{}' />
        </Routes>
    </BrowserRouter>
    )
}