import { Form, message, Spin } from "antd";
import { useState } from "react";
import PortfolioFormItems from "./PortfolioFormItems";
import { PortfolioFormOptions, PortfolioFormValues } from "../../../types";
import { v4 } from "uuid";
import client from "../../../api/client";
import { useDataSource } from "../../../hooks/useDataSource";

interface ModelResponse {
  title: string;
  description: string;
}

const PortfolioForm = () => {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<PortfolioFormOptions>({});
  const { records, setRecords } = useDataSource();

  const updateOptions = (values: PortfolioFormValues) => {
    const fieldsToUpdate = [
      "techStack",
      "goldCircleWhy",
      "goldCircleHow",
      "goldCircleWhat",
    ] as const;

    fieldsToUpdate.forEach((field) => {
      options[field] = Array.from(
        new Set([...(options[field] || []), ...values[field]])
      );
    });

    setOptions({ ...options });
  };

  const [spinning, setSpinning] = useState(false);

  const onFinish = async (values: PortfolioFormValues) => {
    updateOptions(values);
    setSpinning(true);
    try {
      const response = await client.post("", {
        body: JSON.stringify({
          techStack: values.techStack,
          goldCircleWhy: values.goldCircleWhy,
          goldCircleHow: values.goldCircleHow,
          goldCircleWhat: values.goldCircleWhat,
        }),
      });
      if (!response.ok) {
        setSpinning(false);
        message.error(
          "서버 에러로 인해 포트폴리오 항목을 추가하는데 실패했습니다."
        );
        return;
      }
      const data = await response.json<ModelResponse>();

      setRecords!([
        ...records!,
        {
          id: v4(),
          title: data.title,
          stack: values.techStack,
          description: data.description,
          image: values.imageLink,
          repository: values.githubLink,
          deploy: values.deployLink,
        },
      ]);

      setSpinning(false);
      message.success("포트폴리오 항목이 추가되었습니다.");
      form.resetFields();
    } catch {
      setSpinning(false);
      message.error(
        "알 수 없는 에러로 포트폴리오 항목을 추가하는데 실패했습니다."
      );
    }
  };
  return (
    <>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <PortfolioFormItems options={options} />
        <Spin spinning={spinning} fullscreen />
      </Form>
    </>
  );
};

export default PortfolioForm;
