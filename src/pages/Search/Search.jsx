import React from 'react'
import './Search.scss'

const Search = ({search , setSearch}) => {
  return (
    <div className='search'>
    <div className='search1'>
    <div className='btnSearch'>
    <button 
    className='closeSearch'
    onClick={()=>
    { search && setSearch(false)
     }}
    class="closeBtn">X</button>
    </div >
    <div className='textSearch'>
    <p className='searchQ'>عن ماذا تبحث ؟</p>
    <div  className='divSearch' >
       <input class="input" type="search" name="search" className='inputSearch' placeholder="اكتب كلمة البحث ....."
       ></input>
         </div>
         </div>
    </div>
    </div>
  )
}

export default Search
