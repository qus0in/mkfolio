import { Flex, Layout, Typography } from "antd";
import { Helmet } from "react-helmet-async";
import GitHubLogo from "../components/common/etc/GitHubLogo";
import PortfolioForm from "../components/feature/portfolioForm/PortfolioForm";
import NewWindowLink from "../components/common/etc/NewWindowLInk";
import { DataSourceProvider } from "../contexts/DataSourceContext";
import { MarkdownProvider } from "../contexts/MarkDownContext";
import PortfolioTableWrapper from "../components/feature/portfolioTable/PortfolioTableWrapper";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>마크폴리오</title>
      </Helmet>
      <Layout>
        <Layout.Header
          style={{
            color: "white",
            height: "100%",
          }}
        >
          <Flex gap="small" vertical style={{ margin: "12px 0" }}>
            <Typography.Title level={2} style={{ color: "white", margin: "0" }}>
              마크폴리오
            </Typography.Title>
            <Typography.Title level={4} style={{ color: "white", margin: "0" }}>
              프로젝트와 포트폴리오를 마크다운으로 정리해보세요!
            </Typography.Title>
          </Flex>
        </Layout.Header>
        <Layout.Content
          style={{
            padding: "24px 48px",
          }}
        >
          <DataSourceProvider>
            <Flex gap="large" vertical>
              <MarkdownProvider>
                <PortfolioTableWrapper />
              </MarkdownProvider>
              <PortfolioForm />
            </Flex>
          </DataSourceProvider>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          <NewWindowLink to="https://github.com/qus0in">
            <GitHubLogo size={24} />
          </NewWindowLink>
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default HomePage;
