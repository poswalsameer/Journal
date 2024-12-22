"use client";

import { Info } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect } from "react";
import Header from "./appComponents/Header";
import MainArea from "./appComponents/MainArea";
import Sidebar from "./appComponents/Sidebar";
import JournalContext from "./context/JournalContext";
import { Journal } from "./types/types";

export default function Home() {
  const context = useContext(JournalContext);
  if (context === undefined) {
    throw new Error("Context not found");
  }
  const { allJournals, setAllJournals, currentJournal, setCurrentJournal } = context;

  useEffect(() => {
    try {
      const journalsFromStorage: Journal[] = JSON.parse(
        localStorage.getItem("allJournals") || "[]"
      );
      setAllJournals(journalsFromStorage);

    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
      setAllJournals([]);
    }
  }, []);

  useEffect(() => {

    console.log("Current journal: ", currentJournal);

    const updatedJournals = allJournals.map((thisJournal) =>
        thisJournal.id === currentJournal.id
          ? { ...thisJournal, title: currentJournal.title, content: currentJournal.content }
          : thisJournal
    )

    if (JSON.stringify(updatedJournals) !== JSON.stringify(allJournals)) {
      setAllJournals(updatedJournals);
    }

    localStorage.setItem("allJournals", JSON.stringify(updatedJournals));
    
  }, [allJournals, currentJournal.title, currentJournal.content]);

  return (
    <>
      <Header />
      <div className=" h-[88vh] w-full flex justify-center items-center">

        <Sidebar />
      
        { allJournals.length === 0 ? (
            <div className="
            h-full w-full text-xl bg-[#24282ca7] flex flex-col gap-y-3 justify-center items-center rounded-br-lg text-white
            sm:h-full sm:w-full sm:text-3xl sm:bg-[#24282ca7] sm:flex sm:flex-col sm:gap-y-3 sm:justify-center sm:items-center sm:rounded-br-lg sm:text-white"> 
              <div className="
              flex justify-center items-center gap-x-2
              sm:flex sm:justify-center sm:items-center sm:gap-x-4">
                <Info className="
                h-5 w-5
                sm:h-8 sm:w-8" /> No journals right now  
              </div>
            </div> ) : ( 
            <MainArea /> 
          )
        }
        
      </div>
    </>
  );
}
