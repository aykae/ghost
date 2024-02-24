import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { PolicyCreated } from "../generated/GhostFactory/GhostFactory"

export function createPolicyCreatedEvent(
  policyAddress: Address,
  creator: Address
): PolicyCreated {
  let policyCreatedEvent = changetype<PolicyCreated>(newMockEvent())

  policyCreatedEvent.parameters = new Array()

  policyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "policyAddress",
      ethereum.Value.fromAddress(policyAddress)
    )
  )
  policyCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return policyCreatedEvent
}
