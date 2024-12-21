import { ScrollArea } from '@/components/ui/scroll-area'
import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

function Sidebar() {
  return (
    <div className="h-full w-80 flex flex-col bg-[#24282cc7] text-white border-r rounded-bl-lg">
      {/* HEADER OF THE SIDEBAR */}
      <div className="h-24 flex items-center justify-center ">
        <h2 className="text-2xl font-semibold">Journal</h2>
      </div>

      {/* BODY OF THE SIDEBAR */}
      <ScrollArea className="flex-grow py-3">
        <div className="p-4 ">
          {/* Add more content here to test scrolling */}
          {Array(20).fill(0).map((_, i) => (
            <p key={i} className="mt-4">Additional content to test scrolling.</p>
          ))}
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
