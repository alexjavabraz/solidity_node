// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract TwoWayPeg {

    uint256 public count = 0;
    address public fedAddress;
    address payable owner;
    mapping(address => uint256) balances;
    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event SavedMondey(address indexed _from, uint256 _value, string _message);
    uint256 public totalSupply = 1000000;

    constructor() {
        owner = payable(msg.sender);
        balances[msg.sender] = totalSupply;
    }

    function saveMoney(string memory message) 
        public
        payable
        onlyOwner
    {
        (bool success, ) = msg.sender.call{value : address(this).balance}("");      
        require(success, "Cannot send funds");
        emit SavedMondey(msg.sender, msg.value, message);
    }

    function transfer(address to, uint256 amount) 
        external 
    {
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // Transfer the amount.
        balances[msg.sender] -= amount;
        balances[to] += amount;

        // Notify off-chain applications of the transfer.
        emit Transfer(msg.sender, to, amount);
    }

    function balanceOf(address account) 
        external 
        view 
    returns (uint256) {
        return balances[account];
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "only owner");
        _;
    }

}
