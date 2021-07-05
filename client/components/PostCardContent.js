import React from 'react'
import Link from 'next/link';


const PostCardContent= ({postData}) =>(
    <div>
             
            {postData.split(/(#[^\s#]+)/g).map((el, i)=>{
                if(el.match(/(#[^\s#]+)/)){
                    return <Link href={`/hashtag/${el.slice(1)}`} key={i}><a>{el}</a></Link>
                }
                return el
            })}
     </div>
  )  


export default PostCardContent
