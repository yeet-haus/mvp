import { formatValueTo, fromWei } from "@daohaus/utils";
import { YeeterItem } from "./types";

export const calcProgressPerc = (a: string, b: string) => {
  const div = Number(a) / Number(b);
  return Number(div) * 100;
};

export const calcDurationPerc = (start: string, end: string) => {
  const now = new Date().getTime() / 1000;
  const yeetDuration = Number(end) - Number(start);
  const currentDuration = Number(end) - Number(now);
  const durationUsed = yeetDuration - currentDuration;

  return (durationUsed / yeetDuration) * 100;
};

export const calcYeetIsActive = (yeeter: YeeterItem) => {
  const now = new Date().getTime() / 1000;

  return Number(yeeter.startTime) < now && Number(yeeter.endTime) > now;
};

export const calcYeetIsEnded = (yeeter: YeeterItem) => {
  const now = new Date().getTime() / 1000;

  return Number(yeeter.endTime) < now;
};

export const calcYeetIsComingSoon = (yeeter: YeeterItem) => {
  const now = new Date().getTime() / 1000;

  return Number(yeeter.startTime) > now;
};

export const calcYeetIsFull = (yeeter: YeeterItem) => {
  return Number(yeeter.balance) >= Number(yeeter.goal);
};

export const formatMinContribution = (yeeter: YeeterItem) => {
  return formatValueTo({
    value: fromWei(yeeter.minTribute),
    decimals: 5,
    format: "number",
  });
};

export const formatLootForMin = (yeeter: YeeterItem) => {
  const loot = BigInt(yeeter.minTribute) * BigInt(yeeter.multiplier);
  return formatValueTo({
    value: fromWei(loot.toString()),
    decimals: 5,
    format: "number",
  });
};
