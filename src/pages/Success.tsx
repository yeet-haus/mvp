import { useDHConnect } from "@daohaus/connect";
import { generateExplorerLink } from "@daohaus/keychain-utils";
import { Button, H1, Link, SingleColumnLayout, widthQuery } from "@daohaus/ui";
import { useMemo } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
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

const StyledYeetH1 = styled(YeetH1)`
  margin-top: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
  width: 50rem;

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
          <ShadowButton
            color="primary"
            fullWidth
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <LinkButton to={`/molochV3/${chainId}/${daoId}/`}>
              VIEW PROJECT
            </LinkButton>
          </ShadowButton>
          <ShadowButton
            color="secondary"
            fullWidth
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <ExternalLinkButton
              href={explorerLink}
              showExternalIcon={false}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              VIEW TXN
            </ExternalLinkButton>
          </ShadowButton>
          {/* <Button color="secondary" fullWidth>
            <LinkButton to={`${chainId}/${daoId}/`}>SHARE</LinkButton>
          </Button> */}
        </ButtonContainer>
      </Contain>
    </SingleColumnLayout>
  );
};
