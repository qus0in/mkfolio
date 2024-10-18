import { Button, Flex } from "antd";
import MarkdownModal from "./MarkdownModal";
import { useMarkdown } from "../../../hooks/useMarkdown";
import { useState } from "react";
import { useDataSource } from "../../../hooks/useDataSource";
import PortfolioTable from "./PortfolioTable";

const PortfolioTableWrapper = () => {
  const { records } = useDataSource();
  const { setText } = useMarkdown();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => setIsModalOpen(false);
  const showModal = () => {
    // records json을 markdown 표로 변환
    let md = "| 제목 | 설명 | 기술 스택 | 이미지 | 깃헙 | 링크 |\n";
    md += "| --- | --- | --- | --- | --- | --- |\n";
    md += records!
      .map((record) => {
        let row = "";
        row += `| ${record.title} | ${record.description} `;
        row += `| ${record.stack
          .map((s) => s.replace(/ /g, "%20"))
          .map(
            (s) =>
              `![${s}](https://img.shields.io/badge/${s}-0A0A0A?style=plastic)`
          )
          .join(" ")} `;
        if (record.image) {
          row += `| ![](${record.image}) `;
        } else {
          row += "| ";
        }
        if (record.repository) {
          row += `| [🐈‍⬛](${record.repository}) `;
        } else {
          row += "| ";
        }
        if (record.deploy) {
          row += `| [🔗](${record.deploy}) |`;
        } else {
          row += "| |";
        }
        return row;
      })
      .join("\n");
    setText!(md);
    setIsModalOpen(true);
  };
  return (
    <>
      <Flex>
        <Button onClick={showModal}>마크다운 보기</Button>
      </Flex>
      <MarkdownModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
      <PortfolioTable />
    </>
  );
};

export default PortfolioTableWrapper;
