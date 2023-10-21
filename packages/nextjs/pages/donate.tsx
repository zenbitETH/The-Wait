import type { NextPage } from "next";

const Boost: NextPage = () => {
  return (
    <div className="m-auto p-8 rounded-md gap-3 grid text-center font-bau ">
      <div className="bg-gradient-to-b from-black/75 to-gray-500 p-3 rounded-md ">
        <div className="grid items-center gap-3 pb-3">
          <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-l from-dai to-sdai">Donate</div>
          <div className="text-white text-4xl">1,000.35 DAI</div>
          <div className="text-sdai text-lg">(975 sDAI)</div>
        </div>

        <div className="grid grid-cols-2 gap-3 ">
          <div className="grid gap-3 border-2 border-sdai rounded-in">
            <div className="text-sdai p-3 rounded-in">
              <p className="text-xl font-bold">Donated</p>
              <p className="text-2xl text-white">900 sDAI</p>
              <p>
                from <span>135</span> donors
              </p>
            </div>
          </div>
          <div className="grid gap-3 border-2 border-dai rounded-in">
            <div className="text-dai p-4 rounded-in">
              <p className="text-xl font-bold">Boosted</p>
              <p className="text-2xl text-white">100 sDAI</p>
              <p>
                from <span>8</span> donors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boost;
