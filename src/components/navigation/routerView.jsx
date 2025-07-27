"use client"

import {Routes, Route} from 'react-router-dom'
import Home from '@/app/page'
import TodoHome from '@/app/todo-list/page'
import EventExemple from '@/app/(group1)/bubling/page'

export default function RouterView() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo-list' element={<TodoHome/>} />
            <Route path='/kata' />
            <Route path='/hello' />
            <Route path='/form' />
            <Route path='/bubling' element={<EventExemple/>} />
        </Routes>
    )
} 