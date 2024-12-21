import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function MainArea() {
  return (
    <div className='h-full w-full bg-[#24282ca7] flex flex-col gap-y-5 justify-center items-center rounded-br-lg text-white'>

      <Input 
        placeholder='Title'
        className='h-52 text3xl mt-5 w-[95%] p-2 border-none'
      />

      <Textarea className='h-[90%] w-[95%] p-2 border-none'>
        
      </Textarea>
    </div>
  )
}

export default MainArea
