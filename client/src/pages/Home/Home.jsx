import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import ItemPanel from '../../components/ItemPanel/ItemPanel'
import Header from '../../components/Header/Header'
const Home = () => {
    return (
        <>
        <Header/>
            <div className='homepage'>
                <Sidebar />
                <ItemPanel />
            </div>
        </>
    )
}

export default Home