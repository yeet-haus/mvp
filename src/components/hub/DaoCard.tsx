import styled from "styled-components";

import { charLimit, readableNumbers, toWholeUnits } from "@daohaus/utils";
import { getNetworkName } from "@daohaus/keychain-utils";
import { MolochV3Membership } from "@daohaus/utils";
import {
  Badge,
  Bold,
  ParLg,
  ParMd,
  ParXl,
  ProfileAvatar,
  Tag,
  Tooltip,
} from "@daohaus/ui";
import { ButtonRouterLink } from "../ButtonRouterLink";
import { ListDaosQueryResDaos } from "@daohaus/moloch-v3-data";
import { useDHConnect } from "@daohaus/connect";
import { YeeterItem } from "../../utils/types";
import { useDaoData } from "@daohaus/moloch-v3-hooks";
import { useYeeter } from "../../hooks/useYeeter";
import { YeeterStatusTag } from "../YeeterStatusTag";

const StyledDaoCard = styled.div`
  background-color: ${(props) => props.theme.secondary.step2};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 34rem;
  min-width: 26rem;
  border: 1px solid ${(props) => props.theme.secondary.step2};
  padding: 2.4rem;
  border-radius: ${(props) => props.theme.card.radius};
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
        {dao?.name ? charLimit(dao.name, 14) : charLimit(yeeter.id, 14)}{" "}
      </FatParLg>
      <div className="stats-box">
        <ParLg>
          <Bold>{toWholeUnits(yeeter.balance)} Eth Raised</Bold>{" "}
        </ParLg>
      </div>
      <div className="tag-box">
        <YeeterStatusTag yeeter={yeeter} fontSize="sm" />
        {/* <Tag tagColor="red">{`on ${getNetworkName(chainId)}`}</Tag> */}
      </div>
      <ButtonRouterLink
        size="lg"
        color="secondary"
        to={`/molochv3/${chainId}/${yeeter.dao.id}`}
      >
        Go
      </ButtonRouterLink>
    </StyledDaoCard>
  );
};
