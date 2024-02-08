import {
  HAUS_NETWORK_DATA,
  Keychain,
  KeychainList,
  NetworkConfig,
  ValidNetwork,
} from "@daohaus/keychain-utils";

type KEYCHAIN = {
  [key: string]: string;
};

export const GRAPH_URL: KEYCHAIN = {
  "0x5":
    "https://api.thegraph.com/subgraphs/name/odyssy-automaton/yeeter-dh-ui-v2",
  "0xaa36a7":
    "https://api.thegraph.com/subgraphs/name/yeet-haus/yeeter-sepolia",
};

export const YEETER_DAO_REFERRER = "DHOnboarderShamanSummoner";

export const targetNetworks: Keychain<NetworkConfig> = {
  "0x5": HAUS_NETWORK_DATA["0x5"],
  "0xaa36a7": HAUS_NETWORK_DATA["0xaa36a7"],
};

export const DEFAULT_CHAIN_ID = "0xaa36a7";

export const getValidChainId = (chainId?: string) => {
  return targetNetworks[chainId as ValidNetwork]?.chainId || DEFAULT_CHAIN_ID;
};

export const YEETER_CONTRACTS: KeychainList = {
  ONBOARDER_SUMMONER: {
    "0x1": "",
    "0x5": "0x45a2583F50602C169D459D98761df6D48c1EB3D6",
    "0xa": "",
    "0xaa36a7": "0x8D60971eFf778966356c1cADD76d525E7B25cc6b",
  },
  ETH_YEETER_SINGLETON: {
    "0x1": "",
    "0x5": "0x4cCaeF82053aDa5d14188Dbe241b91dF9F1Cb151",
    "0xa": "",
    "0xaa36a7": "0x62fF4Ca410E9e58f5ce8B2Ad03695EF0ad990381",
  },
};

export const YEETER_SHAMAN_PERMISSIONS = "2";
export const DEFAULT_YEETER_VALUES = {
  isShares: false,
  feeRecipients: ["0xD0f8720846890a7961945261FE5012E4cA39918e"],
  feeAmounts: ["30000"],
  lootPerYeet: "100",
};
export const DEFAULT_SUMMON_VALUES = {
  votingPeriodInSeconds: 120,
  gracePeriodInSeconds: 60,
  newOffering: "0",
  quorum: "0",
  sponsorThreshold: "1000000000000000000",
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: false,
  shareAmounts: "1000000000000000000",
};
