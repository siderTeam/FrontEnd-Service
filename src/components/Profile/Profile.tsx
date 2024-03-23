import styled from '@emotion/styled';
import { color } from '@/styles/color';
import Image from 'next/image';

type UserType = {
  career: number;
  name: string;
  positionName: string;
  onClick?: () => void;
  issuer?: boolean;
};

const Profile = ({ name, career, positionName, onClick, issuer = false }: UserType) => {
  return (
    <Container onClick={onClick}>
      <Image src={'/images/profile_dummy.svg'} alt="profile" width={40} height={40} />

      <ProfileWrap>
        <NameWrap>
          <div className="name">{name}</div>
          {issuer && <Image src={'/images/star/star_green.svg'} alt="star" width={12} height={12} />}
        </NameWrap>
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
  cursor: pointer;

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

const NameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
