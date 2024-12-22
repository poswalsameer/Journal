'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Github, Linkedin, Twitter } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import JournalContext from '../context/JournalContext'
import { Journal } from '../types/types';
import SingleJournal from './SingleJournal'

function Sidebar() {

  const context = useContext(JournalContext);
  if( context === undefined ){
    throw new Error("Context not found");
  }
  const {allJournals, setAllJournals} = context;

  return (
    <div className="h-full sm:w-60 md:w-64 lg:w-80 flex flex-col bg-[#24282cc7] text-white border-r rounded-bl-lg">

      {/* HEADER OF THE SIDEBAR */}
      <div className="h-24 flex items-center justify-center px-2 ">
        <h2 className="mt-5 text-xl sm:text-2xl font-semibold">Journal</h2>
      </div>

      {/* BODY OF THE SIDEBAR */}
      <ScrollArea className="flex-grow py-3">
        <div className="p-4 flex flex-col gap-y-2 ">
          {allJournals.map((singleJournal, index) => 
          <SingleJournal 
            key={uuidv4()} 
            id={singleJournal.id} 
            title={ 
              singleJournal.title === '' 
                ? `Untitled Note (${index + 1})` 
                : (singleJournal.title.length > 15 ? `${singleJournal.title.substring(0, 15)}...` : singleJournal.title) 
            }
          />)}
        </div>
      </ScrollArea>

    </div>
  )
}

export default Sidebar
