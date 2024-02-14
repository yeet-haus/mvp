import React, { useEffect, useState } from "react";
import { Buildable, Field, DataMd } from "@daohaus/ui";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { nipplePink } from "../../theme/colors";

const WarningBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 200px;
  padding: 0.5rem;
  background-color: ${nipplePink.step1};
`;

export const DateWarning = (props: Buildable<Field>) => {
  const { watch } = useFormContext();
  const [error, setError] = useState<string | undefined>();

  const endTime = watch("endTime");
  const startTime = watch("startTime");

  useEffect(() => {
    if (Number(endTime) < Number(startTime)) {
      setError("** WARNING The START DATE is after the END DATE **");
    }
  }, [endTime, startTime]);

  if (!error) return null;

  return (
    <WarningBox>
      <DataMd>{error}</DataMd>
    </WarningBox>
  );
};
