"use client";

import React, { useContext } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Lock,
  Share,
  Plus,
  Layout,
  GalleryVertical,
  GalleryHorizontal,
  GalleryVerticalEnd,
  PanelLeft,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from 'uuid';
import JournalContext from "../context/JournalContext";
import { Journal, JournalContextType } from "../types/types";

interface BrowserToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string;
}

export default function Header({
  url = "Create your daily journals",
  className,
  ...props
}: BrowserToolbarProps) {

  const context = useContext(JournalContext);

  if( context === undefined ){
    throw new Error("Context not found");
  }

  const { allJournals, setAllJournals, currentJournal, setCurrentJournal } = context;

  const addJournal = () => {
    const newJournal: Journal = { id: uuidv4(), title: "", content: "" };
    setAllJournals([...allJournals, newJournal]);
    setCurrentJournal(newJournal)
    localStorage.setItem("allJournals", JSON.stringify([...allJournals, newJournal]));
  }

  return (
    <div
      className={cn(
        "z-10 w-full rounded-t-lg bg-[#30363b] text-zinc-400 mt-2 sm:z-10 sm:w-full sm:rounded-t-lg sm:bg-[#30363b] sm:text-zinc-400 sm:mt-2",
        className
      )}
      {...props}
    >
      <div className="
      flex items-center px-3 h-12
      sm:flex sm:items-center sm:px-3 sm:h-12">
        {/* Window Controls */}
        <div className="
        hidden items-center gap-1 mr-4
        sm:flex sm:items-center sm:gap-2 sm:mr-4">
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-600" />
          <div className="h-2 w-2  sm:h-3 sm:w-3 rounded-full bg-zinc-800" />
          <div className="h-2 w-2  sm:h-3 sm:w-3 rounded-full bg-green-600" />
        </div>

        {/* Navigation */}
        <div className="
        hidden items-center gap-1 mr-4
        sm:flex sm:items-center sm:gap-2 sm:mr-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className=" h-4 w-4 sm:h-8 sm:w-8 
            
            transition-all delay-75 ease-linear hover:text-white rounded-sm hover:bg-[#212528fe]">
            <ArrowLeft className="h-2 w-2 sm:h-4 sm:w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-4 w-4  sm:h-8 sm:w-8 
            
            transition-all delay-75 ease-linear hover:text-white rounded-sm hover:bg-[#212528fe]">
            <ArrowRight className="h-2 w-2 sm:h-4 sm:w-4" />
          </Button>
        </div>

        <div className=" 
        flex items-center gap-2
        sm:flex sm:items-center sm:gap-2 ">
          <Button variant="ghost" size="icon" className="h-4 w-4 sm:h-8 sm:w-8 transition-all delay-75 ease-linear hover:text-white rounded-sm hover:bg-[#212528fe]" id="">
            <PanelLeft className="h-2 w-2 sm:h-4 sm:w-4" />
          </Button>

          <Button 
            variant="ghost" size="icon" className="h-4 w-4 sm:h-8 sm:w-8 transition-all delay-75 ease-linear hover:text-white rounded-sm hover:bg-[#212528fe]"
            onClick={addJournal}
          >
              <Plus className="h-2 w-2 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* URL Bar */}
        <div className="
        flex-1 mx-2
        sm:flex-1 sm:mx-2">
          <div className="bg-[#3f484f] rounded-md 
          flex items-center px-2 h-8
          sm:flex sm:items-center sm:px-3 sm:h-8">
            <Lock className="
            h-4 w-4 mr-2 flex-shrink-0
            sm:h-4 sm:w-4 sm:mr-2 sm:flex-shrink-0" />
            <span className="truncate text-xs sm:text-base">{url}</span>
          </div>
        </div>

        {/* Actions */}
        <div className=" 
        h-full flex justify-center items-center gap-x-2 ml-0 mr-2
        sm:h-full sm:flex sm:justify-center sm:items-center sm:gap-x-2 sm:ml-2 sm:mr-2 ">

          <a 
            href="https://github.com/poswalsameer" 
            target="_blank"
            className=" transition-all delay-75 ease-linear hover:text-white rounded-sm hover:bg-[#212528fe] p-1 sm:p-2 ">
            <Github className=" w-4 h-4 sm:w-4 sm:h-4 hover:text-white rounded-sm hover:bg-[#212528fe]" />
          </a>
          <a
            href="https://www.linkedin.com/in/sameerposwal/" 
            target="_blank"
            className="transition-all delay-75 ease-linear hover:text-white rounded-sm hover:bg-[#212528fe] p-1 sm:p-2">
            <Linkedin className="w-4 h-4 sm:w-4 sm:h-4 hover:text-white rounded-sm hover:bg-[#212528fe]" />
          </a>
          <a
            href="https://twitter.com/sameerposwal03" 
            target="_blank"
            className="transition-all delay-75 ease-linear hover:text-white rounded-sm hover:bg-[#212528fe] p-1 sm:p-2">
            <Twitter className="w-4 h-4 sm:w-4 sm:h-4 hover:text-white rounded-sm hover:bg-[#212528fe]" />
          </a>

        </div>
      </div>
    </div>
  );
}
