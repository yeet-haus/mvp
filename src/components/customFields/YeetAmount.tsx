import {
  ignoreEmptyVal,
  isNumberish,
  toBaseUnits,
  ValidateField,
} from "@daohaus/utils";
import { Buildable, Field, WrappedInput } from "@daohaus/ui";
import { RegisterOptions } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useCurrentYeeter } from "../../contexts/CurrentYeeterContext";
import { useYeeter } from "../../hooks/useYeeter";
import { ValidNetwork } from "@daohaus/keychain-utils";
import { formatMinContribution } from "../../utils/yeetDataHelpers";

export const YeetAmount = (props: Buildable<Field>) => {
  const { daoId, daoChain } = useParams();
  const { shamanAddress } = useCurrentYeeter();

  const { yeeter } = useYeeter({
    chainId: daoChain as ValidNetwork,
    daoId,
    shamanAddress,
  });
  const newRules: RegisterOptions = {
    ...props.rules,
    setValueAs: (val: string) => (isNumberish(val) ? toBaseUnits(val) : val),
    validate: (val) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ignoreEmptyVal(val, (val: any) => {
        if (!yeeter) return "invalid form placement";

        const validNumber = ValidateField.number(val);
        if (validNumber === true) {
          return Number(yeeter.minTribute) <= Number(val)
            ? true
            : `Must yeet alteast ${formatMinContribution(yeeter)} ETH`;
        }
        return validNumber;
      }),
  };

  return <WrappedInput {...props} rules={newRules} defaultValue="0" />;
};
