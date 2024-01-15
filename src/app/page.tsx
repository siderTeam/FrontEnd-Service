"use client";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      내가 메인
      <div>
        <Button size='small' mode={"success"}>
          나는 스몰
        </Button>
        <Button size='medium' mode={"primary"}>
          나는 미디움
        </Button>
        <Button size='large' mode={"error"}>
          나는 라지
        </Button>

        <Button textType={"text_primary"} mode={"none"}>
          글자 버튼
        </Button>

        <Button
          onClick={() => setVisible(true)}
          size='large'
          mode={"error"}
          style={{ fontSize: 16 }}
        >
          나는 라지
        </Button>
      </div>
      <div>
        <Input size='small' mode={"success"} />
        <Input size='medium' mode={"primary"} />
        <Input size='large' mode={"error"} />
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
