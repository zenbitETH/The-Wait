import type { NextPage } from "next";

const Boost: NextPage = () => {
  return (
    <div className="m-auto p-8 rounded-md gap-3 grid text-center font-bau ">
      <div className="bg-gradient-to-b from-black/75 to-gray-500 p-3 rounded-md">
        <div className="grid items-center gap-3 pb-3">
          <div className="text-3xl text-white">
            <span className="text-dai">Deposit DAI </span>and <span className="text-sdai">transfer SDAI</span>
          </div>
        </div>
        <div className="text-dai text-lg mb-3">30 DAI available</div>
        <div className="relative mb-3">
          <input
            type="number"
            placeholder="0.00"
            className="input input-ghost input-bordered border-3 border-white w-full max-w-xs"
          />
          <div className="absolute right-10 top-3">MAX</div>
        </div>

        <div className="grid  gap-3 pb-3 max-w-xs mx-auto">
          <div className="grid gap-3 border-2 border-dai rounded-in">
            <div className="text-dai px-3 rounded-in flex mx-auto">
              <p>✅</p>
              <p className="text-xl font-bold px-3">Your will deposit</p>
              <p className="text-2xl text-white">0 DAI</p>
            </div>
          </div>
          <div className="grid gap-3 border-2 border-sdai rounded-in">
            <div className="text-sdai px-3 rounded-in flex mx-auto">
              <p>⏳</p>
              <p className="text-xl font-bold px-3">Your will transfer</p>
              <p className="text-2xl text-white">0 sDAI</p>
            </div>
          </div>
        </div>
        <button className="bg-sdai mx-auto w-full max-w-xs rounded-md text-2xl py-3">Donate</button>
      </div>
    </div>
  );
};

export default Boost;
