"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext, useEffect, useRef } from "react";
import JournalContext from "../context/JournalContext";

function MainArea() {
  const context = useContext(JournalContext);
  if (context === undefined) {
    throw new Error("Context not found");
  }
  const { allJournals, setAllJournals, currentJournal, setCurrentJournal } =
    context;

  return (
    <div className="h-full w-full bg-[#24282ca7] flex flex-col gap-y-3 justify-center items-center rounded-br-lg text-white">
      {currentJournal.id === "" ? (
        <div>No journal selected</div>
      ) : (
        <>
          <Input
            placeholder="Title"
            className="h-52 mt-5 w-[95%] p-2 border-none focus-visible:outline-none"
            value={currentJournal.title}
            onChange={(e) =>
              setCurrentJournal({ ...currentJournal, title: e.target.value })
            }
            style={{ fontSize: "3rem" }}
          />

          <Textarea
            placeholder="Add your thoughts...."
            value={currentJournal.content}
            onChange={(e) =>
              setCurrentJournal({ ...currentJournal, content: e.target.value })
            }
            className="h-[90%] w-[95%] p-2 border-none focus-visible:outline-none"
            style={{ fontSize: "1rem" }}
          ></Textarea>
        </>
      )}
    </div>
  );
}

export default MainArea;
