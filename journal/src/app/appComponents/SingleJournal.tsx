import { Trash, Trash2 } from 'lucide-react'
import React, { useContext } from 'react'
import JournalContext from '../context/JournalContext';
import { Journal } from '../types/types';

function SingleJournal({id}: {id: string}) {

  const context = useContext(JournalContext);
  if( context === undefined ){
    throw new Error("Context not found");    
  }
  const {allJournals, setAllJournals, currentJournal, setCurrentJournal} = context

  const selectJournal = () => {

    const thisJournal = allJournals.find((journal) => journal.id === id);
    console.log("Selected journal is: ", thisJournal);
    setCurrentJournal(thisJournal as Journal)
  }

  return (
    <div 
      className='p-3 w-full flex justify-between items-center bg-gray-600 rounded-md'
      onClick={selectJournal}
      >
        <h1>Untitled journal + {id}</h1>
        <Trash2 className='h-4 w-4 text-gray-500/90 hover:text-white hover:cursor-pointer' />
    </div>
  )
}

export default SingleJournal
