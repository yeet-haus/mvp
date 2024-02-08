import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormBuilder } from "@daohaus/form-builder";
import { MolochFields } from "@daohaus/moloch-v3-fields";

import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";
import { useCurrentDao } from "@daohaus/moloch-v3-hooks";
import { useCurrentYeeter } from "../contexts/CurrentYeeterContext";

import { FatOverviewCard, YeetH1 } from "../components/layout/Shared";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  text-align: center;
`;

export const Yeet = () => {
  const navigate = useNavigate();
  const { daoChain } = useCurrentDao();
  const { shamanAddress } = useCurrentYeeter();

  const onFormComplete = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any,
    txReceipt: any
  ) => {
    console.log("txReceipt", txReceipt);
    navigate(
      `success/${result?.yeets[0]?.shares}/${txReceipt.transactionHash}`
    );
  };

  if (!shamanAddress) return null;

  return (
    <PageContainer>
      <FatOverviewCard>
        <YeetH1>YEET!</YeetH1>
        <FormBuilder
          form={APP_FORM.YEET_FORM}
          targetNetwork={daoChain}
          customFields={{ ...MolochFields, ...AppFieldLookup }}
          lifeCycleFns={{
            onPollSuccess: (result, txReceipt) => {
              onFormComplete(result, txReceipt);
            },
          }}
        />
      </FatOverviewCard>
    </PageContainer>
  );
};
