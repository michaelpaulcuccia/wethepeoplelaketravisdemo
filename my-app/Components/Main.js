"use client";
import React from "react";
import styled from "styled-components";

const Root = styled.main`
  margin-top: 120px;
`;

export default function Main({ children }) {
  return <Root>{children}</Root>;
}
