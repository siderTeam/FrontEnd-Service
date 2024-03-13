import styled from '@emotion/styled';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import { ModalPageProps } from '@/types/types';
import { color } from '@/styles/color';
import { useState } from 'react';
import { POSITION_SKILLS } from 'public/static/common';
import { OPTION_TYPE } from '../SelectBox/SelectBox';

export type SKILL_TYPE = {
  id: number;
  name: string;
  imageName: string;
}

const SkillModal = ({ visible, onClose, onClickChoice }: ModalPageProps & { onClickChoice: (callback: OPTION_TYPE[]) => void }) => {
  const [activePosition, setActivePosition] = useState<keyof typeof POSITION_SKILLS>('전체');
  const [checked, setChecked] = useState<SKILL_TYPE[]>([]);

  const handleChangeChceck = (skill: SKILL_TYPE) => {
    setChecked((prev) => {
      const checkedValue = prev.map((item) => item.id);

      if (checkedValue.includes(skill.id)) {
        return prev.filter((item) => item.id !== skill.id);
      } else {
        return prev.concat(skill);
      }
    });
  };

  const handleClickMenu = (skill: keyof typeof POSITION_SKILLS) => {
    setActivePosition(skill);
  };

  return (
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
            {Object.keys(POSITION_SKILLS).map((route) => {
              const isActive = activePosition === route;
              return (
                <div key={route} style={isActive ? { display: 'flex', gap: '8px', alignItems: 'center' } : { marginLeft: '10px' }}>
                  {isActive && <div style={{ width: '2px', height: '20px', background: color.brand.brandMain }} />}
                  <div className={isActive ? 'choice' : 'label'} onClick={() => handleClickMenu(route as keyof typeof POSITION_SKILLS)}>
                    {route}
                  </div>
                </div>
              );
            })}
          </LeftSection>
          <div style={{ width: '1px', height: '316px', background: color.gray.gray6 }} />
          <RightSection>
            {POSITION_SKILLS[activePosition].map((skill) => (
              <div style={{ color: checked.map((item) => item.id).includes(skill.id) ? 'green' : 'white'}} onClick={() => handleChangeChceck(skill)} key={skill.id} className="label">
                {skill.name}
              </div>
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
  height: 316px;
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
  overflow-y: scroll;
  height: 100%;
  .label {
    color: ${color.gray.white};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
  }
`;
