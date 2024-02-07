import PostList from "components/PostList";
import Profile from "components/Profile";

const ProfilePage = () => {
  return (
    <>
      <Profile />
      <PostList hasNavigation={false} />
    </>
  );
};

export default ProfilePage;
