import React, { useMemo } from "react";
import { H2, SingleColumnLayout } from "@daohaus/ui";
import { FormBuilder } from "@daohaus/form-builder";
import { APP_FORM } from "../legos/forms";
import { AppFieldLookup } from "../legos/legoConfig";
import { useNavigate } from "react-router-dom";
import { useDHConnect } from "@daohaus/connect";
import { DEFAULT_YEETER_VALUES, targetNetworks } from "../utils/constants";

const now = new Date().getTime() / 1000;
const then = now + 604800;

export const Launch = () => {
  const navigate = useNavigate();
  const { chainId } = useDHConnect();

  const validNetworkId = useMemo(() => {
    if (!chainId) return;
    return targetNetworks[chainId];
  }, [chainId]);

  const onFormComplete = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    result: any
  ) => {
    const daoAddress = result?.data?.transaction?.daoAddress;
    navigate(`/success/${daoAddress}`);
  };
  return (
    <FormBuilder
      form={APP_FORM.SUMMON_YEETER}
      customFields={AppFieldLookup}
      targetNetwork={validNetworkId && chainId}
      submitButtonText="LET'S FUUUCKING GO"
      lifeCycleFns={{
        onPollSuccess: (result) => {
          onFormComplete(result);
        },
      }}
      defaultValues={{
        startTime: now.toFixed(),
        endTime: then.toFixed(),
        lootPerYeet: DEFAULT_YEETER_VALUES.lootPerYeet,
      }}
    />
  );
};
