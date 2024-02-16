import "../../public/reset.css";
import RootContainer from "@/component/RootContainer";
import * as CS from "../component/Styles/CommonStyles";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body style={{ background: CS.color.black }}>
        {/* <Background /> */}
        <RootContainer>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {children}
            </div>
          </div>
        </RootContainer>
      </body>
    </html>
  );
}
