import { Trash, Trash2 } from 'lucide-react'
import React from 'react'

function SingleJournal() {
  return (
    <div className='p-3 w-full flex justify-between items-center bg-gray-600 rounded-md'>
        <h1>Single journal</h1>
        <Trash2 className='h-4 w-4 text-gray-500/90 hover:text-white hover:cursor-pointer' />
    </div>
  )
}

export default SingleJournal
