import { useDHConnect } from "@daohaus/connect";
import { generateExplorerLink } from "@daohaus/keychain-utils";
import { Button, H1, Link, SingleColumnLayout } from "@daohaus/ui";
import { useMemo } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { YeetH1 } from "../components/layout/Shared";

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

const StyledYeetH1 = styled(YeetH1)`
  margin-top: 3rem;
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

export const Success = () => {
  const { daoId, txHash } = useParams();
  const { chainId } = useDHConnect();

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
        <StyledYeetH1>AAAAAH SHIIIIIIIIT YOU MADE A YEETER!</StyledYeetH1>
        <ButtonContainer>
          <Button color="primary" fullWidth>
            <LinkButton to={`/molochV3/${chainId}/${daoId}/`}>
              View Project
            </LinkButton>
          </Button>
          <Button color="secondary" fullWidth>
            <ExternalLinkButton href={explorerLink}>
              View Txn
            </ExternalLinkButton>
          </Button>
          {/* <Button color="secondary" fullWidth>
            <LinkButton to={`${chainId}/${daoId}/`}>SHARE</LinkButton>
          </Button> */}
        </ButtonContainer>
      </Contain>
    </SingleColumnLayout>
  );
};
