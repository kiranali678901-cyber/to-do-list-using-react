import React from 'react'

function Errormsg({list}) {
  return (
   <>
      {list.length===0 && <h1 className='justify-center items-center ml-70 mt-25 text-2xl font-bold decoration-red-600'>There is no task! Enjoy your day</h1>}
   </>
  )
}

export default Errormsg
