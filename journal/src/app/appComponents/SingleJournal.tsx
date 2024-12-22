
'use client'

import { Trash2 } from 'lucide-react'
import React, { useContext, useState } from 'react'
import JournalContext from '../context/JournalContext';
import { Journal } from '../types/types';

function SingleJournal({id, title}: {id: string, title: string}) {

  const context = useContext(JournalContext);
  if( context === undefined ){
    throw new Error("Context not found");    
  }
  const {allJournals, setAllJournals, currentJournal, setCurrentJournal} = context

  const selectJournal = () => {
    const thisJournal = allJournals.find((journal) => journal.id === id);
    setCurrentJournal(thisJournal as Journal)
  }

  const deleteJournal = (id: string) => {
    const updatedJournals = allJournals.filter((journal) => journal.id !== id);
    setAllJournals(updatedJournals);
    localStorage.setItem("allJournals", JSON.stringify(updatedJournals));
  }

  return (
    <div 
      className={`
      p-2 w-full flex justify-between gap-x-2 items-center
      sm:p-3 sm:w-full sm:flex sm:justify-between sm:items-center bg-gray-600/30 rounded-sm sm:rounded-md hover:cursor-pointer ${ id === currentJournal.id ? "bg-[#383f45]" : "" } `}
      onClick={selectJournal}
      >
        <h1 className='text-[0.6rem] w-[70%] sm:text-sm sm:w-[80%]' >{title}</h1>
        <Trash2 
          className='h-3 w-3  sm:h-4 sm:w-4 transition-all delay-75 ease-linear text-gray-500/90 hover:text-white hover:cursor-pointer' 
          onClick={ () => deleteJournal(id) }
        />
    </div>
  )
}

export default SingleJournal
