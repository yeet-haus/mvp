import { Card, widthQuery } from "@daohaus/ui";
import styled from "styled-components";
import { deathBlack, jaundiceYellow } from "../../theme/colors";

export const OverviewCard = styled(Card)`
  width: 64rem;
  padding: 6rem 8rem 12rem 8rem;
  border: none;
  margin-bottom: 3.4rem;
  box-shadow: 5px 5px ${deathBlack.step1}, -5px -5px ${jaundiceYellow.step1};
  @media ${widthQuery.md} {
    /* max-width: 100%; */
    min-width: 0;
    padding: 6rem 4.5rem 12rem 4.5rem;
  }
`;
