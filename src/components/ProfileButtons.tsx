import styled from "styled-components";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { ButtonRouterLink } from "./ButtonRouterLink";
import { Link } from "@daohaus/ui";
import { useDHConnect } from "@daohaus/connect";
import { useDaoMember } from "@daohaus/moloch-v3-hooks";

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
  margin-top: 1rem;
`;

export const ProfileButtons = ({
  daoChain,
  daoId,
  address,
}: {
  daoChain: ValidNetwork;
  daoId: string;
  address?: string;
}) => {
  const { member } = useDaoMember({ daoChain, daoId, memberAddress: address });

  return (
    <>
      <ButtonRow>
        <Link
          href={`https://admin.daohaus.club/#/molochv3/${daoChain}/${daoId}`}
          type="external"
        >
          The DAO behind the Yeet
        </Link>
        {member && Number(member.shares) > 0 && (
          <ButtonRouterLink to="update" variant="link" size="md">
            Edit Yeet Details
          </ButtonRouterLink>
        )}
      </ButtonRow>
    </>
  );
};
