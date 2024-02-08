import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { assembleYeeterSummonerArgs } from "../../utils/summonTx";

const StyledH4 = styled(H4)`
  font-weight: 900;
  font-size: 4rem;
  color: ${({ theme }) => theme.link.color};
`;

export const HomeContainer = () => {
  const location = useLocation();
  const { publicClient, address, chainId } = useDHConnect();

  return (
    <TXBuilder
      publicClient={publicClient}
      chainId={chainId}
      appState={{ memberAddress: address }}
      argCallbackRecord={{
        assembleYeeterSummonerArgs: assembleYeeterSummonerArgs,
      }}
    >
      <DHLayout
        leftNav={<StyledH4>YEETER</StyledH4>}
        pathname={location.pathname}
        navLinks={[
          { label: "Explore", href: `/` },
          { label: "Launch", href: `/launch` },
        ]}
      >
        <Outlet />
      </DHLayout>
    </TXBuilder>
  );
};
