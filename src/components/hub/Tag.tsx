import React, { ReactNode } from "react";

const BaseTag = styled.div<{
  $fontSize?: string;
}>`
  display: inline-flex;
  align-items: center;
  background-color: ${deathBlack.step1};
  border: 1px solid ${deathBlack.step1};
  border-radius: ${({ theme }) => theme.tag.radius};
  color: ${nipplePink.step1};
  height: fit-content;
  width: fit-content;
  padding: 0.5rem 0.8rem;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: 600;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  svg.icon-left {
    margin-right: 1rem;
  }

  svg.icon-right {
    margin-left: 0.5rem;
  }
`;

type TagProps = {
  children: ReactNode;
  className?: string;
  fontSize?: string;
};

import styled from "styled-components";
import { deathBlack, nipplePink } from "../../theme/colors";

export const Tag = ({ className, children, fontSize = "1.2rem" }: TagProps) => {
  return (
    <BaseTag className={className} $fontSize={fontSize}>
      {children}
    </BaseTag>
  );
};
