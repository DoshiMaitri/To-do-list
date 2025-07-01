import React from 'react'
import { Link } from 'react-router-dom'
import HistoryData from './HistoryData'

function HistoryDataTodo() {
  return (
    <div className='bg-[#172842] min-h-screen py-8 w-full'>
        <div className='flex items-center justify-between max-w-2xl mx-auto'>
            <h1 className="text-3xl font-bold text-center mb-4 mt-4 text-white pt-3">Completed Tasks History</h1>
            <Link 
            to="/" 
            className='bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200'>
            Home</Link>
        </div>
        <div>
            <HistoryData/>
        </div>
    </div>
  )
}

export default HistoryDataTodo
