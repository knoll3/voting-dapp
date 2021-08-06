# Voting Dapp

Building out the frontend for a [simple voting smart contract](https://docs.soliditylang.org/en/v0.8.6/solidity-by-example.html#voting). 

### Includes

-   React
-   Typescript
-   Web3
-   Material UI

### Setup

1. Use Ganache to run a local network
2. Make sure the port listed in `truffle-config.js` matches the port Ganache is running on. Ganache defaults to 7545, truffle defaults to 8545
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
