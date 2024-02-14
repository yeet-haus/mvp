import { MolochFields } from "@daohaus/moloch-v3-fields";
import { FieldLegoBase, FormLegoBase } from "@daohaus/utils";
import { COMMON_FORMS, PROPOSAL_FORMS } from "@daohaus/moloch-v3-legos";

import { APP_FORM } from "./forms";
import { TestField } from "../components/customFields/fieldTest";
import { MembersInput } from "../components/customFields/MembersInput";
import { LootPerYeet } from "../components/customFields/LootPerYeet";
import { YeetHelper } from "../components/customFields/YeetHelper";
import { YeetLoot } from "../components/customFields/YeetLoot";
import { YeetAmount } from "../components/customFields/YeetAmount";
import { YeeterEpochDatePicker } from "../components/customFields/YeeterEpochDatePicker";
import { DateWarning } from "../components/customFields/DateWarning";

export const AppFieldLookup = {
  ...MolochFields,
  testField: TestField,
  membersInput: MembersInput,
  lootPerYeet: LootPerYeet,
  yeetHelper: YeetHelper,
  yeetLoot: YeetLoot,
  yeetAmount: YeetAmount,
  yeetDate: YeeterEpochDatePicker,
  dateWarning: DateWarning,
};

export type CustomFieldLego = FieldLegoBase<typeof AppFieldLookup>;
export type CustomFormLego = FormLegoBase<typeof AppFieldLookup>;

export const BASIC_PROPOSAL_FORMS_APP = {
  TEST_FORM: APP_FORM.TEST_FORM,
  SIGNAL: PROPOSAL_FORMS.SIGNAL,
  ISSUE: PROPOSAL_FORMS.ISSUE,
  TOKENS_FOR_SHARES: PROPOSAL_FORMS.TOKENS_FOR_SHARES,
  TRANSFER_ERC20: PROPOSAL_FORMS.TRANSFER_ERC20,
  TRANSFER_NETWORK_TOKEN: PROPOSAL_FORMS.TRANSFER_NETWORK_TOKEN,
};

export const ADVANCED_PROPOSAL_FORMS_APP = {
  WALLETCONNECT: PROPOSAL_FORMS.WALLETCONNECT,
  UPDATE_GOV_SETTINGS: PROPOSAL_FORMS.UPDATE_GOV_SETTINGS,
  TOKEN_SETTINGS: PROPOSAL_FORMS.TOKEN_SETTINGS,
  ADD_SHAMAN: PROPOSAL_FORMS.ADD_SHAMAN,
  GUILDKICK: PROPOSAL_FORMS.GUILDKICK,
  MULTICALL_BUILDER: PROPOSAL_FORMS.MULTICALL_BUILDER,
};

export const ALL_APP_FORMS = {
  ...APP_FORM,
  ...PROPOSAL_FORMS,
  ...COMMON_FORMS,
};
