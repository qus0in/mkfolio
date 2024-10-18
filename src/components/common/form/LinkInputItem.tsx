import { Form, Input } from "antd";
import LinkEmoji from "../etc/LinkEmoji";

interface LinkInputItemProps {
  name: string;
  label: string;
  placeholder: string;
  pattern: string;
  tooltip?: string;
}

const LinkInputItem = ({
  name,
  label,
  placeholder,
  pattern,
  tooltip,
}: LinkInputItemProps) => {
  return (
    <Form.Item name={name} label={label} tooltip={tooltip}>
      <Input
        placeholder={placeholder}
        type="url"
        pattern={pattern}
        prefix={<LinkEmoji />}
      />
    </Form.Item>
  );
};

export default LinkInputItem;
