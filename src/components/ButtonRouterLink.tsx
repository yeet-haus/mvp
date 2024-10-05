import React, { ComponentProps } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@daohaus/ui";
import { ButtonColor } from "@daohaus/ui/components/atoms/Button/Button.types";

type ProfileLinkProps = {
  href?: string;
  to: string;
  selected?: boolean;
  disabled?: boolean;
  linkType?: "internal" | "external" | "no-icon-external";
  hideIcon?: boolean;
  target?: string;
  rel?: string;
} & Partial<ComponentProps<typeof Button>>;

export const StyledButton = styled.button`
  align-items: center;
  border-radius: ${({ theme }) => theme.button.radius};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 4.8rem;
  letter-spacing: 1.8px;
  outline: none;
  padding: 1.2rem;
  text-decoration: none;
  transition: 0.2s all;
  width: fit-content;

  &.lg {
    font-size: ${({ theme }) => theme.font.size.lg};
    height: 6rem;
    min-width: 10.7rem;
    padding: 1.5rem;

    svg {
      height: 3.2rem;
      width: 3.2rem;
    }
  }

  &.sm {
    font-size: ${({ theme }) => theme.font.size.xs};
    height: 3.6rem;
    min-width: 6.6rem;
    padding: 0.9rem;

    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
  }

  &.loading {
    .icon-left,
    .icon-right {
      visibility: hidden;
    }
  }

  &.full-width {
    min-width: 100%;
  }
`;

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  color: unset;
  &:hover {
    text-decoration: none;
  }
`;

export const ButtonRouterLink = ({
  to,
  target,
  disabled,
  children,
  linkType,
  hideIcon,
  rel,
  ...buttonProps
}: ProfileLinkProps) => {
  return (
    <StyledRouterLink to={to} target={target} className="button-link" rel={rel}>
      <StyledButton disabled={disabled} {...buttonProps}>
        {children}
      </StyledButton>
    </StyledRouterLink>
  );
};
