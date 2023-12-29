import React, { useState } from 'react'
import axios from 'axios'
import {Container} from 'react-bootstrap'
import registerCss from './Registration.module.css'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Registration = () => {
  const [bookName, setBookName]= useState('')
  const [authorName, setAuthor]= useState('')
  const [description, setDescription]= useState('')
  const [publishYear, setPublishYear]= useState('')
  const [distributor, setDistributor]= useState('')
  const [image, setImage]= useState('')
   

  const registerBook =(e)=>{
    e.preventDefault()
    if(!bookName || !authorName || !description || !publishYear || !distributor || !image){
      toast("All fileds are required for registration...!")
    }else{
    const url = 'http://localhost:5000/products/register'
    const data ={
      bookName,
      authorName,
      description,
      publishYear,
      distributor,
      image
    }
    console.log(bookName)
    axios.post(url,data)
    .then((res)=>{
      var status = res.data.status
      if(status){
        toast(res.data.msg)
        setBookName('')
      setAuthor('')
      setDescription('')
      setPublishYear('')
      setDistributor('')
      setImage('')
      }else{
    toast(res.data.msg)
      }
    }).catch((err)=>{
      toast("Internal sevver error")
    })
  }
  }

  return (
    <>
    <Container>
   
    <div className={registerCss.main}>
     <h1 className={registerCss.heading}>Register your Book</h1>
     <input type="text" value={bookName} id='bookname' name='bookname' placeholder='Bookname' onChange={(e)=>setBookName(e.target.value)} />
     <input type="text" value={authorName} id='author' name='author' placeholder='Author' onChange={(e)=>setAuthor(e.target.value)}  />
     <textarea name="description" value={description} id="description" cols="30" rows="5" placeholder='Description'  onChange={(e)=>setDescription(e.target.value)}></textarea>
     <input type='date' id='publishyear' value={publishYear} name='publishyear' placeholder='publishyear'  onChange={(e)=>setPublishYear(e.target.value)} />
     <input type="text" id='distributor' value={distributor} name='distributor' placeholder='Distributor'  onChange={(e)=>setDistributor(e.target.value)} />
     <label htmlFor="image" className={registerCss.img}>Drop your Book Image:</label>
     <input type='file' id='image' value={image} name='image' placeholder='Drop your Image'onChange={(e)=>setImage(e.target.value)} />
     <button className={registerCss.btn} onClick={registerBook}>Register</button>
     </div>
     <ToastContainer position="top-center" theme="dark" hideProgressBar autoClose={1000} transition={Slide}/>
     </Container>
    </>
  )
}

export default Registration