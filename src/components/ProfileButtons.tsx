import styled from "styled-components";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { ButtonRouterLink } from "./ButtonRouterLink";
import { DataMd, Link, ParXs, widthQuery } from "@daohaus/ui";
import { useDaoMember } from "@daohaus/moloch-v3-hooks";
import { YeeterMetadata } from "../utils/types";
import { useMemo } from "react";

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  gap: 1rem;

  .editLink {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 1.5rem;
  }

  @media ${widthQuery.sm} {
    align-items: center;
  }
`;

const BoldDataMd = styled(DataMd)`
  font-weight: 900;
`;

type LinkObj = {
  url: string;
  label: string;
};

export const ProfileButtons = ({
  daoChain,
  daoId,
  address,
  metadata,
}: {
  daoChain: ValidNetwork;
  daoId: string;
  address?: string;
  metadata: YeeterMetadata;
}) => {
  const { member } = useDaoMember({ daoChain, daoId, memberAddress: address });

  const linkList = useMemo(() => {
    if (!metadata || !metadata.links) return;

    const validLinks = [
      {
        url: `https://admin.daohaus.club/#/molochv3/${daoChain}/${daoId}`,
        label: "DAO",
      },
    ];

    return metadata.links.reduce(
      (links: LinkObj[], link: string): LinkObj[] => {
        const parsedLink = JSON.parse(link);
        if (!parsedLink.url) return links;
        links = [...links, parsedLink];
        return links;
      },
      validLinks
    );
  }, [metadata, daoChain, daoId]);

  return (
    <>
      <ButtonRow>
        <BoldDataMd>Project Links</BoldDataMd>
        {linkList &&
          linkList.map((linkObj: LinkObj) => {
            return (
              <Link href={linkObj.url} type="external" key={linkObj.label}>
                {linkObj.label}
              </Link>
            );
          })}

        {member && Number(member.shares) > 0 && (
          <div className="editLink">
            <ButtonRouterLink to="update" variant="link" size="md">
              <ParXs color="primary">Edit Yeet Details</ParXs>
            </ButtonRouterLink>
          </div>
        )}
      </ButtonRow>
    </>
  );
};
