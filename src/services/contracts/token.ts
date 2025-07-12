export const TokenContract = {
  name: "Token",
  address: "0xYourContractAddress",
  abi: [
    {
      name: "mint",
      type: "function",
      inputs: [
        { name: "to", type: "address" },
        { name: "amount", type: "uint256" }
      ],
      outputs: [],
      stateMutability: "nonpayable"
    }
  ]
};
