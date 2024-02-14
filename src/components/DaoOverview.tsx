import { useEffect, useState } from "react";
import styled from "styled-components";

import { DataIndicator, Radio, Select } from "@daohaus/ui";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { useDaoData } from "@daohaus/moloch-v3-hooks";
import { useYeeter } from "../hooks/useYeeter";
import { useYeets } from "../hooks/useYeets";
import { OverviewCard } from "./layout/Shared";
import { YeetProfile } from "./YeetProfile";
import { YeetGoalProgress } from "./YeetGoalProgress";
import { YeetTimeBlock } from "./YeetTimeBlock";
import { YeetButton } from "./YeetButton";
import { YeetList } from "./YeetList";
import { useDHConnect } from "@daohaus/connect";
import { YeetsItem } from "../utils/types";
import { deathBlack } from "../theme/colors";

const YeetsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  .total {
    margin-bottom: 1rem;
  }

  .dd {
    width: 13rem;
  }

  .yeetSelect {
    box-shadow: 3px 3px ${deathBlack.step1};
  }
`;

type DaoOverviewProps = {
  daoChain: ValidNetwork;
  daoId: string;
  shamanAddress: string;
};

export const DaoOverview = ({
  daoChain,
  daoId,
  shamanAddress,
}: DaoOverviewProps) => {
  const { address } = useDHConnect();
  const { dao } = useDaoData({
    daoChain,
    daoId,
  });
  const { yeeter, metadata } = useYeeter({
    chainId: daoChain,
    daoId,
    shamanAddress,
  });
  const { yeets } = useYeets({
    chainId: daoChain,
    shamanAddress,
  });

  const [yeetFilter, setYeetFilter] = useState("all");

  useEffect(() => {
    if (!address) {
      setYeetFilter("all");
    }
  }, [address]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYeetFilter(event.currentTarget.value);
  };

  if (!dao) return null;

  return (
    <>
      {dao && (
        <>
          <OverviewCard>
            {metadata && (
              <YeetProfile
                dao={dao}
                daoChain={daoChain}
                metadata={metadata}
                shamanAddress={shamanAddress}
              />
            )}

            {yeeter && <YeetGoalProgress yeeter={yeeter} chainId={daoChain} />}
            {yeeter && <YeetTimeBlock yeeter={yeeter} />}
            {yeeter && <YeetButton yeeter={yeeter} />}
          </OverviewCard>
          <OverviewCard>
            <YeetsHeader>
              <div className="total">
                <DataIndicator label="Total Yeets" data={yeeter?.yeetCount} />
              </div>

              {address && (
                <div className="dd">
                  <Select
                    id="yeetFilter"
                    long={false}
                    value={yeetFilter}
                    onChange={handleSelect}
                    className="yeetSelect"
                    options={[
                      {
                        name: "ALL YEETS",
                        value: "all",
                      },
                      {
                        name: "MY YEETS",
                        value: "user",
                      },
                    ]}
                  />
                </div>
              )}
            </YeetsHeader>
            {yeets && (
              <YeetList
                chainId={daoChain}
                yeets={yeets.filter((y: YeetsItem) => {
                  if (yeetFilter === "user" && address) {
                    return (
                      y.contributor.toLowerCase() === address.toLowerCase()
                    );
                  } else {
                    return true;
                  }
                })}
              />
            )}
          </OverviewCard>
        </>
      )}
    </>
  );
};

export default DaoOverview;
