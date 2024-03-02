import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';
import SelectBox from '@/components/SelectBox/SelectBox';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { useState } from 'react';

const SearchHeader = () => {
  const [selectValue, setSelectValue] = useState({
    searchValue: '',
    statusValue: '',
    payStatusValue: '',
  });
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (name: string, value: string) => {
    setSelectValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleReset = () => {
    setSelectValue({
      searchValue: '',
      statusValue: '',
      payStatusValue: '',
    });
    setInputValue('');
  };

  return (
    <>
      <SearchWrap>
        <div className="wrap">
          <div className="section-wrap">
            <div className="search">검색어</div>
            <div className="input-wrap">
              <SelectBox
                options={[
                  { label: '아이디', value: '1' },
                  { label: '이름', value: '2' },
                  { label: '닉네임', value: '3' },
                ]}
                value={selectValue.searchValue}
                name="searchValue"
                onChange={handleSelectChange}
                placeholder="프로젝트 명"
              />
              <Input
                color={inputValue.length === 0 ? 'placeholder' : 'filled'}
                size="small"
                style={{ width: '434px', marginRight: '10px' }}
                value={inputValue}
                placeholder="검색어를 입력해주세요."
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="section-wrap">
            <div className="status">심사현황</div>
            <div className="input-wrap">
              <SelectBox
                options={[
                  { label: '대기', value: '1' },
                  { label: '심사중', value: '2' },
                  { label: '반려', value: '3' },
                  { label: '승인', value: '4' },
                  { label: '보증금 입금', value: '5' },
                ]}
                value={selectValue.statusValue}
                name="statusValue"
                onChange={handleSelectChange}
                placeholder="보증금 입금"
                style={{ marginRight: '10px' }}
              />
            </div>
          </div>

          <div className="section-wrap">
            <div className="pay-status">보증금 지급 현황</div>
            <div className="input-wrap">
              <SelectBox
                options={[
                  { label: '대기', value: '1' },
                  { label: '심사중', value: '2' },
                  { label: '반려', value: '3' },
                  { label: '승인', value: '4' },
                  { label: '보증금 입금', value: '5' },
                ]}
                value={selectValue.payStatusValue}
                name="payStatusValue"
                onChange={handleSelectChange}
                placeholder="보증금 입금"
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
  justify-content: space-between;

  border-radius: 8px;
  border: 1px solid var(--Stroke, rgba(255, 255, 255, 0.67));
  background: var(--Fill, linear-gradient(144deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 100%), rgba(2, 6, 13, 0.5));

  margin-top: 10px;

  .search {
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

  .status {
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

  .pay-status {
    color: ${color.gray.white};

    font-size: 14px;
    font-weight: 400;

    display: inline-flex;
    padding: 11px 12px 9px 11px;
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
    flex: 1;
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
