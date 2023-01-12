import React, { useState } from 'react'
import '../App.css';
function Input() {
    const [text,setText]=useState('')
    const [listdata, setlistdata] = useState([]);
    function onChangeHandler(e){
//   console.log(e.target.value)
    setText(e.target.value)
   
    }
    function getItemHandler(){
        setlistdata((listdata)=>{
            const updatedData=[...listdata,text ]
            console.log(updatedData)
            setText('')
     return updatedData
    })
    }
    function removeActivity(index){
        const updatedListdata=listdata.filter((element,id)=>{
            return index!=id
        })
        setlistdata(updatedListdata)
    }
    function removeAllHandler(){
        setlistdata('')
    }
    function addHandler(index){

    }
  return (
    <div className='container'>
        <h1>To do List App</h1>
      <input className='inputText' type='text' placeholder='Add Activity' value={text} onChange={onChangeHandler}/>
      <button className='getBtn' onClick={getItemHandler}>Get Item</button><br/>
      <div className='childDiv'>
     {
        listdata!=[] && listdata.map((data,index)=>{
            return(
             <>
             <ul key={index}>
              <li>{data}</li>
              <button className='removeBtn' onClick={()=>removeActivity(index)}>Remove</button>
              <button className='updateBtn' onClick={()=>addHandler(index)}>Update </button>
             </ul>
             </>
            )
        })
     }
     { listdata.length>=1 && <button className='removeAll' onClick={removeAllHandler}>Remove All</button>}
      </div>
    </div>
  )
}

export default Input
