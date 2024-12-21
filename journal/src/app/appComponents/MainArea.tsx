import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function MainArea() {
  return (
    <div className='h-full w-full bg-[#24282ca7] flex flex-col gap-y-3 justify-center items-center rounded-br-lg text-white'>

      <Input 
        placeholder='Title'
        className='h-52 mt-5 w-[95%] p-2 border-none focus-visible:outline-none'
        style={{ fontSize: '3rem' }} 
      />

      <Textarea 
        placeholder='Add your thoughts....'
        className='h-[90%] w-[95%] p-2 border-none focus-visible:outline-none'
        style={{ fontSize: '1rem' }} 
        >
        
      </Textarea>
    </div>
  )
}

export default MainArea
