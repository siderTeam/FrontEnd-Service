import styled from "@emotion/styled";
import * as CS from "../../Styles/CommonStyles";

const Profile = () => {
  return (
    <Container>
      <img src='/images/profile_dummy.svg' />

      <ProfileWrap>
        <div className='name'>박봉팔</div>
        <PositionWrap>
          <div className='year'>8년차</div>
          <div className='position'>front-endddddd</div>
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
    color: ${CS.color.gray4};

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .year {
    color: ${CS.color.gray4};

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
    color: ${CS.color.gray4};
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
