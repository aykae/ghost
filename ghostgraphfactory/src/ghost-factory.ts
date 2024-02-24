import { PolicyCreated as PolicyCreatedEvent } from "../generated/GhostFactory/GhostFactory"
import { PolicyCreated } from "../generated/schema"

export function handlePolicyCreated(event: PolicyCreatedEvent): void {
  let entity = new PolicyCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.policyAddress = event.params.policyAddress
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
