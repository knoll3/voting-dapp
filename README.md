# Voting Dapp

Building out the frontend for a [simple voting smart contract](https://docs.soliditylang.org/en/v0.8.6/solidity-by-example.html#voting).

### Includes

-   React
-   Typescript
-   Web3
-   Material UI

### Local Setup

1. Use Ganache to run a local network
2. Use Metamask to connect to the port Ganache is running on. GUI default should be 7545, CLI default should be 8545.
3. Make sure the account being used has some eth in it
4. Compile the contracts

```
$ truffle compile
$ truffle migrate
```

5. Build the client

```
$ cd client
$ yarn
```

6. Run the client

```
$ cd client
$ yarn start
```
