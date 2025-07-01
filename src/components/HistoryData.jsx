import React from 'react'
import { useState } from 'react';

function HistoryData() {
  const completedTasks = JSON.parse(localStorage.getItem("completedHistory")) || {}
  const dates = Object.keys(completedTasks)  
  const [openDate,setOpenDate] = useState("") 
  const toggleDown = (date) =>{
    setOpenDate(prev => prev===date? null : date)
  }

  return (
    <div className=" py-8 px-4">
      <div className="max-w-2xl mx-auto">
        
        {dates.map(date => (
        <div className="mb-4">
          <button onClick={()=>toggleDown(date)} className='w-full flex justify-between items-center bg-[#ccbed7] hover:bg-[#b3a9c2] text-black font-medium rounded-md px-4 py-3 transition'>
            <span>{date}</span>
            <span>{openDate===date ? "▼":completedTasks[date].length + " tasks completed  ▲"}</span>
          </button>
          { openDate===date && 
          (<ul className="bg-white text-black mt-3 rounded-md px-4 py-2"> 
            {completedTasks[date].map((task) => (
              <li key={task.id} className="py-1 border-b border-gray-200 last:border-b-0"> ✅ {task.todo}</li>
            ))}
            </ul>
          )}

        </div>
        ))}

      </div>
    </div>
  );
}

export default HistoryData
