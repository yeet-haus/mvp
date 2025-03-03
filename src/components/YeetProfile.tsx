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
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  /* width: 100%; */
  @media ${widthQuery.md} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const YeetName = styled(H3)`
  font-size: 4rem;
  font-weight: 900;
  line-height: 3.8rem;
  width: 100%;
  word-wrap: break-word;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .projectDetails {
    font-size: 16px;
    font-weight: 600;
    margin-top: 1rem;

    ol {
      line-height: 1.75;
    }
    p {
      margin-bottom: 1rem;
    }
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
        <YeetName>{dao.name?.toUpperCase()}</YeetName>
      </ProfileRow>
      <Collapser
        title="WHAT ARE WE FUNDING?"
        content={
          <DetailsContainer>
            <div>
              <BoldDataMd>DESCRIPTION</BoldDataMd>
              <ReactMarkdown className="projectDetails">
                {metadata.projectDetails || "?????"}
              </ReactMarkdown>
            </div>
            <div>
              <BoldDataMd>MISSION</BoldDataMd>

              <ReactMarkdown className="projectDetails mission">
                {metadata.missionStatement || "?????"}
              </ReactMarkdown>
            </div>
            <ProfileButtons
              daoChain={daoChain}
              daoId={dao.id}
              address={address}
              metadata={metadata}
              shamanAddress={shamanAddress}
            />
          </DetailsContainer>
        }
      />
    </ProfileContainer>
  );
};
