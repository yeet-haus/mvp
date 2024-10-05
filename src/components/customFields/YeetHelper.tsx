import React from "react";
import { Buildable, Field, DataXs, DataSm } from "@daohaus/ui";
import { useYeeter } from "../../hooks/useYeeter";
import { useParams } from "react-router-dom";
import { useCurrentYeeter } from "../../contexts/CurrentYeeterContext";
import { HAUS_NETWORK_DATA, ValidNetwork } from "@daohaus/keychain-utils";
import {
  formatLootForMin,
  formatMinContribution,
} from "../../utils/yeetDataHelpers";
import styled from "styled-components";
import { FEE_DISCLOSURE } from "../../utils/constants";

const SpacedData = styled(DataSm)`
  margin-bottom: 1rem;
`;

export const YeetHelper = (props: Buildable<Field>) => {
  const { daoId, daoChain } = useParams();
  const { shamanAddress } = useCurrentYeeter();

  const { yeeter } = useYeeter({
    chainId: daoChain as ValidNetwork,
    daoId,
    shamanAddress,
  });

  if (!yeeter) return null;

  return (
    <>
      <SpacedData>
        Receive {formatLootForMin(yeeter)} loot tokens per{" "}
        {formatMinContribution(yeeter)}{" "}
        {HAUS_NETWORK_DATA[daoChain as ValidNetwork]?.symbol} contributed
      </SpacedData>
      <DataXs>*{FEE_DISCLOSURE}</DataXs>
    </>
  );
};
