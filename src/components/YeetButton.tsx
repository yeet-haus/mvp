import styled from "styled-components";
import { DataSm, DataXs } from "@daohaus/ui";

import { YeeterItem } from "../utils/types";
import {
  formatLootForMin,
  formatMinContribution,
} from "../utils/yeetDataHelpers";
import { YeetButtonRouterLink } from "./layout/Shared";
import { HAUS_NETWORK_DATA, ValidNetwork } from "@daohaus/keychain-utils";
import { deathBlack, jaundiceYellow } from "../theme/colors";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const CardButton = styled(YeetButtonRouterLink)`
  background-color: ${jaundiceYellow.step1};
  color: ${deathBlack.step1};
  letter-spacing: 1.8px;
  outline: none;
  text-decoration: none;
  transition: 0.2s all;
  /* width: fit-content; */
  font-size: ${({ theme }) => theme.font.size.lg};

  height: 6rem;
  min-width: 100%;

  padding: 1.5rem;

  padding: 1.2rem;
  border-radius: 200px;
  border: 1px solid black;
  box-shadow: 3px 3px ${deathBlack.step1};

  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${jaundiceYellow.step2};
  }
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
          <CardButton
            to="yeet"
            size="lg"
            fullWidth={true}
            // disabled={yeeter.isFull}
          >
            YEET!
          </CardButton>
          {yeeter.isFull && (
            <DataXs color="primary.step1">GOAL HAS BEEN REACHED!</DataXs>
          )}
        </>
      )}
    </ButtonContainer>
  );
};
