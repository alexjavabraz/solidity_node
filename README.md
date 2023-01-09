# Solidity Project with Node
>**Note:** Project created to use node, hardhat and solcjs to deploy a solidity smart contract in RSK Testnet.

## Initializing project

```
$ npx license mit > LICENSE
$ npx gitignore node
$ npx covgen YOUR_EMAIL_ADDRESS
$ npm init -y
```

## Install solcjs
```
 npm install --global solc@0.8.15
 ```

## Run solcjs
```
solcjs --bin --abi src/Warnings.sol -o bin

solcjs --bin --abi src/ISuperHonk.sol -o bin

solcjs --bin --abi src/Cars.sol -o bin
```

## Install hardhat
```
npm install --save-dev hardhat
```

# Test tools
## Mocha
- JS test framework
- Asynchronous
- Serial
- Reporting

## Hardhat 
- Solidity development framework
- Built in test framework (via mocha)
- Wrapper to add smart contract specifics
- Uses emulated blockchain (Hardhat VM)

## Emulated Blockchains (Ganache)
- EVM implementation
- Transaction implementation
- Lightweight & fast
- Quick feedback loop

## Test Helper Libraries
- Mocha build in: `assert`
- Chai
- Waffle

## Code coverate tool
```
npm install --save-dev --exact "solidity-coverage@0.7.21"
npx hardhat coverage
```
- instrumentation
- statements / branches / functions / lines
- reports

## Testing
```
npm run test
```

# Running
## Compile with hardhat
```
npx hardhat compile
npx hardhat console --network ...
```
or 
```
npm run compile
```
## Deploy smart contract
```
npx hardhat run scripts/deploy.js --network ...
```

## Slither Mythril
```
pip3 install --upgrade pip
pip3 install slither-analyzer
slither --version
pip3 install mythril
myth version
pip3 install slither-analyzer
npm run sc-analysis-static
```
