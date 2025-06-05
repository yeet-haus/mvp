import {
  HAUS_NETWORK_DATA,
  Keychain,
  KeychainList,
  NetworkConfig,
  ValidNetwork,
  getNetworkName,
} from "@daohaus/keychain-utils";

type KEYCHAIN = {
  [key: string]: string;
};

export const GRAPH_URL: KEYCHAIN = {
  "0xaa36a7": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/8Syem3ZN88cut1wL8AqPHNo658Px7M2CkRuHAGuxvf6j`,
  "0x64": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/EGG5xEkiKKtGa9frTfBSmL2w7ZmzPDke5ZuvxDRwQcGe`,
  "0xa": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/55wEbRchfvjtWsy5NqLc4hp9C7xbX9yk8bAr3UQA8F7x`,
  "0xa4b1": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/BeGugH1TsMspZ7Nov1Uq2PQ98X78sqjuEy1JFGLyNgt5`,
  "0x2105": `https://gateway-arbitrum.network.thegraph.com/api/${
    import.meta.env.VITE_YEETER_GRAPH_API_KEY
  }/subgraphs/id/6vyAqRpCyrhLsfd6TfYAssvKywKhxJykkDbPxJZ4ZcEr`,
};

export const YEETER_DAO_REFERRER = "DHOnboarderShamanSummoner";

export const targetNetworks: Keychain<NetworkConfig> = {
  "0xaa36a7": HAUS_NETWORK_DATA["0xaa36a7"],
  "0x64": HAUS_NETWORK_DATA["0x64"],
  "0xa": HAUS_NETWORK_DATA["0xa"],
  "0xa4b1": HAUS_NETWORK_DATA["0xa4b1"],
  "0x2105": HAUS_NETWORK_DATA["0x2105"],
};

export const targetNetworksForSelect = () => {
  return Object.keys(targetNetworks).map((key) => {
    return {
      name: getNetworkName(key)?.toUpperCase(),
      value: key,
    };
  });
};

export const DEFAULT_CHAIN_ID = "0x64";

export const getValidChainId = (chainId?: string) => {
  return targetNetworks[chainId as ValidNetwork]?.chainId || DEFAULT_CHAIN_ID;
};

export const YEETER_CONTRACTS: KeychainList = {
  ONBOARDER_SUMMONER: {
    "0x64": "0xd55ce418a17418fe36254ad71c25f87aa97afc85",
    "0xa": "0xdbD69005afF25Ec2B458125697580B997C5f7c58",
    "0xa4b1": "0x24c2cA1152AbE7F34b4ecD82A3D1D18876533620",
    "0x2105": "0x788C55D87a416F391E93a986AbB1e2b2960d0079",
    "0xaa36a7": "0xFb3610917A8f9F0866024a19d8C40fBC3BEbA54b",
  },
  ETH_YEETER_SINGLETON: {
    "0x64": "0x4b0f17aF019E54031Ca1Ad14bDdd3F4C1ea22F05",
    "0xa": "0x21E2d492d367780Ab736bD0600164AC3D5D20bD2",
    "0xa4b1": "0x97d7753882f8bab3e96efd9a8a17ca1c769cd7cc",
    "0x2105": "0xBAb498fB934fE1661Bb707DFF1730BaE12a1a691",
    "0xaa36a7": "0xDEdF14E5d3B29411801cBF80a8b1939D2E45f58c",
  },
};

export const YEETER_SHAMAN_PERMISSIONS = "2";
export const DEFAULT_YEETER_VALUES = {
  isShares: false,
  feeRecipients: ["0xD0f8720846890a7961945261FE5012E4cA39918e"],
  feeAmounts: ["30000"],
  lootPerYeet: "100",
  multiplier: "100",
};
export const DEFAULT_SUMMON_VALUES = {
  votingPeriodInSeconds: 43200,
  gracePeriodInSeconds: 21600,
  newOffering: "0",
  quorum: "0",
  sponsorThreshold: "1000000000000000000",
  minRetention: "66",
  votingTransferable: false,
  nvTransferable: false,
  shareAmounts: "1000000000000000000",
};
export const FEE_DISCLOSURE =
  "The Yeeter protocol fee is 3% on all contributions. Fees in the network's native token are sent to the Yeeter safe. These funds are used to maintain and enhance the platform while supporting the DAOhaus community.";
