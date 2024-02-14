import styled from "styled-components";

import { charLimit, toWholeUnits } from "@daohaus/utils";
import { Bold, ParLg, ParXl, ProfileAvatar } from "@daohaus/ui";
import { YeeterItem } from "../../utils/types";
import { useDaoData } from "@daohaus/moloch-v3-hooks";
import { useYeeter } from "../../hooks/useYeeter";
import { YeeterStatusTag } from "../YeeterStatusTag";
import { deathBlack, jaundiceYellow } from "../../theme/colors";
import { YeetButtonRouterLink } from "../layout/Shared";
import { HAUS_NETWORK_DATA, ValidNetwork } from "@daohaus/keychain-utils";

const StyledDaoCard = styled.div`
  background-color: ${(props) => props.theme.card.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 34rem;
  height: 34rem;
  border: 1px solid ${(props) => props.theme.secondary.step2};
  padding: 2.4rem;
  border-radius: ${(props) => props.theme.card.radius};
  box-shadow: 5px 5px ${deathBlack.step1}, -5px -5px ${jaundiceYellow.step1};
  .top-box {
    margin-bottom: 1.3rem;
  }

  .badge {
    transform: translateX(-0.8rem);
  }
  .stats-box {
    display: flex;
    flex-direction: column;
  }
  .tag-box {
    font-size: 1.4rem;
  }
`;

const FatParLg = styled(ParXl)`
  font-weight: 800;
  font-size: 3rem;
`;

export const DaoCard = ({
  yeeter,
  chainId,
}: {
  yeeter: YeeterItem;
  chainId: string;
}) => {
  const { dao } = useDaoData({ daoChain: chainId, daoId: yeeter.dao.id });
  const { metadata } = useYeeter({ daoId: dao?.id, shamanAddress: yeeter.id });

  return (
    <StyledDaoCard className="dao-card">
      <div className="top-box">
        <div className="alert-box">
          <ProfileAvatar
            size="xl"
            address={dao?.id}
            image={metadata?.icon || dao?.avatarImg}
          />
        </div>
      </div>
      <FatParLg className="dao-title">
        {dao?.name
          ? charLimit(dao.name, 11)?.toUpperCase()
          : charLimit(yeeter.id, 11)?.toUpperCase()}{" "}
      </FatParLg>
      <div className="stats-box">
        <ParLg>
          <Bold>
            {toWholeUnits(yeeter.balance)}{" "}
            {HAUS_NETWORK_DATA[chainId as ValidNetwork]?.symbol} Raised
          </Bold>{" "}
        </ParLg>
      </div>
      <div className="tag-box">
        <YeeterStatusTag yeeter={yeeter} fontSize="sm" />
      </div>
      <YeetButtonRouterLink
        size="lg"
        color="secondary"
        to={`/molochv3/${chainId}/${yeeter.dao.id}`}
      >
        GO
      </YeetButtonRouterLink>
    </StyledDaoCard>
  );
};
