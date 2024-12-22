'use client'

import React, { useState } from 'react'
import JournalContext from './JournalContext'
import { v4 as uuidv4 } from 'uuid';
import { Journal } from '../types/types';

const JournalContextProvider = ({children}: {children: any}) => {

    const [allJournals, setAllJournals] = useState<Journal[]>([]);
    const [currentJournal, setCurrentJournal] = useState<Journal>({
      id: '',
      title: '',
      content: '',
    });

  return (
    <JournalContext.Provider value={{allJournals, setAllJournals, currentJournal, setCurrentJournal}}>
        {children}
    </JournalContext.Provider>
  )
}

export default JournalContextProvider
