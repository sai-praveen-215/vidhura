import { Col, Row } from "antd";
import styles from "./Header.module.css";
function Header() {
  return (
    <Row gutter={[16, 16]} className={styles.header_row}>
      <Col>
        <img
          style={{ height: "60px", width: "60px" }}
          src="https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-farmer-logo-hand-sickle-reap-png-image_5582849.png"
          alt="logo"
        />
      </Col>
      <Col>Project Name</Col>
    </Row>
  );
}

export default Header;
