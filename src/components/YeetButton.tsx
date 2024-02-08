import styled from "styled-components";
import { DataSm, DataXs } from "@daohaus/ui";

import { YeeterItem } from "../utils/types";
import {
  formatLootForMin,
  formatMinContribution,
} from "../utils/yeetDataHelpers";
import { YeetButtonRouterLink } from "./layout/Shared";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

export const YeetButton = ({ yeeter }: { yeeter: YeeterItem }) => {
  return (
    <ButtonContainer>
      {yeeter.isActive && (
        <>
          <DataSm>
            Receive {formatLootForMin(yeeter)} loot tokens per{" "}
            {formatMinContribution(yeeter)} ETH contributed
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
