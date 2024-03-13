import styled from '@emotion/styled';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { ModalPageProps } from '@/types/types';
import { color } from '@/styles/color';
import { useState } from 'react';

const router = [
  {
    id: 1,
    label: '전체',
  },
  {
    id: 2,
    label: '프론트엔드',
  },
  {
    id: 3,
    label: '백엔드',
  },
  {
    id: 4,
    label: '모바일',
  },
  {
    id: 5,
    label: '기타',
  },
];

const skills = [
  {
    id: 1,
    label: 'JavaSript',
  },
  {
    id: 2,
    label: 'TypeSript',
  },
  {
    id: 3,
    label: 'React',
  },
  {
    id: 4,
    label: 'VueJS',
  },
  {
    id: 5,
    label: 'NextJS',
  },
];

const SkillModal = ({ visible, onClose }: ModalPageProps) => {
  const [activePosition, setActivePosition] = useState('전체');

  const handleClickMenu = (position: string) => {
    setActivePosition(position);
  };

  return (
    <>
      <Modal
        style={{
          borderRadius: 24,
          width: 600,
          height: 530,
          background: 'black',
          zIndex: 9999,
          overflow: 'hidden',
          padding: 0,
          border: '1px solid rgba(255, 255, 255, 0.60)',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.40)',
        }}
        visible={visible}
        onClose={onClose}
      >
        <Container>
          <div className="title">스킬</div>

          <Content>
            <LeftSection>
              {router.map((route) => {
                const isActive = activePosition === route.label;
                return (
                  <div style={isActive ? { display: 'flex', gap: '8px', alignItems: 'center' } : { marginLeft: '10px' }}>
                    {isActive && <div style={{ width: '2px', height: '20px', background: color.brand.brandMain }} />}
                    <div className={isActive ? 'choice' : 'label'} onClick={() => handleClickMenu(route.label)}>
                      {route.label}
                    </div>
                  </div>
                );
              })}
            </LeftSection>
            <div style={{ width: '1px', height: '316px', background: color.gray.gray6 }} />
            <RightSection>
              {skills.map((skill) => (
                <div className="label">{skill.label}</div>
              ))}
            </RightSection>
          </Content>
          <div className="button-wrap">
            <Button size="medium" variant="primary">
              선택
            </Button>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default SkillModal;

const Container = styled.div`
  padding: 60px 70px 32px 70px;
  height: 530px;
  box-sizing: border-box;

  .title {
    color: ${color.gray.white};
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  .position-wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }
  .position {
    display: flex;
    gap: 16px;

    color: ${color.gray.white};
    font-size: 24px;
    font-weight: 400;
  }
  .button-wrap {
    display: flex;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-right: 16px;

  .choice {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    cursor: default;
  }
  .label {
    color: ${color.gray.gray5};
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 56px;
  .label {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
  }
`;
