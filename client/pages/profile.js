import AppLayout from "../components/AppLayout";

import FollowList from "../components/FollowList"
import NicknameEditForm from "../components/NicknameEditForm"


const Profile = () =>{
    const followingList = [{nickname : "제로초"},{nickname : "ㅂㅈㄷ"},{nickname : "ㅁㄴㅇ"}]
    const followerList = [{nickname : "제로초"},{nickname : "ㅂㅈㄷ"},{nickname : "ㅁㄴㅇ"}]


    return (
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로우 목록" data={followerList} />
        </AppLayout>
    )
}

export default Profile;