import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import SelectBox from '@/components/SelectBox/SelectBox';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';

const SearchHeader = () => {
  const [inputValue, setInputValue] = useState({ name: '', account: '' });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setInputValue({ name: '', account: '' });
  };

  return (
    <>
      <SearchWrap>
        <div className="wrap">
          <div className="section-wrap">
            <div className="name">이름</div>
            <div className="input-wrap">
              <Input
                color={inputValue.name.length === 0 ? 'placeholder' : 'filled'}
                size="small"
                style={{ width: '290px', marginRight: '10px' }}
                value={inputValue.name}
                placeholder="검색어를 입력해주세요."
                onChange={handleInputChange}
                name="name"
              />
            </div>
          </div>

          <div className="section-wrap">
            <div className="account">계좌번호</div>
            <div className="input-wrap">
              <Input
                color={inputValue.account.length === 0 ? 'placeholder' : 'filled'}
                size="small"
                style={{ width: '290px', marginRight: '10px' }}
                value={inputValue.account}
                placeholder="검색어를 입력해주세요."
                onChange={handleInputChange}
                name="account"
              />
            </div>
          </div>
        </div>

        <div className="button-wrap">
          <Button size="small" mode="secondary" onClick={handleReset}>
            초기화
          </Button>
          <Button size="small" mode="primary">
            검색
          </Button>
        </div>
      </SearchWrap>
    </>
  );
};

export default SearchHeader;

const SearchWrap = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  border-radius: 8px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));
  .name {
    color: ${color.gray.white};
    font-size: 14px;
    font-weight: 400;

    display: flex;
    padding: 11px 40px 9px 41px;
    justify-content: center;
    align-items: center;

    border-right: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
    box-sizing: border-box;
  }

  .account {
    color: ${color.gray.white};

    font-size: 14px;
    font-weight: 400;

    display: inline-flex;
    padding: 11px 34px 9px 34px;
    justify-content: center;
    align-items: center;

    border-right: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
    border-left: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  }

  .section-wrap {
    display: flex;
  }
  .wrap {
    display: flex;
    margin: 0;
  }
  .input-wrap {
    display: flex;
    align-items: center;
    margin-left: 10px;
    gap: 4px;
  }
  .button-wrap {
    display: flex;
    align-items: center;
    margin-right: 4px;
    gap: 4px;
  }
`;
