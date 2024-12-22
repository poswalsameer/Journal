'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Github, Linkedin, Twitter } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import JournalContext from '../context/JournalContext'
import SingleJournal from './SingleJournal'

function Sidebar() {

  const context = useContext(JournalContext);
  if( context === undefined ){
    throw new Error("Context not found");
  }
  const {allJournals, setAllJournals} = context;
  
  useEffect( () => {
    const journalsFromStorage = JSON.parse(localStorage.getItem("allJournals") || "[]");
    setAllJournals(journalsFromStorage);
  }, [] )

  return (
    <div className="h-full w-80 flex flex-col bg-[#24282cc7] text-white border-r rounded-bl-lg">
      {/* HEADER OF THE SIDEBAR */}
      <div className="h-24 flex items-center justify-center ">
        <h2 className="mt-5 text-2xl font-semibold">Journal</h2>
      </div>

      {/* BODY OF THE SIDEBAR */}
      <ScrollArea className="flex-grow py-3">
        <div className="p-4 flex flex-col gap-y-2 ">
          {allJournals.map((singleJournal) => 
          <SingleJournal 
            key={uuidv4()} 
            id={singleJournal.id} 
          />)}
        </div>
      </ScrollArea>

      {/* FOOTER OF THE SIDEBAR */}
      {/* <div className="h-16 flex justify-center items-center space-x-4 bg-blue-300">
        <Github className="w-6 h-6" />
        <Linkedin className="w-6 h-6" />
        <Twitter className="w-6 h-6" />
      </div> */}
    </div>
  )
}

export default Sidebar
