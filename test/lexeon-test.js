const { expect } = require("chai");
const { ethers } = require("hardhat");
const chai = require('chai');
const { link, solidity } = require('ethereum-waffle');
// const {ArizeToken} = require('../artifacts/contracts/Lexeon.sol/SmartMatrixLexeon.json');
// const { SignerWithAddress }  = require('@nomiclabs/hardhat-ethers/signers');
// const { token } = require("@project-serum/anchor/dist/cjs/utils");
chai.use(solidity);

describe("Token Test Cases", function () {

  let token;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async  () =>{
    [owner, addr1, addr2] = await ethers.getSigners();
    const get_contract = await ethers.getContractFactory("SmartMatrixLexeon");
    token = await get_contract.deploy(owner.address);
    await token.deployed();
  });

  it("Should check the token owner should be the deployer", async function() {
    expect(await token.contractOwner()).to.equal(owner.address);
  });


  it("Should transfer the Ownership to other address", async function () {
    expect(await token.contractOwner()).to.equal(owner.address);
    const newOwner = await token.transferOwnership(addr1.address);
    expect(await token.contractOwner()).to.equal(addr1.address);
  });

  it("Should buy new slots", async function () {
    await token.buyNewSlot(1, "one", 3);
    await token.events.Upgrade;
  });

  // it("Should check the Balance of owner to be equal to total supply ie 1000000000", async function () {
  //   expect(await token.balanceOf(owner.address)).to.equal(1000000000);
  // });
  // it("Should transfer some tokens to recepient's accounts", async ()=>{
  //   await token.transfer(addr1.address, 1000);
  //   expect(await token.balanceOf(addr1.address)).to.equal(1000);
  // });
  // it("Should set the approval", async ()=>{
  //   await token.approve(addr1.address, 1000);
  // });
  // it("Should reduce the balance of owner after token transfer ie totalsupply-transferedAmount", async ()=>{
  //   await token.transfer(addr1.address, 1000);
  //   expect(await token.balanceOf(owner.address)).to.equal(999999000);
  // });
  // it("Should increaseAllowance", async ()=>{
  //   await token.increaseAllowance(addr1.address, 2000);
  // });
  
  // it("Should decreaseAllowance", async ()=>{
  //   await token.approve(addr1.address, 1000);
  //   await token.decreaseAllowance(addr1.address, 200);
  // });
  
  // it("Should Check the user if is in whitelist", async ()=>{
  //   expect(await token.isInBlacklist(addr1.address)).to.equal(false);
  // });

  // it("Should BlackList the User", async ()=>{
  //   await token.blackList(addr1.address, true);
  //   expect(await token.isInBlacklist(addr1.address)).to.equal(true);
    
  // })
  // it("Should not transfer the token to the blacklisted User", async ()=>{
  //   await token.blackList(addr1.address, true);
  //   await token.transfer(addr1.address, 1000);
  //   expect(await token.balanceOf(addr1.address)).to.equal(0);
  // })
  // it("Should whitelist the user", async ()=>{
  //   await token.blackList(addr1.address, true);
  //   await token.whiteList(addr1.address, true);
  //   expect(await token.isInBlacklist(addr1.address)).to.equal(false);
  // })
  // it("Should whitelist the user and transfer the tokens", async ()=>{
  //   await token.blackList(addr1.address, true);
  //   await token.whiteList(addr1.address, true);
  //   await token.transfer(addr1.address, 1000);
  //   expect(await token.balanceOf(addr1.address)).to.equal(1000);
  // })

  // it("Should bulk blacklist the user", async ()=>{
  //   await token.bulkBlackList([addr1.address, addr2.address], [true, true]);
  //   expect(await token.isInBlacklist(addr1.address)).to.equal(true);
  //   expect(await token.isInBlacklist(addr2.address)).to.equal(true);
  // })

  // it("Can set set the timelock", async ()=>{
  //   await token.setTimeLocked(true, 10000);    
  // })
});



