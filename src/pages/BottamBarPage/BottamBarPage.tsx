import Styles from "./BottamBarPage.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { GiFarmTractor } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function BottamBarPage() {
  const navigate = useNavigate();
  const siderItems: any = [
    {
      key: "/",
      label: "Home",
      icon: <AiOutlineHome />,
      className: Styles.menu_item,
    },
    {
      key: "/bills",
      label: "Bills",
      icon: <AiOutlineHome />,
      className: Styles.menu_item,
    },

    {
      key: "/tractors",
      label: "Tractors",
      icon: <GiFarmTractor />,
      className: Styles.menu_item,
    },
    {
      key: "/labor",
      label: "Labor",
      icon: <MdPeopleAlt />,
      className: Styles.menu_item,
    },
    {
      key: "/fieldinformation",
      label: "Field Information",
      icon: "",
      className: Styles.menu_item,
    },
    {
      key: "/payments",
      label: "Payments",
      icon: <FaIndianRupeeSign />,
      className: Styles.menu_item,
    },
  ];
  return (
    <div>
      <Menu
        mode="horizontal"
        theme="dark"
        onClick={({ key }: any) => {
          navigate(key);
        }}
        selectedKeys={[location.pathname]}
        items={siderItems}
        // style={{ height: "100%", backgroundColor: "", color: "" }}
        className={Styles.menu_item}
      />
    </div>
  );
}

export default BottamBarPage;
