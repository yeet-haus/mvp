import { DataIndicator, widthQuery } from "@daohaus/ui";
import styled from "styled-components";
import { ProgressBar } from "./ProgressBar";
import { formatValueTo, fromWei } from "@daohaus/utils";
import { YeeterItem } from "../utils/types";
import { calcProgressPerc } from "../utils/yeetDataHelpers";
import { jaundiceYellow } from "../theme/colors";
import { HAUS_NETWORK_DATA, ValidNetwork } from "@daohaus/keychain-utils";

const ProgressRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .bar {
    width: 100%;
  }

  @media ${widthQuery.xs} {
    flex-direction: column;
    .bar {
      width: 100%;
    }
  }
`;

export const YeetGoalProgress = ({
  yeeter,
  chainId,
}: {
  yeeter: YeeterItem;
  chainId: string;
}) => {
  if (!yeeter) {
    return null;
  }

  const percentageComplete = yeeter
    ? `${calcProgressPerc(yeeter.balance, yeeter.goal)}%`
    : "0%";

  return (
    <>
      {!yeeter.isComingSoon && (
        <ProgressRow>
          <DataIndicator
            label="Raised"
            data={`${formatValueTo({
              value: fromWei(yeeter.balance),
              decimals: 3,
              format: "numberShort",
            })} of ${formatValueTo({
              value: fromWei(yeeter.goal),
              decimals: 3,
              format: "numberShort",
            })} ${HAUS_NETWORK_DATA[chainId as ValidNetwork]?.symbol}`}
          />
          <div className="bar">
            <ProgressBar
              progressSection={[
                { percentage: percentageComplete, color: jaundiceYellow.step1 },
              ]}
              backgroundColor="black"
            />
          </div>
        </ProgressRow>
      )}
    </>
  );
};
