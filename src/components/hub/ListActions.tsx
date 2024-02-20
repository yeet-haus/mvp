import { ReactNode } from "react";
import styled from "styled-components";

import { Noun } from "@daohaus/utils";
import { SingleColumnLayout, widthQuery } from "@daohaus/ui";
// import SearchInput from "./SearchInput";

type ListActionsProps = {
  children: ReactNode;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalDaos: number;
  noun: Noun;
};

const ControlBarBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 1.6rem;
  .list-toggle {
    margin-right: auto;
  }
  @media ${widthQuery.sm} {
    flex-direction: column;
  }
`;

export const ListActions = ({
  children,
  searchTerm,
  setSearchTerm,
}: ListActionsProps) => {
  // const { chainId } = useConnect();
  // console.log("chainId", chainId);
  // todo: pass connected chain when multichain and handle wrong chain

  // const chainId = DEFAULT_CHAIN_ID;
  // const isMobile = useBreakpoint(widthQuery.sm);

  return (
    <SingleColumnLayout>
      <ControlBarBox>
        {/* <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          totalItems={totalDaos}
          noun={noun}
          full={isMobile}
        /> */}
      </ControlBarBox>
      {children}
    </SingleColumnLayout>
  );
};
