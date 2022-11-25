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

const Header = () => {
  return (
    <div className="header-area white-bg">
      <div className="container">
        <Row gutter={16}>
          <Col span={6} lg={6} md={6} sm={6}>
            <Link href="/">
              <div className="logo">
                <Image src="/logo.png" alt="softic" width={250} height={170} />
              </div>
            </Link>
          </Col>
          <Col span={12} lg={12} md={12} sm={12}>
            <div className="menu-area text-center">
              <div className="inner-menu-content">
                <ul>
                  <li>
                    <Link href="/">POSTS</Link>
                  </li>
                  <li>
                    <Link href="/photos">PHOTOS</Link>
                  </li>
                  <li>
                    <Link href="/contact">CONTACT ME</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col span={6} lg={6} md={6} sm={6}>
            <div className="social-action-area text-right">
              <div className="inner-social-action-content">
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
