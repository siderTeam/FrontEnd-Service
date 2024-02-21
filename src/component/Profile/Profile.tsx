"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { color } from "../../Styles/CommonStyles";

const Profile = () => {
  return (
    <Container>
      <Image
        src={"/images/home/profile.svg"}
        alt="profile"
        width={40}
        height={40}
      />
      <ProfileInfo>
        <span className="username">박봉팔</span>
        <span className="position">n년차 프론트엔드</span>
      </ProfileInfo>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .username {
    color: ${color.gray3};
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  .position {
    color: ${color.gray4};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }
`;
