"use client";
import React from "react";
import styled from "styled-components";
import CustomLink from "./CustomLink";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
//import { GiHamburgerMenu } from "react-icons/gi";
//import { mobileBreakPoint } from "../Constants/constants";

const FixedPosition = styled.div`
  overflow: hidden;
  background-color: blue;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Root = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1600px;
  color: white;
  background: blue;
  padding: 18px 8px;
`;

const DesktopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const LeftSideDesktop = styled.div`
  display: flex;
  width: 50%;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;

  span {
    margin-left: 4px;
    white-space: nowrap;
  }
`;

const RightideDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export default function NavBar() {
  return (
    <FixedPosition>
      <Root>
        <DesktopContainer>
          <LeftSideDesktop>
            <LinkContainer>
              <FaMapMarkerAlt />
              <span>Lakeway, Texas 78734</span>
            </LinkContainer>
            <LinkContainer>
              <MdMail />
              <span>
                {" "}
                <CustomLink
                  isemail={true}
                  href="info@wethepeoplelaketravis.com"
                >
                  info@wethepeoplelaketravis.com
                </CustomLink>
              </span>

              {/* <div style={{ display: "flex" }}>
                <MdMail />
                <CustomLink
                  isemail={true}
                  href="info@wethepeoplelaketravis.com"
                >
                  info@wethepeoplelaketravis.com
                </CustomLink>
              </div> */}
            </LinkContainer>
          </LeftSideDesktop>
          <RightideDesktop>
            <div>DONATE NOW</div>
            <div>Register</div>
            <div>Login</div>
          </RightideDesktop>
        </DesktopContainer>
      </Root>
    </FixedPosition>
  );
}
