import { Wallet, Chain, Network } from "mintbase";

// Connect and fetch details
async function connect() {
  const { data: walletData, error } = await new Wallet().init({
    networkName: Network.testnet,
    chain: Chain.near,
    apiKey: "511a3b51-2ed5-4a27-b165-a27a01eebe0a",
  });

  const { wallet, isConnected } = walletData;

  if (isConnected) {
    const { data: details } = await wallet.details();

    console.log(details);
    /*
      accountId: "qwerty.testnet"
      allowance: "0.25"
      balance: "365.77"
      contractName: "mintbase13.testnet"
    */
  }

  document.getElementById("login-button").addEventListener("click", (e) => {
    wallet.connect({
      requestSignIn: true,
      contractAddress: "market-v2-beta.mintspace2.testnet",
    });
    console.log(isConnected);
  });

  document.getElementById("logout-button").addEventListener("click", (e) => {
    wallet.disconnect();

    console.log(isConnected);
  });

  document.getElementById("mint-button").addEventListener("click", (e) => {
    console.log("mint");


    // I'm not sure about this values are correct or not............;
    
    const tokenIds = ["166"];
    const prices = ["22"];
    const marketAddress = "shopifyteststore.mintspace2.testnet";

    wallet.batchMakeOffer({
      tokenIds,
      prices,
      marketAddress,
    });

    console.log(isConnected);
  });
}

connect();
