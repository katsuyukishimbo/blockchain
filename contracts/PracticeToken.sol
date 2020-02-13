pragma solidity ^0.5.16;

import '../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract PracticeToken is StandardToken {
    string public name = 'PracticeToken';
    string public symbol = 'PT';
    uint8 public decimals = 2;
    uint public initialSupply = 100;

    constructor() public {
                totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
    }

}