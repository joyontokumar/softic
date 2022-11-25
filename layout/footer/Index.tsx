import {
  DribbbleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-area section-padding">
      <div className="container">
        <Row gutter={16}>
          <Col span={8}>
            <div className="widget-wrapper">
              <div className="widget-title">
                <Image src="/logo.png" alt="softic" width={250} height={170} />
              </div>
              <div className="widget-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Facere odit minima repellendus, cumque magnam unde quis
                  <br />
                  recusandae aspernatur ex ipsa.
                </p>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="widget-wrapper">
              <div className="widget-title">
                <h3>Usefull Links</h3>
              </div>
              <div className="widget-content">
                <ul>
                  <li>
                    <Link href="#">About Me</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Me</Link>
                  </li>
                  <li>
                    <Link href="#">Photo Gallery</Link>
                  </li>
                  <li>
                    <Link href="#">Help & Support</Link>
                  </li>
                  <li>
                    <Link href="#">Terms and Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="widget-wrapper">
              <div className="widget-title">
                <h3>Mailchimp Newsletter</h3>
              </div>
              <div className="widget-content widget-social-content">
                <input type="email" placeholder="Email..." />
                <div className="social-links">
                  <ul>
                    <li>
                      <Link href="#">
                        <FacebookOutlined />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <InstagramOutlined />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <DribbbleOutlined />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <TwitterOutlined />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <LinkedinOutlined />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <YoutubeOutlined />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
