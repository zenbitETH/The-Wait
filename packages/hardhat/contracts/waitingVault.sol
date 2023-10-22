// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ISDAIToken {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
}

contract SDaiDonor {

    address public owner;
    address public recipientEOA; // Externally Owned Account to receive the SDAI and yield
    ISDAIToken public sdaiToken; // This is the SDAI token contract interface
    mapping(address => uint256) public deposits;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(address _sdaiTokenAddress, address _recipientEOA) {
        owner = msg.sender;
        sdaiToken = ISDAIToken(_sdaiTokenAddress);
        recipientEOA = _recipientEOA;
    }

    function depositSDAI(uint256 amount) external {
        require(amount > 0, "Amount should be greater than 0");
        require(sdaiToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        deposits[msg.sender] += amount;
    }

    function setRecipient(address _newRecipient) external onlyOwner {
        recipientEOA = _newRecipient;
    }

    function boosterWithdraw(uint256 originalAmount) external {
        require(deposits[msg.sender] >= originalAmount, "Not enough deposited SDAI");

        uint256 yieldGenerated = sdaiToken.balanceOf(address(this)) - getTotalDeposits();
        uint256 yieldForBooster = (yieldGenerated * 40) / 100; // 40% of the yield

        require(sdaiToken.transfer(recipientEOA, yieldForBooster + originalAmount), "Transfer to recipient failed");
        deposits[msg.sender] -= originalAmount;
    }

      function getTotalDeposits() public view returns (uint256) {
        uint256 total = 0;
        address[] memory donors = getDonors();
        for (uint256 i = 0; i < donors.length; i++) {
            total += deposits[donors[i]];
        }
        return total;
    }

    // A function to get the list of donors, assuming a limited number of donors.
    // This may not be efficient for a large number of donors.
    function getDonors() public view returns (address[] memory) {
        address[] memory donors = new address[](address(this).balance);
        uint256 count = 0;
        for (uint256 i = 0; i < donors.length; i++) {
            if (deposits[donors[i]] > 0) {
                donors[count] = donors[i];
                count++;
            }
        }
        return donors;
    }
}
