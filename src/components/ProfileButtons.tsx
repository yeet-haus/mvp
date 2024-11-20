import styled from "styled-components";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { DataMd, Link, ParXs, widthQuery } from "@daohaus/ui";
import { useDaoMember } from "@daohaus/moloch-v3-hooks";
import { YeeterMetadata } from "../utils/types";
import { useMemo } from "react";
import { deathBlack, jaundiceYellow, nipplePink } from "../theme/colors";
import { YeetButtonRouterLink } from "./layout/Shared";
import { RiExternalLinkLine } from "react-icons/ri";

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

const ButtonLink = styled.a`
  background-color: ${nipplePink.step1};
  color: ${deathBlack.step1};
  height: 5rem;
  min-width: 250px;

  padding: 1.2rem;
  border-radius: 200px;
  border: 1px solid black;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: 700;
  box-shadow: 3px 3px ${deathBlack.step1};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-decoration: none;

  line-height: 1.5;
  &:hover {
    background-color: ${nipplePink.step2};
  }
`;

const CardButton = styled(YeetButtonRouterLink)`
  background-color: ${jaundiceYellow.step1};
  color: ${deathBlack.step1};
  letter-spacing: 1.8px;
  outline: none;
  text-decoration: none;
  transition: 0.2s all;
  width: fit-content;
  font-size: ${({ theme }) => theme.font.size.lg};

  height: 6rem;
  min-width: 10.7rem;
  padding: 1.5rem;

  padding: 1.2rem;
  border-radius: 200px;
  border: 1px solid black;
  box-shadow: 3px 3px ${deathBlack.step1};

  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${jaundiceYellow.step2};
  }
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

    const validLinks: LinkObj[] = [];

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
        <BoldDataMd>PROJECT LINKS</BoldDataMd>
        <ButtonLink
          href={`https://admin.daohaus.club/#/molochv3/${daoChain}/${daoId}`}
          type="external"
          target="_blank"
          key={daoId}
        >
          DAO
          <RiExternalLinkLine />
        </ButtonLink>
        {linkList &&
          linkList.map((linkObj: LinkObj) => {
            return (
              <ButtonLink
                href={linkObj.url}
                type="external"
                target="_blank"
                key={linkObj.label}
              >
                {linkObj.label}
                <RiExternalLinkLine />
              </ButtonLink>
            );
          })}

        {member && Number(member.shares) > 0 && (
          <div className="editLink">
            <CardButton to="update" size="sm">
              <ParXs color="primary">Edit Yeet Details</ParXs>
            </CardButton>
          </div>
        )}
      </ButtonRow>
    </>
  );
};
