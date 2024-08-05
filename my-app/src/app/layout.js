import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Container from "../../Components/Container";
import Main from "../../Components/Main";
import NavBar from "../../Components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <NavBar />
          <Container>
            <Main>{children}</Main>
          </Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}