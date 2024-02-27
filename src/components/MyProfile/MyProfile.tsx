"use client";

import styled from "@emotion/styled";
import { color } from "@/Styles/color";

const MyProfile = ({ style }) => {
  return (
    <Profile style={style}>
      <img
        src='/images/profile_dummy2.svg'
        style={{ width: 80, boxSizing: "border-box" }}
        className='img'
      />
      <div className='profile-text'>
        <div className='name'>박봉팔</div>
        <div className='position'>88년차 포지션</div>
      </div>
    </Profile>
  );
};

export default MyProfile;

const Profile = styled.div`
  display: flex;
  align-items: center;

  .img {
    margin-right: 24px;
  }

  .profile-text {
    display: flex;
    flex-direction: column;
  }

  .name {
    color: ${color.gray.gray3};

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .position {
    color: ${color.gray.gray4};

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
