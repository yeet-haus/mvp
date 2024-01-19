import { FormBuilder } from "@daohaus/form-builder";
import { MolochFields } from "@daohaus/moloch-v3-fields";

import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";
import { useCurrentDao } from "@daohaus/moloch-v3-hooks";
import { useCurrentYeeter } from "../contexts/CurrentYeeterContext";
import { useNavigate } from "react-router-dom";

export const Yeet = () => {
  const navigate = useNavigate();
  const { daoChain } = useCurrentDao();
  const { shamanAddress } = useCurrentYeeter();

  const onFormComplete = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any
  ) => {
    navigate(`success/${result?.yeets[0]?.shares}`);
  };

  if (!shamanAddress) return null;

  return (
    <FormBuilder
      form={APP_FORM.YEET_FORM}
      targetNetwork={daoChain}
      customFields={{ ...MolochFields, ...AppFieldLookup }}
      lifeCycleFns={{
        onPollSuccess: (result) => {
          onFormComplete(result);
        },
      }}
    />
  );
};
