import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { assembleYeeterSummonerArgs } from "../../utils/summonTx";
import { YeetH4 } from "./Shared";

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
        leftNav={<YeetH4>YEETER</YeetH4>}
        pathname={location.pathname}
        navLinks={[
          { label: "EXPLORE", href: `/` },
          { label: "LAUNCH", href: `/launch` },
        ]}
      >
        <Outlet />
      </DHLayout>
    </TXBuilder>
  );
};
