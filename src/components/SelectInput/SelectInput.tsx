import Image from 'next/image';
import styled from '@emotion/styled';
import { color } from '@/styles/color';

export type SelectInputProps<T> = {
  value?: string;
  name: string;
  onChange?: (e: any, type?: string) => void;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const SelectInput = <T,>({ value, onChange, onClick }: SelectInputProps<T>) => {
  return (
    <Container>
      <div className="select-input-wrap">
        <input className="input" placeholder="프로젝트 검색 ㄱ?" value={value} onChange={onChange} />
        <Image
          src="/images/icons/Magnification_green.svg"
          alt="magnification"
          width={20}
          height={20}
          style={{ marginLeft: '0px', cursor: 'pointer' }}
          onClick={onClick}
        />
      </div>
    </Container>
  );
};

export default SelectInput;

const Container = styled.div`
  display: flex;

  width: 440px;
  height: 44px;
  flex-shrink: 0;

  border-radius: 58px;
  border: 1px solid ${color.brand.brandMain};

  .select-input-wrap {
    display: flex;
    align-items: center;

    .select {
      position: relative;
      text-align: center;
    }

    .choice-value {
      width: 100%;
      text-align: center;
    }

    .input {
      outline: none;
      border: none;
      background: none;
      margin: 0 16px;

      width: 370px;

      color: ${color.gray.white};

      font-size: 16px;

      font-weight: 400;

      &::placeholder {
        color: ${color.gray.gray7};
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;

const SelectStyle = styled.div<any>`
  width: 80px;
  color: ${color.gray.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 20px;
`;

const OptionWrapper = styled.ul`
  position: absolute;
  width: 110px;
  top: 40px;
  left: 5px;

  box-sizing: border-box;

  z-index: 3;

  li {
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid ${color.brand.brandMain};
    color: ${color.gray.white};

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    background-color: ${color.gray.black};
  }

  li:first-child {
    border-radius: 8px 8px 0 0;
  }

  li:last-child {
    border-radius: 0 0 8px 8px;
  }
  li:hover {
    background-color: ${color.gray.gray8};
    color: ${color.brand.brandMain};
  }
`;
