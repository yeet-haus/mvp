import { DataXl, DataXs, ParSm } from "@daohaus/ui";
import { YeetsItem } from "../utils/types";
import styled from "styled-components";
import {
  formatShortDateTimeFromSeconds,
  formatValueTo,
  fromWei,
} from "@daohaus/utils";
import { ContributorProfile } from "./ContributorProfile";

export const YeetListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
  margin-top: 2rem;
`;

export const YeetListItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .profile {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .date {
    margin-top: 0.5rem;
  }
`;

export const YeetList = ({ yeets }: { yeets: YeetsItem[] }) => {
  return (
    <YeetListContainer>
      {yeets &&
        yeets.length > 0 &&
        yeets.map((yeet: YeetsItem) => {
          return (
            <YeetListItem key={yeet.id}>
              <div className="profile">
                <ContributorProfile address={yeet.contributor} />
                <DataXl>
                  {`${formatValueTo({
                    value: fromWei(yeet.amount),
                    decimals: 3,
                    format: "numberShort",
                  })} ETH`}
                </DataXl>
              </div>
              <div className="message">
                <ParSm>{yeet.message}</ParSm>
                <div className="date">
                  <DataXs>
                    {formatShortDateTimeFromSeconds(yeet.createdAt)}
                  </DataXs>
                </div>
              </div>
            </YeetListItem>
          );
        })}
    </YeetListContainer>
  );
};