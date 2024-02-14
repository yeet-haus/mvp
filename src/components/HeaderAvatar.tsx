import { H4, ProfileAvatar } from "@daohaus/ui";
import styled from "styled-components";
import { YeetH4 } from "./layout/Shared";
import { banalityBeige } from "../theme/colors";

const DaoNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
`;

const DaoProfileAvatar = styled(ProfileAvatar)`
  width: 4.8rem;
  height: 4.8rem;
`;

const StyledH4 = styled(YeetH4)`
  color: ${banalityBeige.step1};
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
      <StyledH4>{name?.toUpperCase()}</StyledH4>
    </DaoNavContainer>
  );
};
