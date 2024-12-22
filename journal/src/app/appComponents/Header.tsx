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
    // console.log("Size before adding: ", allJournals.length);
    console.log("Journals: ", allJournals);
    const newJournal: Journal = { id: uuidv4(), title: "", content: "" };
    setAllJournals([...allJournals, newJournal]);
    setCurrentJournal(newJournal)
    localStorage.setItem("allJournals", JSON.stringify([...allJournals, newJournal]));
  }

  return (
    <div
      className={cn(
        "z-10 w-full rounded-t-lg bg-[#30363b] text-zinc-400 mt-2",
        className
      )}
      {...props}
    >
      <div className="flex items-center px-3 h-12">
        {/* Window Controls */}
        <div className="flex items-center gap-2 mr-4">
          <div className="h-3 w-3 rounded-full bg-red-600" />
          <div className="h-3 w-3 rounded-full bg-zinc-800" />
          <div className="h-3 w-3 rounded-full bg-green-600" />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2 mr-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Theme Toggle */}
        {/* <Button variant="ghost" size="icon" className="h-8 w-8 mr-2">
          <span className="sr-only">Toggle theme</span>
          <span className="rounded-full h-4 w-4 bg-zinc-600" />
        </Button> */}
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <PanelLeft className="h-4 w-4" />
        </Button>

        <Button 
          variant="ghost" size="icon" className="h-8 w-8"
          onClick={addJournal}
        >
            <Plus className="h-4 w-4" />
        </Button>

        {/* URL Bar */}
        <div className="flex-1 mx-2">
          <div className="bg-[#3f484f] rounded-md flex items-center px-3 h-8">
            <Lock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{url}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-y-2 gap-x-4 ml-2 mr-2">
          <Github className="w-4 h-4" />
          <Linkedin className="w-4 h-4" />
          <Twitter className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
