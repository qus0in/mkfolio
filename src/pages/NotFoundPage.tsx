import { Result, Button } from "antd";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>404 찾을 수 없음</title>
      </Helmet>
      <Result
        status="404"
        title="404"
        subTitle="죄송합니다. 방문하신 페이지를 찾을 수 없습니다."
        extra={
          <Button type="primary" onClick={handleBackHome}>
            홈으로 돌아가기
          </Button>
        }
      />
    </>
  );
};

export default NotFoundPage;
