import { useEffect, useState } from "react";

function PageHeader(props: any) {
  const { name } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: isMobile ? "13px" : "30px",
        }}
      >
        {name}
      </h1>
    </div>
  );
}
export default PageHeader;
