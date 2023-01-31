import React from "react";
import Navbar from "../Navbar/Navbar";
import { Open_Sans } from "@next/font/google";

const open_Sans = Open_Sans({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: ${open_Sans.style.fontFamily};
          background-color: #f0f2f5;
        }
      `}</style>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  );
};

export default Layout;
