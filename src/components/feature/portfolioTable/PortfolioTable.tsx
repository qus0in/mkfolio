import { Button, Image, Table, Tag } from "antd";
import { PortfolioRecord } from "../../../types";
import GitHubLogo from "../../common/etc/GitHubLogo";
import LinkEmoji from "../../common/etc/LinkEmoji";
import NewWindowLink from "../../common/etc/NewWindowLInk";
import DeleteEmoji from "../../common/etc/DeleteEmoji";
import { useDataSource } from "../../../hooks/useDataSource";

const PortfolioTable = () => {
  const { records, setRecords } = useDataSource();

  return (
    <>
      <Table
        dataSource={records}
        rowKey="id"
        pagination={false}
        scroll={{ x: "max-content" }}
      >
        <Table.Column title="제목" dataIndex="title" key="title" width={120} />
        <Table.Column
          title="설명"
          dataIndex="description"
          key="description"
          width={450}
        />
        <Table.Column
          title="기술 스택"
          dataIndex="stack"
          key="stack"
          render={(stacks: string[]) =>
            stacks.map((stack) => (
              <Tag color="black" key={stack}>
                {stack}
              </Tag>
            ))
          }
          width={240}
        />
        <Table.Column
          title="이미지"
          dataIndex="image"
          key="image"
          render={(url) => <Image width={200} src={url} />}
          width={200}
        />
        <Table.Column
          title="깃헙"
          dataIndex="repository"
          key="repository"
          render={(url) =>
            url && (
              <NewWindowLink to={url}>
                <GitHubLogo size={20} />
              </NewWindowLink>
            )
          }
          width={60}
        />
        <Table.Column
          title="배포"
          dataIndex="deploy"
          key="deploy"
          render={(url) =>
            url && (
              <NewWindowLink to={url}>
                <LinkEmoji />
              </NewWindowLink>
            )
          }
          width={60}
        />
        <Table.Column
          title="삭제"
          key="delete"
          width={60}
          render={(_, row: PortfolioRecord) => (
            <Button
              type="text"
              onClick={() =>
                setRecords!(records!.filter((record) => record.id !== row.id))
              }
            >
              <DeleteEmoji />
            </Button>
          )}
        />
      </Table>
    </>
  );
};

export default PortfolioTable;
