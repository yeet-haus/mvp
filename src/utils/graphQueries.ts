import { gql } from "graphql-request";

const yeeterFields = `
id
createdAt
dao {
  id
}
endTime
startTime
isShares
multiplier
minTribute
goal
balance
yeetCount
`;

export const GET_YEETER = gql`
  query yeeter($shamanAddress: String!) {
    yeeter(id: $shamanAddress) {
      ${yeeterFields}
    }
  }
`;

export const GET_YEETERS = gql`
  {
    yeeters(
      first: 1000, 
      orderBy: createdAt, 
      orderDirection: desc
    ) {
      ${yeeterFields}

    }
  }
`;

export const LIST_YEETS = gql`
  query yeets($shamanAddress: String!) {
    yeets(
      where: { yeeter: $shamanAddress }
      orderBy: createdAt
      orderDirection: desc
      first: 1000
    ) {
      id
      createdAt
      contributor
      amount
      shares
      message
    }
  }
`;

export const GET_YEETS_BY_TX = gql`
  query yeets($txHash: String!) {
    yeets(where: { txHash: $txHash }, first: 1) {
      id
      txHash
      shares
    }
  }
`;
