import styled from '@emotion/styled';
import { color } from '@/styles/color';

type UserType = {
  career: number;
  name: string;
  positionName: string;
};

const Profile = ({ name, career, positionName }: UserType) => {
  return (
    <Container>
      <img src="/images/profile_dummy.svg" />

      <ProfileWrap>
        <div className="name">{name}</div>
        <PositionWrap>
          <div className="year">{career}년차</div>
          <div className="position">{positionName}</div>
        </PositionWrap>
      </ProfileWrap>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  width: 220px;
  align-items: center;
  gap: 10px;

  .name {
    color: ${color.gray.gray4};

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .year {
    color: ${color.gray.gray4};

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .position {
    display: -webkit-box;
    width: 123px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex-shrink: 0;

    overflow: hidden;
    color: ${color.gray.gray4};
    text-overflow: ellipsis;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const PositionWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
