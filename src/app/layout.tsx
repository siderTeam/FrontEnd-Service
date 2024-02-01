"use client";

import NavBar from "@/components/NavBar/NavBar";
import "../../public/reset.css";
import styled from "@emotion/styled";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Container>
        <LeftSection>
          <NavBar />
        </LeftSection>
        <RightSection>
          <div>{children}</div>
        </RightSection>
      </Container>
    </html>
  );
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  max-width: 1920px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* flex-grow: 1; */
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
