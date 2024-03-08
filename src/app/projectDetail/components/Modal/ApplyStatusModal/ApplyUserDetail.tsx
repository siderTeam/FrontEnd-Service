'use client';

import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';
import TextArea from '@/components/TextArea/TextArea';
import Button from '@/components/Button/Button';
import CompanionReason from './CompanionReason';
import { useState } from 'react';

const ApplyUserDetail = () => {
  const [Modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(false);
  };

  return (
    <>
      <CompanionReason visible={Modal} onClose={handleModal} />
      <Container>
        <div className="modal-title">지원자 정보</div>
        <InfoWrap>
          <div className="profile">
            <Image src="/images/profile_dummy.svg" alt="user" width={120} height={120} />
            <span className="status">대기</span>
          </div>
          <div className="info">
            <div className="title">닉네임</div>
            <div className="content">박봉팔</div>
            <div className="title">포지션</div>
            <div className="content">디자이너</div>
            <div className="title">연차</div>
            <div className="content">88년차</div>
            <div className="title">스킬</div>
            <div className="content">
              Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, Figma, Java, Html, CSS, JavaScript, Oracle, MySQL, Figma, Java, Html, CSS, JavaScript, Oracle,
              MySQL
            </div>
          </div>
        </InfoWrap>
        <div>
          <div className="info-title">한 줄 소개</div>
          <TextArea
            value={
              '눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창... 눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창...눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창... 눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창...눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창... 눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창...눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창... 눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다. 연봉이나 좀 더 올려주면 좋겠네요... 시벌창...눈물이흐르는중년디자이너입니다. 포토샵, 일러스트, 블렌더, C4D, 암튼이것저것하고있습니다.'
            }
            disabled
            style={{ width: '100%', height: 187 }}
          />
        </div>
        <div className="button">
          <Button variant="error" onClick={() => setModal(true)}>
            반려
          </Button>
          <Button>승인</Button>
          {/* <Button variant="secondary">승인취소</Button> */}
          {/* <Button variant="error_secondary">반려취소</Button> */}
        </div>
      </Container>
    </>
  );
};

export default ApplyUserDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  height: 100%;
  box-sizing: border-box;
  padding: 60px 76px 32px 70px;
  color: ${color.gray.white};

  .modal-title {
    font-size: 24px;
    font-weight: 700;
  }

  .info-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  gap: 40px;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .status {
      font-size: 14px;
      font-weight: 700;
    }
  }

  .info {
    display: grid;
    grid-template-columns: 90px 1fr;
    grid-row-gap: 8px;
  }
`;
