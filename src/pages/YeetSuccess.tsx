import { useDHConnect } from "@daohaus/connect";
import { generateExplorerLink } from "@daohaus/keychain-utils";
import { Button, H1, SingleColumnLayout, Link } from "@daohaus/ui";
import { fromWei } from "@daohaus/utils";
import { useMemo } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import styled from "styled-components";

const Contain = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const StyledH1 = styled(H1)`
  font-weight: 900;
  font-size: 10rem;
  line-height: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
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
  &:hover {
    text-decoration: none;
  }
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
        <StyledH1>SOMEONE YEETED & RECEIVED {formattedLoot} LOOT!</StyledH1>
        <ButtonContainer>
          <Button color="secondary" fullWidth>
            <LinkButton to={`/molochV3/${chainId}/${daoId}/`}>
              Back to Project
            </LinkButton>
          </Button>
          <Button color="secondary" fullWidth>
            <LinkButton
              to={`https://admin.daohaus.club/#/molochv3/${chainId}/${daoId}`}
            >
              Look at the Project's DAO
            </LinkButton>
          </Button>
          <Button color="secondary" fullWidth>
            <ExternalLinkButton href={explorerLink}>
              View Txn
            </ExternalLinkButton>
          </Button>
        </ButtonContainer>
      </Contain>
    </SingleColumnLayout>
  );
};
