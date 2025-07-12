import express from "express";
import { executeContract } from "../services/executor";

const router = express.Router();

router.post("/", async (req, res) => {
  const { contractName, method, params } = req.body;

  try {
    const result = await executeContract(contractName, method, params);
    res.json({ success: true, txHash: result.txHash });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
