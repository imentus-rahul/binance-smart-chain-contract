# Lexeon Project

# Installation
- npm install

# Changing Config before deploy
- change .env file with the public and private key

# Compile contract
- npx hardhat compile

# Deploy (Select n/w of choice)
- npx hardhat run --network mainnet scripts/deploy.js
- npx hardhat run --network testnet scripts/deploy.js
- npx hardhat --network localhost run scripts/deploy.js

# Save the deployed address somewhere safe

# Other Tweaks with Hardhat
```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```
# Notes: 
- accounts: [`0x${process.env.PRIVATEKEY}`]
- 0 required in private key
- In case of 504 Gateway Time-out:  Try back again in some time or else we need to change the node