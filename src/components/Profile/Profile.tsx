import styled from "@emotion/styled";

const Profile = () => {
  return (
    <Container>
      <img src='/images/profile_dummy.svg' />

      <ProfileWrap>
        <div className='name'>박봉팔</div>
        <PositionWrap>
          <div className='year'>8년차</div>
          <div className='position'>front-endddd</div>
        </PositionWrap>
      </ProfileWrap>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  width: 181px;
  align-items: center;
  gap: 10px;

  .name {
    color: var(--GRAY-GRAY_3, #f2f4f7);
    /* font-family: "Spoqa Han Sans Neo"; */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .year {
    color: var(--GRAY-GRAY_4, #eaecf0);
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .position {
    display: -webkit-box;
    width: 84px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: var(--GRAY-GRAY_4, #eaecf0);
    text-overflow: ellipsis;
    font-family: "Spoqa Han Sans Neo";
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
