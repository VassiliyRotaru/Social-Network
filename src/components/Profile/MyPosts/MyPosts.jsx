import React from 'react'  /* Если что удалить */
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
 
    return (
    <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>

        </div>
        <div className={s.posts}> 

        <Post message='Hi, how are you?' likeCounts='15'/>
      <Post message="It's my first post " likeCounts='20' />
    </div>
      </div>
       )

}

export default MyPosts