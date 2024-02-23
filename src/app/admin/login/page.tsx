"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";
import Image from "next/image";
import Input from "@/component/Input_new/Input";
import Checkbox from "@/component/Checkbox_new/Checkbox";
import Button from "@/component/Button_new/Button";

import { useState } from "react";

const page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [usernameColor, setUsernameColor] = useState("placeholder");
  const [passwordColor, setPasswordColor] = useState("placeholder");
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "username") {
      setUsernameColor(value.length !== 0 ? "filled" : "placeholder");
    } else if (name === "password") {
      setPasswordColor(value.length !== 0 ? "filled" : "placeholder");
    }
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Image src='/images/admin_logo.svg' width={133} height={37} alt='logo' />
      <div className='inputWrap'>
        <Input
          size='large'
          color={usernameColor}
          placeholder='아이디'
          name='username'
          onChange={handleChange}
        />
        <Input
          size='large'
          color={passwordColor}
          placeholder='비밀번호'
          name='password'
          onChange={handleChange}
          type='password'
        />
        <div className='save'>
          <Checkbox
            type={isChecked ? "checked" : "unchecked"}
            className='checkbox'
            text='아이디 저장'
            isChecked={isChecked}
            onClick={handleChecked}
          />
        </div>
      </div>

      <div className='buttonWrap'>
        <Button size='large' mode='primary'>
          로그인
        </Button>
      </div>
    </Container>
  );
};

export default page;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 372px;

  gap: 50px;

  .inputWrap {
    display: flex;
    flex-direction: column;

    gap: 10px;

    margin-bottom: 8.5px;
    box-sizing: border-box;
    position: relative;

    .error-text {
      color: ${color.secondary.error_1};

      font-size: 14px;

      font-weight: 300;

      position: absolute;
      top: -25px;
    }
  }
  .save {
    width: 100%;
    display: flex;
    justify-content: start;
  }
  .buttonWrap {
    display: flex;
    flex-direction: column;

    gap: 8px;
  }
`;
