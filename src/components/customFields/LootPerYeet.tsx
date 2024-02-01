import { useFormContext } from "react-hook-form";

import { Buildable, Field, FieldWrapper, Input, ParLg } from "@daohaus/ui";
import { isNumberString, isNumberish, toBaseUnits } from "@daohaus/utils";
import { useEffect } from "react";

export const LootPerYeet = (props: Buildable<Field>) => {
  const { watch, register, setValue } = useFormContext();

  const minTribute = watch("minTribute");
  const lootPerYeet = watch("lootPerYeet");

  useEffect(() => {
    if (
      !lootPerYeet ||
      !lootPerYeet ||
      !isNumberish(minTribute) ||
      !isNumberString(lootPerYeet)
    )
      return;
    const multiplier = Number(toBaseUnits(lootPerYeet)) / Number(minTribute);
    setValue("multiplier", multiplier);
  }, [minTribute, lootPerYeet]);

  return (
    <FieldWrapper
      label={props.label}
      loading={props.loading}
      info={props.info}
      error={props.error}
      success={props.success}
      warning={props.warning}
      helperText={props.helperText}
      hidden={props.hidden}
      long={props.long}
      full={props.full}
      address={props.address}
      rightAddon={props.rightAddon}
      id={props.id}
      rules={props.rules}
    >
      <Input
        {...register(props.id, props.rules)}
        id={props.id}
        long={props.long}
        full={props.full}
        icon={props.icon}
        success={props.success}
        warning={props.warning}
        error={props.error}
        number={props.number}
        address={props.address}
        className={props.className}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
        disabled={props.disabled}
        hidden={props.hidden}
      />
    </FieldWrapper>
  );
};
