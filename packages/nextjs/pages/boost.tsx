import React, { useState } from "react";

const DepositWithdrawComponent: React.FC = () => {
  const [isDeposit, setIsDeposit] = useState(true);
  const [amount, setAmount] = useState(0);

  return (
    <div className="m-auto p-8 rounded-md gap-3 grid text-center font-bau">
      <div className="bg-gradient-to-b from-black/75 to-gray-500 p-3 rounded-md">
        <div className="grid items-center gap-3">
          <div className="text-3xl text-white">
            <span className="text-dai">Deposit DAI </span>to share your <span className="text-sdai">sDAI yield</span>
          </div>
          <div className="flex space-x-2 mx-auto bg-white rounded-md">
            <button
              onClick={() => setIsDeposit(true)}
              className={`px-4 py-2 rounded-md ${isDeposit ? "bg-dai text-white" : " text-dai"}`}
            >
              Deposit
            </button>
            <button
              onClick={() => setIsDeposit(false)}
              className={`px-4 py-2 rounded-md ${!isDeposit ? "bg-sdai text-white" : " text-sdai"}`}
            >
              Withdraw
            </button>
          </div>
        </div>
        {isDeposit ? (
          <>
            <p className="text-dai mb-2">30.00 DAI available</p>
            <div className="relative mb-3">
              <input
                type="number"
                value={amount}
                onChange={e => setAmount(parseFloat(e.target.value))}
                className="input input-ghost input-bordered border-3 border-white w-full max-w-xs pl-8 focus:bg-white/20"
              />
              <button onClick={() => setAmount(30)} className="absolute right-28 top-3 cursor-pointer text-dai">
                MAX
              </button>
            </div>
            <div className="grid">
              <div className="text-dai px-3 py-2 flex mx-auto items-center">
                <div className="text-xl font-bold px-3">Your will deposit</div>
                <div className="text-2xl text-white">0 DAI</div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="text-sdai mb-2">28.00 sDAI available</p>
            <div className="relative mb-3">
              <input
                type="number"
                value={amount}
                onChange={e => setAmount(parseFloat(e.target.value))}
                className="input input-ghost input-bordered border-3 border-white w-full max-w-xs pl-8 focus:bg-white/20"
              />
              <button onClick={() => setAmount(28)} className="absolute right-28 top-3 cursor-pointer text-sdai">
                MAX
              </button>
            </div>
            <div className="grid grid-cols-2 max-w-xs mx-auto pb-2">
              <div className="text-dai py-2 flex mx-auto items-center">
                <div className="text-white px-3">0 DAI</div>
                <div className="font-bold">to withdraw </div>
              </div>
              <div className="text-sdai py-2 rounded-in flex mx-auto">
                <div className="text-white px-3">0 sDAI</div>
                <div className="font-bold">to transfer</div>
              </div>
            </div>
          </>
        )}

        <button
          className={
            isDeposit
              ? "bg-white/20 text-dai mx-auto w-full max-w-xs rounded-md text-2xl py-3 hover:bg-dai hover:text-white"
              : "bg-white/20 text-sdai mx-auto w-full max-w-xs rounded-md text-2xl py-3 hover:bg-sdai hover:text-white"
          }
        >
          {isDeposit ? "Deposit" : "Withdraw"}
        </button>
      </div>
    </div>
  );
};

export default DepositWithdrawComponent;
