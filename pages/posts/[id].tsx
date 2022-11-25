import { Col, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comments";
import { fetchPosts } from "../../actions/posts";
import Loader from "../../components/constants/Loader";
import Layouts from "../../layout/Index";
const SinglePost = ({ posts, postsInfo, comments, commentInfo }: any) => {
  console.log("get post data", postsInfo);
  console.log("get comment data", commentInfo);
  const router = useRouter();
  console.log("get query", router);
  const { id } = router.query;
  const [singlePostInfo, setSinglePostInfo] = useState<any>(undefined);
  const [getPost, setPosts] = useState<[]>([]);
  // dispatch post and comments
  useEffect(() => {
    posts();
    comments();
  }, [posts, comments]);
  useEffect(() => {
    const getPosts = postsInfo?.postsData?.map((post: any) => {
      return {
        ...post,
        comments: commentInfo?.commentData?.filter(
          (comment: any) => comment?.postId === Number(id)
        ),
      };
    });
    setPosts(getPosts);
    const singlePosts = getPosts?.find((post: any) => {
      if (post?.id === Number(id)) {
        return {
          ...post,
        };
      }
    });
    setSinglePostInfo(singlePosts);
  }, [commentInfo?.commentData, id, postsInfo?.postsData, setSinglePostInfo]);
  return (
    <Layouts title="SINGLE-POST">
      <div className="single-post-page section-padding section-bg">
        <div className="container">
          {singlePostInfo !== undefined ? (
            <Row gutter={16}>
              <Col span={18} lg={18} md={18}>
                <div className="single-post-wrapper">
                  <div className="single-post-inner-content">
                    <h3>{singlePostInfo?.title}</h3>
                    <p>{singlePostInfo?.body}</p>
                  </div>
                  <div className="single-post-comment-wrapper">
                    <h3>Comments:</h3>
                    {singlePostInfo?.comments?.length > 0 ? (
                      singlePostInfo?.comments?.map((comment: any) => (
                        <div className="single-comment" key={comment?.id}>
                          <h4>{comment?.name}</h4>
                          <h5>{comment?.email}</h5>
                          <p>{comment?.body}</p>
                        </div>
                      ))
                    ) : (
                      <p>comment not found</p>
                    )}
                  </div>
                </div>
              </Col>
              <Col span={6} lg={6} md={6}>
                <div className="sidebar-widget-wrapper">
                  <div className="single-sidebar-widget">
                    <h2>Recent Posts</h2>
                    {getPost?.splice(0, 3)?.map((post: any) => (
                      <div className="sidebar-single-post" key={post?.id}>
                        <Link href={`/posts/${post?.id}`}>
                          {" "}
                          <h4>{post?.title}</h4>
                        </Link>
                        <p>{post?.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </Layouts>
  );
};
const mapStateToProps = (state: { posts: any; comments: any }) => {
  return {
    postsInfo: state?.posts,
    commentInfo: state?.comments,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    posts: () => dispatch(fetchPosts()),
    comments: () => dispatch(fetchComments()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
