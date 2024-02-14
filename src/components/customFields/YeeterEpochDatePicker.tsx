import React, { forwardRef, useEffect, useState } from "react";

import {
  Buildable,
  Button,
  ErrorMessage,
  Field,
  FieldWrapper,
} from "@daohaus/ui";
import { useFormContext } from "react-hook-form";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { createGlobalStyle } from "styled-components";

const DatePickerWrapperStylesLg = createGlobalStyle`
  .react-datepicker {
    font-size: 2rem;
    font-family: inherit;
  }
  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    width: 5rem;
    height: 3rem;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box, .react-datepicker__time-container {
    width: 150px;
    height: 200px;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    height: 200px;
  }
`;

interface Props {
  onClick?: () => void;
  value?: string | number;
}

/**
 * @name EpochDatePicker
 * @param props
 * @note props.className === "lg" will show a larger popper
 * @returns
 * @example <EpochDatePicker id="startDate" label="Start Date" />
 * @note this is to be used with form builder.  It will return the epoch time in seconds
 * fields: { ...FIELD.EPOCH_DATE_FIELD, id: "endDate", label: "End Date",className: "lg"},
 * @example FIELD { EPOCH_DATE_FIELD: {id: "epochDate",type: "epochDateField",label: "Epoch Date Field",}},
 */

export const YeeterEpochDatePicker = (props: Buildable<Field>) => {
  const { setValue, watch } = useFormContext();
  const [startDate, setStartDate] = useState(new Date());

  const endTime = watch("endTime");
  const startTime = watch("startTime");

  useEffect(() => {
    const dateObject =
      props.id === "startTime"
        ? new Date(Number(startTime) * 1000)
        : new Date(Number(endTime) * 1000);

    setStartDate(dateObject);
  }, [endTime, startTime]);

  const handleChange = (date: Date) => {
    setStartDate(date);
    const val = Number(date) / 1000;
    setValue(props.id, val);
  };

  const CustomInput = forwardRef<HTMLButtonElement, Props>(
    ({ value, onClick }, ref) => (
      <Button className="custom-button-input" onClick={onClick} ref={ref}>
        {value}
      </Button>
    )
  );

  return (
    <FieldWrapper
      {...props}
      id={props.id}
      label={props?.label}
      helperText={props?.helperText}
      rules={props?.rules}
    >
      <DatePicker
        id={props.id}
        selected={startDate}
        onChange={(date: Date) => handleChange(date)}
        showTimeSelect
        customInput={<CustomInput />}
        wrapperClassName={props?.className}
        dateFormat="Pp"
      />
      {props?.className === "lg" && <DatePickerWrapperStylesLg />}
    </FieldWrapper>
  );
};
