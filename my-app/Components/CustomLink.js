import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Root = styled(Link)`
  display: flex;
  align-items: center;
`;

export default function CustomLink({ children, href, target, isemail }) {
  return (
    <Root
      href={isemail ? "mailto:" + href : href}
      target={target}
      isemail={isemail}
    >
      {children}
    </Root>
  );
}

CustomLink.defaultProps = {
  target: "_self",
  isemail: false,
};
