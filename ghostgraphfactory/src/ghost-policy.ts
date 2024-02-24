import { BigInt, Address, log } from '@graphprotocol/graph-ts';
import { PremiumPaid, ClaimCollected, TotalPool } from '../generated/schema';
import { GhostPolicy } from '../generated/GhostPolicy/GhostPolicy';
import { Health } from "../generated/schema";

export function handlePremiumPaid(event: PremiumPaid): void {
  let contract = GhostPolicy.bind(event.address);
  let totalPoolEntity = TotalPool.load('1');

  if (totalPoolEntity == null) {
    totalPoolEntity = new TotalPool('1');
    totalPoolEntity.amount = BigInt.fromI32(0);
  }

  totalPoolEntity.amount = totalPoolEntity.amount.plus(event.params.amount);
  totalPoolEntity.blockNumber = event.block.number;
  totalPoolEntity.blockTimestamp = event.block.timestamp;
  totalPoolEntity.transactionHash = event.transaction.hash;

  totalPoolEntity.save();
}

export function handleClaimCollected(event: ClaimCollected): void {
  let contract = GhostPolicy.bind(event.address);
  let totalPoolEntity = TotalPool.load('1');

  if (totalPoolEntity == null) {
    log.warning("TotalPool entity not found", []);
    return;
  }
  
  let collectedAmountCall = contract.totalClaimFunds();

  if (collectedAmountCall.reverted) {
    log.warning("Failed to retrieve totalClaimFunds", []);
    return;
  }

  let collectedAmount = collectedAmountCall.value;

  totalPoolEntity.amount = totalPoolEntity.amount.minus(collectedAmount);
  totalPoolEntity.blockNumber = event.block.number;
  totalPoolEntity.blockTimestamp = event.block.timestamp;
  totalPoolEntity.transactionHash = event.transaction.hash;

  totalPoolEntity.save();
}
export function handleHealthUpdated(event: HealthUpdated): void {
  let healthEntity = new Health("latest");
  healthEntity.value = event.params.newHealth;
  healthEntity.save();
}