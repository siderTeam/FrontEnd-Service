"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import TextArea from "@/components/TextArea/TextArea";
import Label from "@/components/Label/Label";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      내가 메인
      <div>
        <Label label="라벨명1" style={{fontSize: 20}}>
          <TextArea />
        </Label>
        <Label label="라벨명2" location="top">
          <TextArea />
        </Label>
        <Label label="라벨명" require="*">
          <TextArea />
        </Label>
        <Label label="라벨명" require="*" location="top">
          <TextArea />
        </Label>
        <Label label="라벨명" require="*" subText="서브텍스트입니다.">
          <TextArea />
        </Label>
        <Label
          label="라벨명"
          require="*"
          subText="서브텍스트입니다."
          location="top"
        >
          <TextArea />
        </Label>
        <Button size="small" mode={"success"}>
          나는 스몰
        </Button>
        <Button size="medium" mode={"primary"}>
          나는 미디움
        </Button>
        <Button size="large" mode={"error"}>
          나는 라지
        </Button>

        <Button
          onClick={() => setVisible(true)}
          size="large"
          mode={"error"}
          style={{ fontSize: 16 }}
        >
          나는 라지
        </Button>
      </div>
      <div>
        <Input size="small" mode={"success"} />
        <Input size="medium" mode={"primary"} />
        <Input size="large" mode={"error"} />
      </div>
      <Modal
        onClose={() => setVisible(false)}
        style={{ width: 300, height: 200 }}
        visible={visible}
      >
        내가 모달이야!
      </Modal>
    </main>
  );
}
