import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("GhostFactory", function () {

    describe("Deployment", async function () {
		const [creator0, creator1] = await ethers.getSigners();

		const GhostFactory = await ethers.getContractFactory("GhostFactory");
		const gf = await GhostFactory.deploy();

		it ("Should create a nonzero contract address", async function () {
			expect(gf.address).to.not.equal(0);
		});
    });
});