import Footer from "components/Footer";
import PostList from "components/PostList";
import Profile from "components/Profile";

const ProfilePage = () => {
  return (
    <>
      <Profile />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
};

export default ProfilePage;
