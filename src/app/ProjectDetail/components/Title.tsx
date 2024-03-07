import Button from '@/components/Button/Button';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import ApplyModal from './ApplyModal';

const Title = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <TitleWrap>
      <div className="top-wrap">
        <div style={{ display: 'flex', gap: '32px', color: color.gray.gray5, fontSize: '18px', fontWeight: 400 }}>
          <span>닉네임</span> | <span>8888.88.88</span> | <span>모집중</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: color.gray.gray5, fontSize: '12px', fontWeight: 400 }}>
          <Image src="/images/etc/security_gray5.svg" width={14} height={14} alt="security" />
          <span>8,888,888,888</span>
        </div>
      </div>
      <div className="bottom-wrap">
        <div className="title">
          고구마말랭이 기깔나게 만드는 프로젝트 진행할 프론트엔드 모집. 텍스트범위체크하기.최대 노출은 2줄까지로 합시다. 제목 2줄 이상 쓰는놈이 미친놈임 암튼
          그럼.
        </div>
        <Button size="medium" mode="primary" onClick={handleModal}>
          지원하기
        </Button>
      </div>
      <ApplyModal visible={modal} onClose={handleCloseModal} />
    </TitleWrap>
  );
};

export default Title;

const TitleWrap = styled.div`
  padding: 40px 32px 0 32px;

  .top-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .bottom-wrap {
    display: flex;
    justify-content: space-between;
  }
  .title {
    width: 969px;
    color: ${color.gray.white};
    font-size: 26px;
    font-weight: 700;
  }
`;
