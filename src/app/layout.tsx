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
        <Main>{children}</Main>
      </Container>
    </html>
  );
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* flex-grow: 1; */
`;

const Main = styled.div`
  width: 600px;
`;
