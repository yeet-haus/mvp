import { DataMd, Link } from "@daohaus/ui";
import { DaoProfileLink, MolochV3Dao } from "@daohaus/moloch-v3-data";
import { YeeterMetadata } from "../utils/types";
import { ValidNetwork } from "@daohaus/keychain-utils";
import styled from "styled-components";
import {
  RiArticleLine,
  RiDiscordFill,
  RiGithubFill,
  RiLinksFill,
  RiTelegramFill,
  RiTwitterFill,
} from "react-icons/ri/index.js";
import { charLimit } from "@daohaus/utils";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const LinkContents = styled.div`
  display: flex;
  align-items: self-start;
  gap: 0.5rem;
`;

const IconLinkContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const MetadataLinkIcons: { [key: string]: React.ReactNode } = {
  Github: <RiGithubFill size={"2.5rem"} />,
  Discord: <RiDiscordFill size={"2.5rem"} />,
  Twitter: <RiTwitterFill size={"2.5rem"} />,
  Telegram: <RiTelegramFill size={"2.5rem"} />,
  Blog: <RiArticleLine size={"2.5rem"} />,
  default: <RiLinksFill size={"2.5rem"} />,
};

const daoProfileHasLinks = (
  links: MolochV3Dao["links"]
): boolean | undefined => {
  return links?.some((link: DaoProfileLink) => link.url);
};

const isPredefinedSettingsLink = (link: DaoProfileLink) => {
  return (
    link.label &&
    ["Github", "Discord", "Telegram", "Twitter", "Blog", "Web"].indexOf(
      link.label
    ) >= 0
  );
};

type LinkListsProps = {
  links?: DaoProfileLink[];
};

const OverviewIconLinkList = ({ links }: LinkListsProps) => {
  if (!links) {
    return null;
  }
  return (
    <IconLinkContainer>
      {links
        .filter((link) => link.url && isPredefinedSettingsLink(link))
        .map((link, i) => (
          <Link showExternalIcon={false} href={link.url} key={i}>
            <LinkContents>
              {(link.label && MetadataLinkIcons[link.label]) ||
                MetadataLinkIcons["default"]}
            </LinkContents>
          </Link>
        ))}
    </IconLinkContainer>
  );
};

const OverviewLinkList = ({ links }: LinkListsProps) => {
  if (!links) {
    return null;
  }
  return (
    <LinkContainer>
      {links
        .filter((link) => link.url && !isPredefinedSettingsLink(link))
        .map((link, i) => (
          <Link showExternalIcon={false} href={link.url} key={i}>
            <LinkContents>
              {(link.label && MetadataLinkIcons[link.label]) ||
                MetadataLinkIcons["default"]}
              <DataMd>{charLimit(link.label, 45)}</DataMd>
            </LinkContents>
          </Link>
        ))}
    </LinkContainer>
  );
};

export const YeetProjectLinks = ({
  dao,
  metadata,
}: {
  dao: MolochV3Dao;
  metadata: YeeterMetadata;
  shamanAddress: string;
  daoChain: ValidNetwork;
}) => {
  if (daoProfileHasLinks(dao.links)) return null;

  return (
    <>
      {/* <OverviewLinkList links={metadata.links} /> */}
      {/* <OverviewIconLinkList links={metadata.links} /> */}
    </>
  );
};
