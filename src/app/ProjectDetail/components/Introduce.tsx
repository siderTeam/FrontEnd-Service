import { color } from '@/styles/color';
import styled from '@emotion/styled';
import Image from 'next/image';

const Introduce = () => {
  return (
    <ProjectIntro>
      <div className="intro-title">
        <Image src="/images/etc/notice_gray5.svg" width={22} height={22} alt="notice" />
        <span>프로젝트 소개</span>
      </div>
      <div className="intro-content">
        [고구마말랭이 기깔나게 만드실 분 모집] 스터디 주제: 기가막힌 고구마를 위해 기막히고 코막히고 목막히는 프로젝트 스터디 목표: 평생 내 손으로 기깔나는
        군고구마는 한 번 만들어봐야하지 않겠습니까? 예상 스터디 일정: 군고구마가 땡긴다면 언제든지 가능쌉가능 여기 걍 뭐냐 그 인간들이 프로젝트 모집할때 썼던
        내용 고대로 영역 맞춰서 노출되면 될 것 같습니당. 알아서 끌어와다가 붙이는거 해주겠지 머 우리팀 프론트엔드 개짱짱쓰들~~~
      </div>
    </ProjectIntro>
  );
};

export default Introduce;

const ProjectIntro = styled.div`
  padding: 40px 32px 0 32px;
  .intro-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${color.gray.gray5};
    font-size: 22px;
    font-weight: 700;
  }
  .intro-content {
    color: ${color.gray.white};
    font-size: 18px;
    font-weight: 500;

    margin-top: 16px;
  }
`;
