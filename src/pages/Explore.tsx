import { HomeDashboard } from "../components/hub/HomeDashboard";
import { useConnect } from "@daohaus/connect-context";
import {
  DEFAULT_CHAIN_ID,
  targetNetworks,
  targetNetworksForSelect,
} from "../utils/constants";
import { YeetH1 } from "../components/layout/Shared";
import styled from "styled-components";
import { getNetworkName } from "@daohaus/keychain-utils";
import { H1, Select, widthQuery } from "@daohaus/ui";
import { deathBlack, jaundiceYellow } from "../theme/colors";
import { useEffect, useState } from "react";

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

  @media ${widthQuery.md} {
    font-size: 5rem;
  }

  @media ${widthQuery.xs} {
    font-size: 3rem;
  }
`;

const NetworkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

const StyledSelect = styled(Select)`
  width: 175px;
`;

export const Explore = () => {
  const { chainId, validNetwork } = useConnect();
  const [displayNetwork, setDisplayNetwork] = useState(DEFAULT_CHAIN_ID);

  useEffect(() => {
    if (chainId && validNetwork) {
      setDisplayNetwork(chainId);
    }
  }, [chainId, validNetwork]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.currentTarget.value) {
      setDisplayNetwork(event.currentTarget.value);
    }
  };

  return (
    <Container>
      <StyledYeetH1>EXPLORE YEETERS</StyledYeetH1>
      <NetworkContainer>
        <StyledH1>ON</StyledH1>
        <StyledSelect
          // @ts-expect-error
          options={Object.keys(targetNetworks).map((key) => {
            return {
              name: getNetworkName(key)?.toUpperCase(),
              value: key,
            };
          })}
          value={displayNetwork}
          onChange={handleSelect}
          long={true}
          full
        />
      </NetworkContainer>
      <HomeDashboard chainId={displayNetwork} />;
    </Container>
  );
};
