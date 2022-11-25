import { QuestionOutlined } from "@ant-design/icons";
const RemoveModal = ({ singlePostId }: any) => {
  const showAlert = () => {
    alert(
      "When i click the remove button then call the remove api and refech the post again !!"
    );
  };
  return (
    <div className="remove-modal-wrapper">
      <div className="remove-modal-inner-content">
        <QuestionOutlined />
        <h3>Are you sure you want to delete post number {singlePostId} ?</h3>
        <button className="submit-btn mt-20" onClick={showAlert}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default RemoveModal;
