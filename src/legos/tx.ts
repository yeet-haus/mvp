import { POSTER_TAGS, TXLego } from "@daohaus/utils";
import { APP_CONTRACT } from "./contract";
import { CONTRACT } from "@daohaus/moloch-v3-legos";
import { Keychain, ValidNetwork } from "@daohaus/keychain-utils";
import { GraphQLClient } from "graphql-request";
import { GRAPH_URL, getValidChainId } from "../utils/constants";
import { GET_YEETS_BY_TX } from "../utils/graphQueries";

export enum ProposalTypeIds {
  Signal = "SIGNAL",
  IssueSharesLoot = "ISSUE",
  AddShaman = "ADD_SHAMAN",
  TransferErc20 = "TRANSFER_ERC20",
  TransferNetworkToken = "TRANSFER_NETWORK_TOKEN",
  UpdateGovSettings = "UPDATE_GOV_SETTINGS",
  UpdateTokenSettings = "TOKEN_SETTINGS",
  TokensForShares = "TOKENS_FOR_SHARES",
  GuildKick = "GUILDKICK",
  WalletConnect = "WALLETCONNECT",
}

const testYeet = (result: any | undefined) => {
  if (result?.yeets[0]) {
    return true;
  }
  return false;
};

const pollYeet = async ({
  chainId,
  txHash,
}: {
  chainId: ValidNetwork;
  txHash: string;
}) => {
  const chain = getValidChainId(chainId);
  const graphQLClient = new GraphQLClient(GRAPH_URL[chain]);
  const res = await graphQLClient.request(GET_YEETS_BY_TX, {
    txHash: txHash?.toLowerCase(),
  });

  return res;
};

export const APP_TX: Record<string, TXLego> = {
  YEETER_SUMMON: {
    id: "YEETER_SUMMON",
    contract: APP_CONTRACT.YEETER_SUMMONER,
    method: "summonBaalFromReferrer",
    argCallback: "assembleYeeterSummonerArgs",
  },
  YEET: {
    id: "YEET",
    contract: APP_CONTRACT.YEETER_SHAMAN,
    method: "contributeEth",
    args: [".formValues.message"],
    overrides: {
      value: ".formValues.amount",
    },
    customPoll: {
      fetch: pollYeet,
      test: testYeet,
    },
  },
  UPDATE_METADATA_SETTINGS: {
    id: "UPDATE_METADATA_SETTINGS",
    contract: CONTRACT.POSTER,
    method: "post",
    args: [
      {
        type: "JSONDetails",
        jsonSchema: {
          daoId: ".daoId",
          table: { type: "static", value: "yeetDetails" },
          queryType: { type: "static", value: "latest" },
          projectDetails: ".formValues.projectDetails",
          missionStatement: ".formValues.missionStatement",
          icon: ".formValues.icon",
          links: {
            type: "nestedArray",
            args: [
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.discord",
                  label: { type: "static", value: "Discord" },
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.github",
                  label: { type: "static", value: "Github" },
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.blog",
                  label: { type: "static", value: "Blog" },
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.telegram",
                  label: { type: "static", value: "Telegram" },
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.twitter",
                  label: { type: "static", value: "Twitter" },
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.web",
                  label: { type: "static", value: "Web" },
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.custom1",
                  label: ".formValues.custom1Label",
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.custom2",
                  label: ".formValues.custom2Label",
                },
              },
              {
                type: "JSONDetails",
                jsonSchema: {
                  url: ".formValues.custom3",
                  label: ".formValues.custom3Label",
                },
              },
            ],
          },
        },
      },
      { type: "static", value: POSTER_TAGS.daoDatabaseShares },
    ],
  },
};
