"use client";
import React from "react";
import styled from "styled-components";

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
  padding: 18px 0;
  max-width: 1600px;
  margin: 0 auto;
`;

export default function NavBar() {
  return (
    <FixedPosition>
      <Root>NavBar</Root>
    </FixedPosition>
  );
}
