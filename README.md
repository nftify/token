# Introduction

NFTify (N1)

# Contract Deployment / Interactions

For interactions or contract deployments on public testnets / mainnet, create a .env file specifying your private key and infura api key, etherscan api key, owner address and gas price (in gwei) with the following format:

```
ACCOUNT_PRIVATE_KEY=****************************************************************
NETWORK_API_URL=********************************
ETHERSCAN_API_KEY==********************************
OWNER_ADDRESS=********************************
GAS_PRICE=********************************
```

# Deploy

```
npm i
npx hardhat compile
npx hardhat run --network {ropsten, mainnet} scripts/deploy.js
```

# Verify

```
npx hardhat verify --network {ropsten, mainnet} {contract_address} {owner_address}
```
