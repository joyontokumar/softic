import { CommentOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Modal, Row } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions/comments";
import { fetchPosts } from "../../actions/posts";
import { commentTypes } from "../../interfaces/comments";
import { postTypes } from "../../interfaces/posts";
import Loader from "../constants/Loader";
import NotFound from "../constants/NotFound";
import RemoveModal from "../constants/RemoveModal";
const Posts = ({ posts, postsInfo, comments, commentInfo }: any) => {
  const [getPost, setPosts] = useState<any>([]);
  const [singlePostId, setSinglePostId] = useState<any>(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // dispatch post and comments
  useEffect(() => {
    posts();
    comments();
  }, [posts, comments]);

  //  get comment filter
  useEffect(() => {
    const posts = postsInfo?.postsData?.map((post: any) => {
      return {
        ...post,
        comments: commentInfo?.commentData?.filter(
          (comment: any) => post?.id === comment?.postId
        ),
      };
    });
    console.log("get actual post", posts);
    setPosts(posts);
  }, [commentInfo?.commentData, postsInfo?.postsData]);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="post-area section-padding section-bg">
      <div className="container">
        <Row gutter={16}>
          <Col span={24}>
            <div className="section-title section-title-padding text-center mb-40">
              <h2>POSTS</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit enim
                justo, rhoncus u <br />
                eget, arcu. In enim justo, rhoncus ut, imperdiet, venenatis
                vitae j <br /> ligula, porttitor eu, consequat vit
              </span>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          {postsInfo?.loading ? (
            <Loader />
          ) : getPost?.length > 0 ? (
            getPost?.slice(0, 25)?.map((post: postTypes) => (
              <Col span={24} lg={24} md={24} sm={24} key={post?.id}>
                <div className="single-post-content">
                  <div className="post-inner-content">
                    <div className="post-content-info">
                      <div className="post-content">
                        <Link href={`/posts/${post?.id}`}>
                          {" "}
                          <h3>{post?.title}</h3>
                        </Link>
                        <p>{post?.body}</p>
                      </div>
                      <div className="comment-count">
                        <h4>
                          {" "}
                          <CommentOutlined /> {post?.comments?.length}
                        </h4>
                      </div>
                      <div className="post-author-info">
                        <h4>Comments of this post author name:</h4>
                        <ul>
                          {post?.comments?.length > 0 ? (
                            post?.comments?.map((author: commentTypes) => (
                              <li key={author?.id}>{author?.name}</li>
                            ))
                          ) : (
                            <li>No author are comments this post</li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div
                      className="remove-post"
                      onClick={() => {
                        setSinglePostId(post?.id);
                        showModal();
                      }}
                    >
                      <DeleteOutlined />
                    </div>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <NotFound firstContent="Post Not Found" />
          )}
        </Row>
      </div>
      <Modal
        // title=" "
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={400}
        destroyOnClose={true}
        className="remove-modal"
      >
        <RemoveModal singlePostId={singlePostId} />
      </Modal>
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
