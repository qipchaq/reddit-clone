import React from "react";
import { Col, Row, Space } from "antd";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Space size="small">
            <Image
              src="/images/redditFace.svg"
              alt="logo"
              height={30}
              width={30}
            />
            <Image
              src="/images/redditText.svg"
              alt="logo"
              height={30}
              width={60}
            />
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
