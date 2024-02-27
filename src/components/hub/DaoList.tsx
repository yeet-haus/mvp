import styled from "styled-components";

import { breakpoints } from "@daohaus/ui";

import { DaoCard } from "./DaoCard";
import { YeeterItem } from "../../utils/types";
import { useConnect } from "@daohaus/connect-context";

export const DaoList = ({
  daoData,
  displayChain,
}: {
  daoData: YeeterItem[];
  displayChain: string;
}) => {
  return <DaoCards daoData={daoData} displayChain={displayChain} />;
};

const CardListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 2rem;
  justify-content: center;
  text-align: center;
  @media (min-width: ${breakpoints.xs}) {
    justify-content: flex-start;
  }
`;

const DaoCards = ({
  daoData,
  displayChain,
}: {
  daoData: YeeterItem[];
  displayChain: string;
}) => {
  const { chainId, validNetwork } = useConnect();

  return (
    <CardListBox>
      {daoData.map((yeeter: YeeterItem) => (
        <DaoCard key={yeeter.id} yeeter={yeeter} chainId={displayChain} />
      ))}
    </CardListBox>
  );
};
