import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x75a3E7a96abCE2a5D8c1687362690464a2A97DED"
);

export default instance;
