const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
    "two move shiver smart piece purity rough accident disease image hero satisfy",
    "https://rinkeby.infura.io/v3/0e8b0966c27c4f018a1123c4149d8c77"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying from ", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ["Hi there!"] })
        .send({ from: accounts[0], gas: "1000000" });
    console.log("Contract Deployed to ", result.options.address);
    provider.engine.stop();
};
deploy();
