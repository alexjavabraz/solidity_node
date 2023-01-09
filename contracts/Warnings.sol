// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract Warnings {
    uint256 private foo;

    constructor() {}

    function add(uint256 x, uint256 y) public pure returns (uint256) {
        return x + y;
    }
}
