import React, { useState } from 'react'


const App = () => {
const [name, setName] = useState("")
const [compony, setCompony] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [contact, setcontact] = useState([])



const addHandeler=(e)=>{

  e.preventDefault();
 console.log(name)
 console.log(compony)
 console.log(phoneNumber)

 const newArr=[...contact,{name,compony,phoneNumber}]
setcontact(newArr);

 setName('')
 setCompony('')
 setPhoneNumber('')
}
  return (
    <div className='p-6'>
      <form onSubmit={addHandeler}>

      <h1 className='text-xl'>Add contact</h1> 
      <h1 className='mt-4'>name</h1>
      <input className='border-4 text-xl border-black mt-2' 
        value={name} onChange={(e)=>{
        setName(e.target.value)
      }}
      type="text" placeholder='Enter your name' />
      <h1 className='mt-4'>compony</h1>
      <input  className='border-4 text-xl border-black mt-2' 
         value={compony} onChange={(e)=>{
          setCompony(e.target.value)
      }}
      type="text" placeholder='Enter compony' />
      <h1 className='mt-4'>phone</h1>
      <input className='border-4 text-xl border-black mt-2' 
       value={phoneNumber} onChange={(e)=>{
        setPhoneNumber(e.target.value)
      }}
      type="text" placeholder='Enter phone number' />
    <br />
  <button className='mt-12 bg-blue-600 px-16 py-2 text-xl rounded-xl'>Add contact</button>
      </form>
    
      <div className='h-80 w-screen bg-gray-400 mt-10'>
      <h1 className='p-4  text-2xl font-bold'> Add contact</h1>
           {contact.map(function(elem,index){
             return(

                 <ul key={index} className='p-6 text-xl'>
              <h1>Name: {elem.name}</h1>
              <h2>Compony: {elem.compony}</h2>
              <h3>Phone: {elem.phoneNumber}</h3>
        
            </ul>)

            })}
    
      </div>
  </div>
  )
}

export default App