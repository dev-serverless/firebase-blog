import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">Lorem Inpusm</div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">lsj</div>
            <div className="post__date">2024.07.08 토요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">
              <Link to={"posts"}>삭제</Link>
            </div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf
            sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf
            sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf
            sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf sdfsdfsdf
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
