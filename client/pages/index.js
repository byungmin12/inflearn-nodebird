import AppLayout from "../components/AppLayout";
import {useSelector} from "react-redux"
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";



const home = () =>{
    const { isLoggedIn } = useSelector(state => state.user)
    const {mainPosts} = useSelector(state => state.post)
    console.log(mainPosts)
    return (
        <AppLayout>
            { isLoggedIn && <PostForm /> }
            { mainPosts.map(post => <PostCard  key={post.id} post ={post}/>)}
        </AppLayout>
    )
}

export default home;