import { Col, Row } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions/photos";
import { photoTypes } from "../../interfaces/photos";
import Loader from "../constants/Loader";
import NotFound from "../constants/NotFound";

const PhotosContent = ({ photosInfo, photos }: any) => {
  // dispatch photos
  useEffect(() => {
    photos();
  }, [photos]);

  return (
    <div className="photo-area section-padding section-bg">
      <div className="container">
        <Row gutter={16}>
          <Col span={24} lg={24} md={24} sm={24}>
            <div className="section-title section-title-padding text-center mb-40">
              <h2>PHOTOS</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit enim
                justo, rhoncus u <br />
                eget, arcu. In enim justo, rhoncus ut, imperdiet, venenatis
                vitae j <br /> ligula, porttitor eu, consequat vit
              </span>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          {photosInfo?.loading ? (
            <Loader />
          ) : photosInfo?.photosData?.length > 0 ? (
            photosInfo?.photosData?.map((photo: photoTypes) => (
              <Col span={6} lg={6} md={12} sm={12} xs={24} key={photo?.id}>
                <div className="sinle-photo-gallery">
                  <div className="photo">
                    <img src={photo?.url} alt="galley" />
                    <div className="gallery-content">
                      <h5>{photo?.title}</h5>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          ) : (
            <NotFound firstContent="Photo Not Found" />
          )}
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = (state: { photos: Object }) => {
  return {
    photosInfo: state?.photos,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    photos: () => dispatch(fetchPhotos()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotosContent);
