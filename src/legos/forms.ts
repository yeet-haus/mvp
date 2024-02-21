import { APP_TX } from "./tx";
import { CustomFormLego } from "./legoConfig";
import { FIELD } from "@daohaus/moloch-v3-legos";

export const APP_FORM: Record<string, CustomFormLego> = {
  YEET_FORM: {
    id: "YEET",
    requiredFields: {
      amount: true,
    },
    log: true,
    tx: APP_TX.YEET,
    fields: [
      {
        id: "yeetHelper",
        type: "yeetHelper",
        label: "GET",
      },
      {
        id: "yeetSplit",
        type: "splitColumn",
        rows: [
          {
            rowId: "row1",
            left: {
              id: "amount",
              type: "yeetAmount",
              label: "YEET",
              expectType: "number",
            },
            right: {
              id: "yeetLoot",
              type: "yeetLoot",
            },
          },
        ],
      },
      {
        id: "message",
        type: "markdownField",
        label: "MESSAGE",
        placeholder: "yeet yeet yeet",
      },
    ],
  },
  SUMMON_YEETER: {
    id: "SUMMON_YEETER",
    requiredFields: {
      daoName: true,
      goal: true,
      startTime: true,
      endTime: true,
      minTribute: true,
      members: true,
      lootPerYeet: true,
    },
    log: true,
    tx: APP_TX.YEETER_SUMMON,
    fields: [
      {
        id: "daoName",
        type: "input",
        label: "NAME",
        placeholder: "Yeet Yeet",
      },
      {
        id: "members",
        type: "membersInput",
        label: "TEAM MEMBERS",
        placeholder: "Yeet Yeet",
        info: "Input member list with member address on each line.",
      },
      {
        id: "times",
        type: "splitColumn",
        rows: [
          {
            rowId: "row1",
            left: {
              id: "startTime",
              type: "yeetDate",
              label: "START TIME",
              expectType: "number",
            },
            right: {
              id: "endTime",
              type: "yeetDate",
              label: "END TIME",
              expectType: "number",
            },
          },
        ],
      },
      {
        id: "goal",
        type: "labeledToWei",
        label: "FUNDRAISING GOAL",
        placeholder: "69,420",
        expectType: "number",
      },
      {
        id: "tribute",
        type: "splitColumn",
        rows: [
          {
            rowId: "row1",
            left: {
              id: "minTribute",
              type: "labeledToWei",
              label: "MINIMUM YEET",
              placeholder: "0.01",
              expectType: "number",
              rules: {
                min: {
                  value: 10000000000000,
                  message: "Must be .00001 or more",
                },
              },
            },
            right: {
              id: "lootPerYeet",
              type: "lootPerYeetMod",
              label: "LOOT PER MINIMUM YEET",
              expectType: "number",
              rules: {
                min: {
                  value: 1,
                  message: "Must be 1 or more",
                },
              },
            },
          },
        ],
      },
      {
        id: "warning",
        type: "dateWarning",
      },
    ],
  },
  METADATA_SETTINGS: {
    id: "METADATA_SETTINGS",
    tx: APP_TX.UPDATE_METADATA_SETTINGS,
    fields: [
      {
        ...FIELD.DESCRIPTION,
        id: "projectDetails",
        label: "PROJECT DETAILS",
      },
      {
        ...FIELD.DESCRIPTION,
        id: "missionStatement",
        label: "MISSION STATEMENT",
      },
      { ...FIELD.LINK, id: "icon", label: "PROJECT ICON" },
      {
        id: "links",
        type: "formSegment",
        title: "ADD LINKS",
        fields: [
          { ...FIELD.METADATA_LINK, id: "web", label: "WEBSITE" },
          { ...FIELD.LINK, id: "discord", label: "DISCORD" },
          { ...FIELD.METADATA_LINK, id: "github", label: "GITHUB" },
          { ...FIELD.METADATA_LINK, id: "blog", label: "BLOG" },
          { ...FIELD.METADATA_LINK, id: "telegram", label: "TELEGRAM" },
          { ...FIELD.METADATA_LINK, id: "twitter", label: "TWITTER" },
          { ...FIELD.METADATA_LINK, id: "custom1", label: "CUSTOM 1" },
          { ...FIELD.METADATA_LINK, id: "custom2", label: "CUSTOM 2" },
          { ...FIELD.METADATA_LINK, id: "custom3", label: "CUSTOM 3" },
        ],
      },
    ],
  },
};
