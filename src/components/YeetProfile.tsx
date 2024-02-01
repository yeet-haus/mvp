import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import {
  DataMd,
  H3,
  ParSm,
  ParXs,
  ProfileAvatar,
  widthQuery,
} from "@daohaus/ui";
import { MolochV3Dao } from "@daohaus/moloch-v3-data";
import { YeeterMetadata } from "../utils/types";
import { ValidNetwork } from "@daohaus/keychain-utils";

import { Collapser } from "./Collapser";
import { ProfileButtons } from "./ProfileButtons";
import { useDHConnect } from "@daohaus/connect";

const DaoProfileAvatar = styled(ProfileAvatar)`
  width: 18rem;
  height: 18rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  @media ${widthQuery.md} {
    justify-content: center;
    text-align: center;
  }
`;

const YeetName = styled(H3)`
  font-size: 5rem;
  font-weight: 900;
  line-height: 6rem;
  width: 65%;
  word-wrap: break-word;

  @media ${widthQuery.md} {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .projectDetails {
    margin-top: 1rem;
  }
  .mission {
    margin-top: 1rem;
  }
`;

const BoldDataMd = styled(DataMd)`
  font-weight: 900;
`;

export const YeetProfile = ({
  dao,
  metadata,
  shamanAddress,
  daoChain,
}: {
  dao: MolochV3Dao;
  metadata: YeeterMetadata;
  shamanAddress: string;
  daoChain: ValidNetwork;
}) => {
  const { address } = useDHConnect();

  return (
    <ProfileContainer>
      <ProfileRow>
        <DaoProfileAvatar
          address={shamanAddress}
          image={metadata.icon || dao.avatarImg}
        />
        <YeetName>{dao.name}</YeetName>
      </ProfileRow>
      <Collapser
        title="What are we funding?"
        content={
          <DetailsContainer>
            <div>
              <BoldDataMd>Project Details</BoldDataMd>
              <ReactMarkdown className="projectDetails">
                {metadata.projectDetails || "?????"}
              </ReactMarkdown>
            </div>
            <div>
              <BoldDataMd>Mission</BoldDataMd>

              <ReactMarkdown className="mission">
                {metadata.missionStatement || "?????"}
              </ReactMarkdown>
            </div>
            <ProfileButtons
              daoChain={daoChain}
              daoId={dao.id}
              address={address}
              metadata={metadata}
            />
          </DetailsContainer>
        }
      />
    </ProfileContainer>
  );
};
