import { Modal } from "antd";
import MarkdownEditor from "./MarkdownEditor";
interface MarkdownModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
}
const MarkdownModal = ({ isModalOpen, handleCancel }: MarkdownModalProps) => {
  return (
    <Modal
      width={1200}
      title="마크다운 보기"
      open={isModalOpen}
      closable={true}
      onCancel={handleCancel}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <MarkdownEditor />
    </Modal>
  );
};

export default MarkdownModal;
