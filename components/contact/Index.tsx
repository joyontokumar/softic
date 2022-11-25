import { Col, Form, Input, Row } from "antd";
import Image from "next/image";
const ContactMe = () => {
  // send message
  const onFinish = (value: any) => {
    alert(JSON.stringify(value, null, 4));
  };
  return (
    <div className="contact-area section-padding section-bg">
      <div className="container">
        <Row gutter={15}>
          <Col span={16} lg={24} md={24} sm={24}>
            <div className="section-title section-title-padding text-center mb-40">
              <h2>Contact Me</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit enim
                justo, rhoncus u <br />
                eget, arcu. In enim justo, rhoncus ut, imperdiet, venenatis
                vitae j <br /> ligula, porttitor eu, consequat vit
              </span>
            </div>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col span={15} lg={12} md={12} sm={12}>
            <div className="contact-form">
              <div className="contact-form-heading-wrapper">
                <span>PLEASE FULL FILL THE FORM</span>
                <h4>Dont hesitate to say hi</h4>
              </div>
              <div className="contact-form-content">
                <Form
                  className="ant-form ant-form-vertical"
                  onFinish={onFinish}
                >
                  <Form.Item label="Name" name="name">
                    <Input
                      placeholder="Enter Name"
                      className="ant-input ant-input-lg"
                    />
                  </Form.Item>
                  <Form.Item label="Email" name="email">
                    <Input
                      placeholder="Enter Email"
                      className="ant-input ant-input-lg"
                    />
                  </Form.Item>

                  <Form.Item label="Description" name="description">
                    <Input
                      placeholder="Enter Description"
                      className="ant-input ant-input-lg"
                    />
                  </Form.Item>
                  <button className="submit-btn">SEND</button>
                </Form>
              </div>
            </div>
          </Col>
          <Col span={15} lg={12} md={12} sm={12}>
            <div className="contact-info">
              <Image
                src="/contact.jpeg"
                height="600"
                width="800"
                alt="contact me"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactMe;
