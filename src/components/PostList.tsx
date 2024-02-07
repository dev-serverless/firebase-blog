import { Link } from "react-router-dom";

type PostListProps = {
  hasNavigation?: boolean;
};

const PostList = ({ hasNavigation = true }: PostListProps) => {
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의글</div>
        </div>
      )}
      <div>
        <div className="post__list">
          {[...Array(10)].map((e, i) => (
            <div key={i} className="post__box">
              <Link to={`/posts/${i}`}>
                <div className="post__profile-box">
                  <div className="post__profile" />
                  <div className="post__author-name">lsj</div>
                  <div className="post__date">2023.07.08 토요일</div>
                </div>
                <div className="post__title">게시글 {i}</div>
                <div className="post__text">
                  sdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfs
                  sdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfs
                  sdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfssdfsdfsdfsfdsdfs
                </div>
                <div className="post__utils-box">
                  <div className="post__delete">삭제</div>
                  <div className="post__edit">수정</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
