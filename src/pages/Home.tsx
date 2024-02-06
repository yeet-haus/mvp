import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { H2, SingleColumnLayout, LinkStyles, H1, ParLg } from "@daohaus/ui";

import { ButtonRouterLink } from "../components/ButtonRouterLink";
import { YeetH1 } from "../components/layout/Shared";

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

const Contain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const StyledRouterLink = styled(RouterLink)`
  ${LinkStyles}
  margin-bottom: 2rem;
  font-weight: 900;
`;

const StyledH2 = styled(H2)`
  font-weight: 900;
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <Contain>
        <YeetH1>YEETER IS A REVOLUTION IN WEB3 FUNDRAISING</YeetH1>
        <StyledRouterLink to="wtf">
          <StyledH2>WHAT THE ACTUAL FUCK?</StyledH2>
        </StyledRouterLink>
        <LinkBox>
          <ButtonRouterLink to="explore" size="lg" variant="outline">
            Explore
          </ButtonRouterLink>
          <ButtonRouterLink to="launch" size="lg" variant="outline">
            Launch
          </ButtonRouterLink>
        </LinkBox>
      </Contain>
    </SingleColumnLayout>
  );
};
