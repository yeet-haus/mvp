import { useDHConnect } from "@daohaus/connect";
import { generateExplorerLink } from "@daohaus/keychain-utils";
import { Button, H1, SingleColumnLayout, Link, widthQuery } from "@daohaus/ui";
import { fromWei } from "@daohaus/utils";
import { useMemo } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { YeetH1 } from "../components/layout/Shared";
import { deathBlack } from "../theme/colors";

const Contain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
  width: 50rem;

  @media ${widthQuery.xs} {
    width: 25rem;
  }
`;

const ShadowButton = styled(Button)`
  box-shadow: 5px 5px ${deathBlack.step1};
`;

const LinkButton = styled(RouterLink)`
  text-decoration: none;
  color: unset;

  &:hover {
    text-decoration: none;
  }
`;

const ExternalLinkButton = styled(Link)`
  text-decoration: none;
  color: unset;
  font-weight: 800;

  &:hover {
    text-decoration: none;
  }
`;

const StyledYeetH1 = styled(YeetH1)`
  margin-top: 3rem;
`;

export const YeetSuccess = () => {
  const { daoId, lootReceived, txHash } = useParams();
  const { chainId } = useDHConnect();

  const formattedLoot = useMemo(() => {
    if (!lootReceived) return "SOME";

    return fromWei(lootReceived);
  }, [lootReceived]);

  const explorerLink = useMemo(() => {
    if (chainId && txHash) {
      return generateExplorerLink({
        chainId,
        address: txHash,
        type: "tx",
      });
    }
  }, [txHash, chainId]);

  return (
    <SingleColumnLayout>
      <Contain>
        <StyledYeetH1>
          SOMEONE YEETED & RECEIVED {formattedLoot} LOOT!
        </StyledYeetH1>
        <ButtonContainer>
          <ShadowButton color="secondary" fullWidth>
            <LinkButton to={`/molochV3/${chainId}/${daoId}/`}>
              BACK TO PROJECT
            </LinkButton>
          </ShadowButton>
          <ShadowButton color="secondary" fullWidth>
            <ExternalLinkButton
              href={`https://admin.daohaus.club/#/molochv3/${chainId}/${daoId}`}
              showExternalIcon={false}
            >
              VISIT THE DAO
            </ExternalLinkButton>
          </ShadowButton>
          <ShadowButton color="secondary" fullWidth>
            <ExternalLinkButton href={explorerLink} showExternalIcon={false}>
              VIEW TXN
            </ExternalLinkButton>
          </ShadowButton>
        </ButtonContainer>
      </Contain>
    </SingleColumnLayout>
  );
};
