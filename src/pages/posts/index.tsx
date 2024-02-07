import Footer from "components/Footer";
import PostList from "components/PostList";

const PostPage = () => {
  return (
    <>
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
};

export default PostPage;
