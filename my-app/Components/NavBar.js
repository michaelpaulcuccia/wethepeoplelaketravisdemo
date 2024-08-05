"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import CustomLink from "./CustomLink";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { mobileBreakPoint } from "../Constants/constants";

const FixedPosition = styled.div`
  overflow: hidden;
  background-color: blue;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Root = styled.div`
  color: white;
  background: blue;
  padding: 18px 8px;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
`;

const DesktopDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${mobileBreakPoint}) {
    display: none;
  }
`;

const NavItem = styled.div`
  display: flex;
  cursor: pointer;
  margin-right: 18px;

  span {
    margin-left: 6px;
  }

  &:hover {
    color: #c0c0c0;
  }
`;

const LeftSideLinks = styled.div`
  width: 50%;
  display: flex;
`;

const RightSideLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  width: 50%;

  a {
    &:hover {
      color: #c0c0c0;
    }
  }
`;

const MobileDisplay = styled.div`
  display: none;

  @media (max-width: ${mobileBreakPoint}) {
    display: block;
  }
`;

const MobileContainer = styled.div`
  diplay: flex;
  width: 100%;
  background: green;
  justify-content: flex-end;
  margin-left: auto;
`;

export default function NavBar() {
  return (
    <FixedPosition>
      <Root>
        {/* DESKTOP STARTS */}
        <DesktopDisplay>
          <LeftSideLinks>
            <NavItem>
              <FaMapMarkerAlt />
              <span>Lakeway, Texas 78734</span>
            </NavItem>

            <NavItem>
              <MdMail />
              <span>
                <CustomLink
                  isemail={true}
                  href="info@wethepeoplelaketravis.com"
                >
                  info@wethepeoplelaketravis.com
                </CustomLink>
              </span>
            </NavItem>
          </LeftSideLinks>
          <RightSideLinks>
            <CustomLink href="/">DONATE NOW</CustomLink>
            <CustomLink href="/">Register</CustomLink>
            <CustomLink href="/">Login</CustomLink>
          </RightSideLinks>
        </DesktopDisplay>
        {/* DESKTOP ENDS */}
        {/* ********************************************** */}
        {/* MOBILE BEGINS  */}
        <MobileDisplay>
          <MobileContainer>
            <GiHamburgerMenu />
          </MobileContainer>
        </MobileDisplay>
        {/* MOBILE ENDS  */}
      </Root>
    </FixedPosition>
  );
}
