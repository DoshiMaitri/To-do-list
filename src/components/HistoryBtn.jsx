import React from 'react'
import { Link } from 'react-router-dom'

function HistoryBtn() {
  return (
    <div >
      <Link 
      to="/history" 
      className='bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition duration-200'>History</Link>
    </div>
  )
}

export default HistoryBtn
