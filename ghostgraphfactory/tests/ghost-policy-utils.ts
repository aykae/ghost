import { BigInt, Address, log } from '@graphprotocol/graph-ts';
import { PremiumPaid, ClaimCollected, TotalPool } from '../generated/schema';
import { GhostPolicy } from '../generated/GhostPolicy/GhostPolicy'; // Adjust path if necessary
import { GhostPolicy as GhostPolicyContract } from '../generated/GhostPolicy/GhostPolicy'; // Adjust path if necessary

export function handlePremiumPaid(event: PremiumPaid): void {
  let contract = GhostPolicyContract.bind(event.address);
  let totalPoolEntity = TotalPool.load('1');

  if (totalPoolEntity == null) {
    totalPoolEntity = new TotalPool('1');
    totalPoolEntity.amount = BigInt.fromI32(0);
  }

  totalPoolEntity.amount = totalPoolEntity.amount.plus(event.params.amount);
  totalPoolEntity.pholder = event.params.pholder;
  totalPoolEntity.blockNumber = event.block.number;
  totalPoolEntity.blockTimestamp = event.block.timestamp;
  totalPoolEntity.transactionHash = event.transaction.hash;

  totalPoolEntity.save();
}

export function handleClaimCollected(event: ClaimCollected): void {
  let contract = GhostPolicyContract.bind(event.address);
  let totalPoolEntity = TotalPool.load('1');

  if (totalPoolEntity == null) {
    log.warning("TotalPool entity not found", []);
    return;
  }

  let collectedAmount = contract.calculateClaim(event.params.pholder);

  totalPoolEntity.amount = totalPoolEntity.amount.minus(collectedAmount);
  totalPoolEntity.pholder = event.params.pholder;
  totalPoolEntity.blockNumber = event.block.number;
  totalPoolEntity.blockTimestamp = event.block.timestamp;
  totalPoolEntity.transactionHash = event.transaction.hash;

  totalPoolEntity.save();
}