import { Form, Select } from "antd";
import { Rule } from "antd/es/form";

interface SelectItemProps {
  name: string;
  label: string;
  rules: Rule[];
  options?: string[];
  placeholder: string;
  maxTagCount: number;
  maxTagTextLength: number;
}

const SelectItem = ({
  name,
  label,
  rules,
  options,
  placeholder,
  maxTagCount,
  maxTagTextLength,
}: SelectItemProps) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Select
        mode="tags"
        style={{ width: "100%" }}
        placeholder={placeholder}
        tokenSeparators={[","]}
        maxTagCount={maxTagCount}
        maxTagTextLength={maxTagTextLength}
        options={options?.map((el) => ({
          label: el,
          value: el,
        }))}
      />
    </Form.Item>
  );
};

export default SelectItem;
