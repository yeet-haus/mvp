import styled from "styled-components";
import { DataSm, DataXs } from "@daohaus/ui";

import { YeeterItem } from "../utils/types";
import {
  formatLootForMin,
  formatMinContribution,
} from "../utils/yeetDataHelpers";
import { YeetButtonRouterLink } from "./layout/Shared";
import { HAUS_NETWORK_DATA, ValidNetwork } from "@daohaus/keychain-utils";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

export const YeetButton = ({
  yeeter,
  chainId,
}: {
  yeeter: YeeterItem;
  chainId: string;
}) => {
  return (
    <ButtonContainer>
      {yeeter.isActive && (
        <>
          <DataSm>
            Receive {formatLootForMin(yeeter)} loot tokens per{" "}
            {formatMinContribution(yeeter)}
            {HAUS_NETWORK_DATA[chainId as ValidNetwork]?.symbol} contributed
          </DataSm>
          <YeetButtonRouterLink
            to="yeet"
            size="lg"
            fullWidth={true}
            // disabled={yeeter.isFull}
          >
            YEET!
          </YeetButtonRouterLink>
          {yeeter.isFull && (
            <DataXs color="primary.step1">GOAL HAS BEEN REACHED!</DataXs>
          )}
        </>
      )}
    </ButtonContainer>
  );
};
