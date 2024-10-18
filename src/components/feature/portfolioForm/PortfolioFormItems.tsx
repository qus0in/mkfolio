import { Button, Form } from "antd";
import SelectItem from "../../common/form/SelectItem";
import LinkInputItem from "../../common/form/LinkInputItem";
import { PortfolioFormOptions } from "../../../types";

const PortfolioFormItems = ({ options }: { options: PortfolioFormOptions }) => {
  const makeRequired = (message: string) => ({ required: true, message });

  return (
    <>
      <SelectItem
        name="techStack"
        label="기술 스택 (최대 7개)"
        rules={[makeRequired("기술 스택을 1개 이상 입력하세요")]}
        options={options.techStack}
        placeholder="사용된 기술 스택을 입력하세요 (7개까지)"
        maxTagCount={7}
        maxTagTextLength={30}
      />
      <SelectItem
        name="goldCircleWhy"
        label="Why (최대 3개)"
        rules={[makeRequired("Why를 1개 이상 입력하세요")]}
        options={options.goldCircleHow}
        placeholder="지망하는 포지션, 해결하고 싶은 문제, 적용해보고 싶었던 기술이나 아키텍처를 입력하세요 (3개까지)"
        maxTagCount={3}
        maxTagTextLength={60}
      />
      <SelectItem
        name="goldCircleHow"
        label="How (최대 5개)"
        rules={[makeRequired("How을 1개 이상 입력하세요")]}
        options={options.goldCircleHow}
        placeholder="프로젝트에서의 역할, 기여한 바, 적용한 기법들을 입력하세요 (5개까지)"
        maxTagCount={5}
        maxTagTextLength={60}
      />
      <SelectItem
        name="goldCircleWhat"
        label="What (최대 3개)"
        rules={[makeRequired("What을 1개 이상 입력하세요")]}
        options={options.goldCircleWhat}
        placeholder="프로젝트를 통해 얻은 성취, 배운 점, 느낀 점 등을 입력하세요 (3개까지)"
        maxTagCount={3}
        maxTagTextLength={60}
      />
      <LinkInputItem
        name="imageLink"
        label="이미지 링크"
        placeholder="이미지 링크를 입력하세요"
        pattern="https?://.*\.(?:png|jpe?g|gif)"
        tooltip="https://imgur.com/upload 를 이용해 이미지를 업로드하고 링크를 복사하세요"
      />
      <LinkInputItem
        name="githubLink"
        label="GitHub"
        placeholder="GitHub 링크를 입력하세요"
        pattern="https?://github.com/.*"
      />
      <LinkInputItem
        name="deployLink"
        label="배포"
        placeholder="배포 링크를 입력하세요"
        pattern="https?://.*"
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          추가
        </Button>
      </Form.Item>
    </>
  );
};

export default PortfolioFormItems;
