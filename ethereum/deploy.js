const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
const { compile } = require("solc");

const provider = new HDWalletProvider(
  "cliff cream toast inherit run nephew display rose dove first disease museum",
  "https://sepolia.infura.io/v3/52ca47611f3a4777ad7006390e98af5c"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  //   console.log(compiledFactory);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
