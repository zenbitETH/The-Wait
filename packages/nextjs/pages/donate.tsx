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
            className="input input-ghost input-bordered border-3 border-white w-full max-w-xs pl-8 focus:bg-white/20 "
          />
          <div className="absolute right-16 top-3 cursor-pointer">MAX</div>
        </div>

        <div className="grid  gap-3 pb-3 max-w-xs mx-auto">
          <div className="grid  border-2 border-dai/70 rounded-md">
            <div className="text-dai px-3 py-2 flex mx-auto items-center">
              <span>✅</span>
              <div className="text-xl font-bold px-3">Your will deposit</div>
              <div className="text-2xl text-white">0 DAI</div>
            </div>
          </div>
          <div className="grid gap-3 border-2 border-sdai/70 rounded-md">
            <div className="text-sdai px-3 py-2 rounded-in flex mx-auto">
              <div>⏳</div>
              <div className="text-xl font-bold px-3">Your will transfer</div>
              <div className="text-2xl text-white">0 sDAI</div>
            </div>
          </div>
        </div>
        <button className="bg-white/20 text-sdai mx-auto w-full max-w-xs rounded-md text-2xl py-3 hover:bg-sdai hover:text-white">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Boost;
