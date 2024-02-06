import { Card, H1, widthQuery } from "@daohaus/ui";
import styled from "styled-components";
import { deathBlack, jaundiceYellow, nipplePink } from "../../theme/colors";

export const OverviewCard = styled(Card)`
  width: 64rem;
  padding: 2rem;
  border: none;
  margin-bottom: 3.4rem;
  @media ${widthQuery.md} {
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
`;
