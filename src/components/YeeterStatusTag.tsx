import { YeeterItem } from "../utils/types";
import {
  calcYeetIsActive,
  calcYeetIsComingSoon,
  calcYeetIsEnded,
  calcYeetIsFull,
} from "../utils/yeetDataHelpers";
import { Tag } from "./hub/Tag";

export const YeeterStatusTag = ({
  yeeter,
  fontSize,
}: {
  yeeter: YeeterItem;
  fontSize: string;
}) => {
  const isEnded = calcYeetIsEnded(yeeter);
  const isFull = calcYeetIsFull(yeeter);

  if (isEnded || isFull) {
    return <Tag fontSize={fontSize}>Yeet Complete</Tag>;
  }

  const isComing = calcYeetIsComingSoon(yeeter);
  if (isComing) {
    return <Tag fontSize={fontSize}>Coming Soon</Tag>;
  }

  const isActive = calcYeetIsActive(yeeter);
  if (isActive) {
    return <Tag fontSize={fontSize}>Yeeting Now!</Tag>;
  }

  return null;
};
