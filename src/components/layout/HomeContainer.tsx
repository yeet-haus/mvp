import { DHLayout, useDHConnect } from "@daohaus/connect";
import { TXBuilder } from "@daohaus/tx-builder";
import { H4 } from "@daohaus/ui";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { assembleYeeterSummonerArgs } from "../../utils/summonTx";
import { YeetH4 } from "./Shared";
import { banalityBeige } from "../../theme/colors";
import { useEffect } from "react";

const StyledH4 = styled(YeetH4)`
  color: ${banalityBeige.step1};
`;

export const HomeContainer = () => {
  const location = useLocation();
  const { publicClient, address, chainId } = useDHConnect();

  useEffect(() => {
    console.log("location", location);

    if (location.pathname.match(/success/g)) {
      document.body.classList.add("explosion");
    } else {
      document.body.classList.remove("explosion");
    }
  }, [location]);

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
          { label: "EXPLORE", href: `/` },
          { label: "LAUNCH", href: `/launch` },
        ]}
      >
        <Outlet />
      </DHLayout>
    </TXBuilder>
  );
};
