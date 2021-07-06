import AppLayout from "../components/AppLayout";
import { useSelector} from "react-redux"
import FollowList from "../components/FollowList"
import NicknameEditForm from "../components/NicknameEditForm"


const Profile = () =>{
    const {me} = useSelector(state => state.user)


    return (
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={me.Followings}/>
            <FollowList header="팔로우 목록" data={me.Followers} />
        </AppLayout>
    )
}

export default Profile;