import React, { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";

import {
  Buildable,
  Field,
  DataMd,
  widthQuery,
  DataSm,
  DataXs,
} from "@daohaus/ui";
import { useYeeter } from "../../hooks/useYeeter";
import { useParams } from "react-router-dom";
import { useCurrentYeeter } from "../../contexts/CurrentYeeterContext";
import { ValidNetwork } from "@daohaus/keychain-utils";
import {
  formatLootForAmount,
  formatLootForMin,
  formatLootForMinSimple,
} from "../../utils/yeetDataHelpers";
import styled from "styled-components";
import { isNumberString } from "@daohaus/utils";
import { deathBlack } from "../../theme/colors";

const SpacedPar = styled(DataSm)`
  margin-top: 3rem;
  font-weight: 700;
  color: ${deathBlack.step1};

  @media ${widthQuery.sm} {
    margin-top: 0rem;
  }
`;

const StyledDataXs = styled(DataXs)`
  font-size: 9px;
`;

export const YeetPerLootMod = (props: Buildable<Field>) => {
  const { watch, setValue } = useFormContext();

  const amount = watch("minTribute");
  const multiplier = watch("multiplier");

  const lootReturned = useMemo(() => {
    if (!amount || !isNumberString(amount)) return "0";

    if (!multiplier || !isNumberString(multiplier)) return "0";

    console;

    return formatLootForMinSimple(amount, multiplier);
  }, [amount, multiplier]);

  useEffect(() => {
    if (!amount || !isNumberString(amount)) return;

    if (BigInt(amount) < BigInt(100000000000000000)) {
      setValue("multiplier", "10000");
    } else if (BigInt(amount) < BigInt(1000000000000000000)) {
      setValue("multiplier", "1000");
    } else {
      setValue("multiplier", "100");
    }
  }, [amount]);

  return (
    <>
      <SpacedPar>RETURNS {lootReturned} LOOT TOKENS</SpacedPar>
      <StyledDataXs>
        * This multiplier is defaulted based on the minimum yeet. Adjustment
        ability is coming soon.
      </StyledDataXs>
    </>
  );
};
