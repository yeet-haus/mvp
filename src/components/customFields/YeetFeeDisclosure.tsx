import { Buildable, Field, DataXs, DataSm } from "@daohaus/ui";

import { FEE_DISCLOSURE } from "../../utils/constants";

export const YeetFeeDisclosure = (props: Buildable<Field>) => {
  return (
    <>
      <DataXs>*{FEE_DISCLOSURE}</DataXs>
    </>
  );
};
