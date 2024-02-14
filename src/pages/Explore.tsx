import { HomeDashboard } from "../components/hub/HomeDashboard";
import { useConnect } from "@daohaus/connect-context";
import { DEFAULT_CHAIN_ID } from "../utils/constants";
import { YeetH1 } from "../components/layout/Shared";
import styled from "styled-components";
import { getNetworkName } from "@daohaus/keychain-utils";
import { H1 } from "@daohaus/ui";
import { banalityBeige, deathBlack, jaundiceYellow } from "../theme/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledYeetH1 = styled(YeetH1)`
  margin-top: 3rem;
`;

const StyledH1 = styled(H1)`
  font-weight: 900;
  color: ${jaundiceYellow.step1};
  text-shadow: 5px 5px ${deathBlack.step1};
`;

export const Explore = () => {
  const { chainId } = useConnect();

  return (
    <Container>
      <StyledYeetH1>EXPLORE YEETERS</StyledYeetH1>
      <StyledH1>on {getNetworkName(chainId || DEFAULT_CHAIN_ID)}</StyledH1>
      <HomeDashboard chainId={DEFAULT_CHAIN_ID} />;
    </Container>
  );
};
