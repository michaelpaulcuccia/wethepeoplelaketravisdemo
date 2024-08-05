"use client";
import React, { useState } from "react";
import Image from "next/image";
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
  display: flex;
  margin: 0 auto;
  max-width: 1600px;
  color: white;
  background: blue;
  padding: 18px 8px;
  position: relative;

  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
    justify-content: flex-end;
    height: 175px;
  }
`;

const DesktopContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${mobileBreakPoint}) {
    display: none;
  }
`;

const LeftSideDesktop = styled.div`
  display: flex;
  width: 50%;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;

  &:hover {
    color: #c0c0c0;
  }

  span {
    margin-left: 4px;
    white-space: nowrap;
  }
`;

const RightideDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;

  a {
    margin-left: 14px;

    &:hover {
      color: #c0c0c0;
    }
  }
`;

const MobileContainer = styled.div`
  display: none;

  @media (max-width: ${mobileBreakPoint}) {
    display: block;
  }
`;

const MobileContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const MobileMenuContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 100;
  z-index: 1;
  height: 100%;
  background: white;
  color: black;
  border: 1px solid black;
`;

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onClickHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <FixedPosition>
      <Root>
        {/* BEGIN DESKTOP */}
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
            </LinkContainer>
          </LeftSideDesktop>
          <RightideDesktop>
            <CustomLink href="/">DONATE NOW</CustomLink>
            <CustomLink href="/">Register</CustomLink>
            <CustomLink href="/">Login</CustomLink>
          </RightideDesktop>
        </DesktopContainer>
        {/* END DESKTOP */}
        {/* ****************************************** */}
        {/* BEING MOBILE */}
        <MobileContainer>
          <MobileContent>
            <Image
              src="/images/logo.png"
              height={196}
              width={149}
              layout="intrinsic"
            />
            <span onClick={onClickHandler}>
              {" "}
              <GiHamburgerMenu style={{ fontSize: "32px" }} />
            </span>
            {showMobileMenu && (
              <MobileMenuContainer onClick={onClickHandler}>
                <CustomLink href="/">DONATE NOW</CustomLink>
                <CustomLink href="/">Register</CustomLink>
                <CustomLink href="/">Login</CustomLink>
              </MobileMenuContainer>
            )}
          </MobileContent>
        </MobileContainer>
      </Root>
    </FixedPosition>
  );
}
