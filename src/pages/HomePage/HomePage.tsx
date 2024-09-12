import PageHeader from "../../Components/PageHeader/PageHeader";
import styles from "./HomePage.module.css";
import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
// import { isMobile } from "../utils/Util";
import { Modal } from "antd";
import { SmileOutlined } from "@ant-design/icons";
function HomePage(props: any) {
  const { name } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleData, setSingleData] = useState({ data: [], title: "" });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const fieldINformation = [
    {
      kollimarla: [
        {
          field_village: "kollimarla",
          filed_crop: "paddy",
          field_area: "6 Acare",
          seed_Type: "1245",
        },
        {
          field_village: "kollimarla",
          filed_crop: "paddy",
          field_area: "4 Acare",
          seed_Type: "1245",
        },
        {
          field_village: "kollimarla",
          filed_crop: "paddy",
          field_area: "1.5 Acare",
          seed_Type: "1245",
        },
        {
          field_village: "kollimarla",
          filed_crop: "paddy",
          field_area: "1.25 Acare",
          seed_Type: "1245",
        },
        {
          field_village: "kollimarla",
          filed_crop: "paddy",
          field_area: "2 Acare",
          seed_Type: "1245",
        },
        {
          field_village: "kollimarla",
          filed_crop: "paddy",
          field_area: "2.65 Acare",
          seed_Type: "1245",
        },
        {
          field_village: "kollimarla",
          filed_crop: "paddy",
          field_area: "2 Acare",
          seed_Type: "1245",
        },
      ],
      Gogulamudi: [
        {
          field_village: "Gogulamudi",
          filed_crop: "Mirchi",
          field_area: "3.25 Acare",
          seed_Type: "345",
        },
        {
          field_village: "Gogulamudi",
          filed_crop: "Black Gram",
          field_area: "6 Acare",
          seed_Type: "Polish",
        },
        {
          field_village: "Gogulamudi",
          filed_crop: "sanagalu",
          field_area: "2.25 Acare",
          seed_Type: "White",
        },
      ],
    },
  ];

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const data = fieldINformation[0];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleCard = (props: any) => {
    const { data, village } = props;

    if (village === "kollimarla") {
      setSingleData({ data: data.kollimarla, title: village });
    } else {
      setSingleData({ data: data.Gogulamudi, title: village });
    }

    setIsModalOpen(true);
  };

  return (
    <div>
      <PageHeader name={"welcome Vippadapu Srinivasa Rao"} />
      <>
        <Row justify={"center"}>
          <Col style={{ fontSize: isMobile ? "15px" : "30px" }}>{name}</Col>
        </Row>
        <h2 className={styles.h1}>Works to do</h2>
        <div className={styles.Works}>
          <h3 className={styles.h1}> NO works to do</h3>
          <SmileOutlined
            className={styles.h1}
            style={{ fontSize: "60px", color: "green" }}
          />
        </div>
        <div className={styles.Information_div}>
          <div>
            <h2 className={styles.h1}>Field Information</h2>
            <div className={styles.fields_type}>
              <Row gutter={[16, 16]}>
                {Object.keys(data).map((item: any) => (
                  <Col xl={12} xxl={12} sm={24} md={24} xs={24}>
                    <Card
                      className={styles.card}
                      onClick={() => {
                        handleCard({ data: data, village: item });
                      }}
                    >
                      {item}
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
        <Modal
          title={singleData.title}
          open={isModalOpen}
          style={{ top: 50 }}
          onCancel={handleCancel}
        >
          <div style={{ height: "590px", overflow: "auto" }}>
            {singleData?.data?.map((item: any) => (
              <div>
                <Card title={item.filed_crop} className={styles.card_details}>
                  <h3>Field Area:{item.field_area}</h3>
                  <h3>Seeds:{item.seed_Type}</h3>
                </Card>
              </div>
            ))}
          </div>
        </Modal>
      </>
    </div>
  );
}

export default HomePage;
