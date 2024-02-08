import { Card, H1, H4, widthQuery } from "@daohaus/ui";
import styled from "styled-components";
import { deathBlack, jaundiceYellow, nipplePink } from "../../theme/colors";
import { ButtonRouterLink } from "../ButtonRouterLink";

export const OverviewCard = styled(Card)`
  width: 64rem;
  padding: 6rem 8rem 12rem 8rem;
  border: none;
  margin-bottom: 3.4rem;
  box-shadow: 5px 5px ${deathBlack.step1}, -5px -5px ${jaundiceYellow.step1};
  @media ${widthQuery.md} {
    max-width: 100%;
    min-width: 0;
    padding: 6rem 4.5rem 12rem 4.5rem;
  }
`;

export const FormOverview = styled.div`
  background-color: ${({ theme }) => theme.card.bg};
  border-radius: ${({ theme }) => theme.card.radius};
  padding: 6rem 8rem 12rem 8rem;
  margin-top: 5rem;
  box-shadow: 5px 5px ${deathBlack.step1}, -5px -5px ${jaundiceYellow.step1};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 74rem;

  @media ${widthQuery.md} {
    padding: 6rem 4.5rem 12rem 4.5rem;
    max-width: 100%;
    min-width: 0;
  }
`;

export const DataGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    padding: 2rem 0;
  }
`;

export const YeetH1 = styled(H1)`
  font-size: 10rem;
  font-weight: 900;
  color: ${nipplePink.step1};
  text-shadow: 5px 5px ${deathBlack.step1}, -5px -5px ${jaundiceYellow.step1};
  line-height: 1;
  text-align: center;

  @media ${widthQuery.md} {
    font-size: 7rem;
  }

  @media ${widthQuery.xs} {
    font-size: 5rem;
  }
`;

export const YeetH4 = styled(H4)`
  font-weight: 900;
  font-size: 4rem;
  color: ${({ theme }) => theme.link.color};
  text-shadow: 5px 5px ${deathBlack.step1};
`;

export const YeetButtonRouterLink = styled(ButtonRouterLink)`
  box-shadow: 5px 5px ${deathBlack.step1};
`;
