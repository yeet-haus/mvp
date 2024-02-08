import { H4, ProfileAvatar } from "@daohaus/ui";
import styled from "styled-components";
import { YeetH4 } from "./layout/Shared";

const DaoNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
`;

const DaoProfileAvatar = styled(ProfileAvatar)`
  width: 4.8rem;
  height: 4.8rem;
`;

type HAvatar = {
  name: string;
  address: string;
  imgUrl?: string;
};
export const HeaderAvatar = ({ name, imgUrl, address }: HAvatar) => {
  return (
    <DaoNavContainer>
      <DaoProfileAvatar image={imgUrl} address={address} />
      <YeetH4>{name}</YeetH4>
    </DaoNavContainer>
  );
};
