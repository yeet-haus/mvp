import {
  ArbitraryState,
  POSTER_TAGS,
  encodeFunction,
  encodeValues,
  getNonce,
  isArray,
  isNumberish,
  isString,
} from "@daohaus/utils";
import { CONTRACT_KEYCHAINS, ValidNetwork } from "@daohaus/keychain-utils";
import { LOCAL_ABI } from "@daohaus/abis";
import { SummonParams, handleKeychains } from "@daohaus/contract-utils";

import {
  DEFAULT_SUMMON_VALUES,
  DEFAULT_YEETER_VALUES,
  YEETER_CONTRACTS,
  YEETER_SHAMAN_PERMISSIONS,
} from "./constants";

export const assembleYeeterSummonerArgs = (args: ArbitraryState) => {
  const formValues = args.appState.formValues as Record<string, unknown>;
  const chainId = args.chainId as ValidNetwork;

  const initializationLootTokenParams = assembleLootTokenParams({
    formValues,
    chainId,
  });

  const initializationShareTokenParams = assembleShareTokenParams({
    formValues,
    chainId,
  });

  const initializationShamanParams = assembleShamanParams({
    formValues,
    chainId,
  });

  const postInitializationActions = assembleInitActions({
    formValues,
    chainId,
  });

  const txArgs = [
    initializationLootTokenParams,
    initializationShareTokenParams,
    initializationShamanParams,
    postInitializationActions,
    getNonce(),
  ];

  return txArgs;
};

const assembleLootTokenParams = ({
  formValues,
  chainId,
}: {
  formValues: Record<string, unknown>;
  chainId: ValidNetwork;
}) => {
  const yeetName = formValues["daoName"];
  const tokenName = import.meta.env.VITE_TOKEN_NAME_OVERRIDE
    ? `${yeetName}`
    : `nv${yeetName}`;
  const tokenSymbol = import.meta.env.VITE_TOKEN_NAME_OVERRIDE
    ? `${yeetName}`
    : `nv${yeetName}`;

  // const tokenName = formValues["lootTokenName"];
  // const tokenSymbol = formValues["lootTokenSymbol"];
  const lootSingleton = CONTRACT_KEYCHAINS["LOOT_SINGLETON"][chainId];

  if (
    !isString(yeetName) ||
    !isString(tokenName) ||
    !isString(tokenSymbol) ||
    !lootSingleton
  ) {
    console.log("ERROR: Form Values", formValues);

    throw new Error(
      "assembleLootTokenParams recieved arguments in the wrong shape or type"
    );
  }

  const lootParams = encodeValues(
    ["string", "string"],
    [tokenName, tokenSymbol]
  );

  return encodeValues(["address", "bytes"], [lootSingleton, lootParams]);
};

const assembleShareTokenParams = ({
  formValues,
  chainId,
}: {
  formValues: Record<string, unknown>;
  chainId: ValidNetwork;
}) => {
  const yeetName = formValues["daoName"] as string;
  const tokenName = `${yeetName}`;
  const tokenSymbol = `${yeetName.substring(0, 2)}SHARES`;
  const shareSingleton = CONTRACT_KEYCHAINS["SHARES_SINGLETON"][chainId];

  if (
    !isString(yeetName) ||
    !isString(tokenName) ||
    !isString(tokenSymbol) ||
    !shareSingleton
  ) {
    console.log("ERROR: passed args");

    throw new Error(
      "assembleShareTokenParams recieved arguments in the wrong shape or type"
    );
  }

  const shareParams = encodeValues(
    ["string", "string"],
    [tokenName, tokenSymbol]
  );

  return encodeValues(["address", "bytes"], [shareSingleton, shareParams]);
};

const assembleShamanParams = ({
  formValues,
  chainId,
}: {
  formValues: Record<string, unknown>;
  chainId: ValidNetwork;
}) => {
  const yeeterSingleton = YEETER_CONTRACTS["ETH_YEETER_SINGLETON"][chainId];
  const startTime = formValues["startTime"];
  const endTime = formValues["endTime"];
  const goal = formValues["goal"];
  const minTribute = formValues["minTribute"];
  const multiplier = formValues["multiplier"];
  const isShares = DEFAULT_YEETER_VALUES.isShares;
  const feeRecipients = DEFAULT_YEETER_VALUES.feeRecipients;
  const feeAmounts = DEFAULT_YEETER_VALUES.feeAmounts;

  if (
    !isNumberish(startTime) ||
    !isNumberish(endTime) ||
    !isNumberish(minTribute) ||
    !isNumberish(multiplier) ||
    !isNumberish(goal) ||
    !yeeterSingleton
  ) {
    console.log("ERROR: Form Values", formValues);

    throw new Error(
      "assembleShamanParams recieved arguments in the wrong shape or type"
    );
  }

  const shamanParams = encodeValues(
    [
      "uint256",
      "uint256",
      "bool",
      "uint256",
      "uint256",
      "uint256",
      "address[]",
      "uint256[]",
    ],
    [
      startTime,
      endTime,
      isShares,
      minTribute,
      multiplier,
      goal,
      feeRecipients,
      feeAmounts,
    ]
  );

  return encodeValues(
    ["address[]", "uint256[]", "bytes[]"],
    [[yeeterSingleton], [YEETER_SHAMAN_PERMISSIONS], [shamanParams]]
  );
};

const assembleInitActions = ({
  formValues,
  chainId,
}: {
  formValues: Record<string, unknown>;
  chainId: ValidNetwork;
}) => {
  const { POSTER } = handleKeychains(chainId);

  return [
    governanceConfigTX(DEFAULT_SUMMON_VALUES),
    tokenConfigTX(),
    tokenMintTX(formValues),
    metadataConfigTX(formValues, POSTER),
  ];
};

const governanceConfigTX = (formValues: SummonParams) => {
  const {
    votingPeriodInSeconds,
    gracePeriodInSeconds,
    newOffering,
    quorum,
    sponsorThreshold,
    minRetention,
  } = formValues;

  if (
    !isNumberish(votingPeriodInSeconds) ||
    !isNumberish(gracePeriodInSeconds) ||
    !isNumberish(newOffering) ||
    !isNumberish(quorum) ||
    !isNumberish(sponsorThreshold) ||
    !isNumberish(minRetention)
  ) {
    throw new Error(
      "governanceConfigTX recieved arguments in the wrong shape or type"
    );
  }

  const encodedValues = encodeValues(
    ["uint32", "uint32", "uint256", "uint256", "uint256", "uint256"],
    [
      votingPeriodInSeconds,
      gracePeriodInSeconds,
      newOffering,
      quorum,
      sponsorThreshold,
      minRetention,
    ]
  );
  const encoded = encodeFunction(LOCAL_ABI.BAAL, "setGovernanceConfig", [
    encodedValues,
  ]);
  if (isString(encoded)) {
    return encoded;
  }
  throw new Error("Encoding Error");
};

const tokenConfigTX = () => {
  const lootPaused = DEFAULT_SUMMON_VALUES.nvPaused;
  const sharesPaused = DEFAULT_SUMMON_VALUES.votingPaused;

  const encoded = encodeFunction(LOCAL_ABI.BAAL, "setAdminConfig", [
    lootPaused,
    sharesPaused,
  ]);
  console.log("lootPaused", lootPaused);
  console.log("sharesPaused", sharesPaused);

  console.log("encoded", encoded);
  if (isString(encoded)) {
    return encoded;
  }
  throw new Error("Encoding Error");
};

const tokenMintTX = (formValues: Record<string, unknown>) => {
  const shareHolders: string[] = formValues["members"] as string[];

  const shareAmounts = shareHolders.map(
    () => DEFAULT_SUMMON_VALUES.shareAmounts
  );

  if (!isArray(shareHolders) || shareHolders.some((addr) => !isString(addr))) {
    console.log("ERROR: passed args");

    throw new Error(
      "tokenMintTX recieved arguments in the wrong shape or type"
    );
  }

  const encoded = encodeFunction(LOCAL_ABI.BAAL, "mintShares", [
    shareHolders,
    shareAmounts,
  ]);

  if (isString(encoded)) {
    return encoded;
  }
  throw new Error("Encoding Error");
};

const metadataConfigTX = (formValues: SummonParams, posterAddress: string) => {
  const { daoName } = formValues;
  if (!isString(daoName)) {
    console.log("ERROR: Form Values", formValues);
    throw new Error("metadataTX recieved arguments in the wrong shape or type");
  }

  const METADATA = encodeFunction(LOCAL_ABI.POSTER, "post", [
    JSON.stringify({ name: daoName }),
    POSTER_TAGS.summoner,
  ]);

  const encoded = encodeFunction(LOCAL_ABI.BAAL, "executeAsBaal", [
    posterAddress,
    0,
    METADATA,
  ]);
  if (isString(encoded)) {
    return encoded;
  }
  throw new Error("Encoding Error");
};
