import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar';

function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    console.log(isSidebarOpen)
    return (
        <div className="main flex h-screen text-white">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className="flex justify-center items-center flex-col w-full bg-[radial-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url('https://raw.githubusercontent.com/tahawy111/The_End_Of_The_Year_2021/main/files/images/3776.jpg')]">
                <h1 className="title text-5xl my-3">My Sidebar App</h1>
                <p className="info text-lg tracking-widest  m-6 text-[rgb(224, 224, 224)] max-w-xl my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button className="btn my-3" onClick={() => setIsSidebarOpen((prev) => !prev)} >Toggle Sidebar</button>
            </div>
        </div>
    )
}

export default App
