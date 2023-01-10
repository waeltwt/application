import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector, useStore } from 'react-redux'
import { useDispatch } from 'react-redux';
import { initializeUseSelector } from 'react-redux/es/hooks/useSelector';
import { loadUser } from '../../slices/userSlice'
import { addNewPost, getPosts } from '../../slices/postSlice'
import axios from 'axios';
import './Profile.css'
import { SwitchVerticalIcon } from "@heroicons/react/outline"
import { FindAll } from '../../actions/image';







const Profile = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
     dispatch(getPosts());
  }, [])



    // const user = useSelector((state) => state.user);
  // useEffect(()=>{
  // if (!user.isAuth){
  // push('/login');

  // }else
  // dispatch(getPosts());
  // },[user.isAuth]);

  const post = useSelector((state) => state.post);
  const [postInfo, setpostInfo] = useState({})
  const [file, setFile] = useState({})
  const handleChange = (e) => {
    setpostInfo({ ...postInfo, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewPost({ postInfo, file }));
    console.log(localStorage.getItem('id'));
    let formatData = new FormData();
    formatData.append('file', file)
    formatData.append('title', postInfo.title)
    formatData.append('desc', postInfo.description)
    formatData.append('owner', localStorage.getItem('id'))

    axios.post("http://localhost:5000/api/post/addPost", formatData, {
    }).then(res => {
      console.log(res)
    })
  }


  const [show, setShow] = useState(false)
  const [images, setImage] = useState([])

  return (
    <div className='app container p-4'>
      <div className='form-index'>
        <div className='aa'>
          <button type="button" class="btn btn-outline-primary" onClick={() => setShow(!show)}>

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </button>

        </div>
        {
          show ? (
            <form>
              <div className='form-group'>
                <input type='text' name='title' onChange={handleChange} placeholder="picture title" className='form-control mt-4' /></div>
              <div>
                <input type='text' name='description' onChange={handleChange} placeholder="picture description" className='form-control mt-4' />
              </div>

              <input type='file' name='file' className='form-control mt-4' onChange={(e) => setFile(e.target.files[0])} />
              <button type='submit' onClick={handleSubmit} className='btn btn-outline-primary sm mt-4'>
                add post
              </button>

            </form>
          ) : (
            ""
          )
        }
      </div>
      <br />
      {/* <div>
        { post.Posts &&
        post.map((posts) => (
          <>
            <h2>{post.title}</h2>
            <img src={post.image} alt='file' />
            <p>{post.description}</p>
          </>
        ))
        } */}
      {/* </div> */}
    </div>
  )
}

export default Profile