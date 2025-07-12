import { ethers } from "ethers";
import { contracts } from "./contracts";

const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

export async function executeContract(contractName: string, method: string, params: any[]) {
  const contractDef = contracts[contractName];
  if (!contractDef) throw new Error("Contract not found");

  const contract = new ethers.Contract(contractDef.address, contractDef.abi, wallet);
  if (typeof contract[method] !== "function") throw new Error("Method not found on contract");

  const tx = await contract[method](...params);
  const receipt = await tx.wait();

  return { txHash: receipt.hash };
}
