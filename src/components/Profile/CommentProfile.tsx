import styled from '@emotion/styled';
import { color } from '@/styles/color';

const CommentProfile = () => {
  return (
    <Container>
      <img src="/images/profile_dummy.svg" />

      <ProfileWrap>
        <PositionWrap>
          <div className="name">박봉팔</div>
          <span className="position">|</span>
          <div className="position">8년차</div>
        </PositionWrap>
        <div className="time">8888.88.88 88:88:88</div>
      </ProfileWrap>
    </Container>
  );
};

export default CommentProfile;

const Container = styled.div`
  display: flex;
  width: 220px;
  align-items: center;
  gap: 10px;

  .name {
    color: ${color.gray.gray4};
    font-size: 14px;
    font-weight: 500;
  }

  .position {
    color: ${color.gray.gray5};
    font-size: 14px;
    font-weight: 500;
  }

  .time {
    color: ${color.gray.gray6};
    font-size: 14px;
    font-weight: 400;
  }
`;

const PositionWrap = styled.div`
  display: flex;
  gap: 4px;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
