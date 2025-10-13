import React, { useState } from "react";

export default function Limitbreak(): React.ReactNode {
  // State for input fields
  const [mantissa, setMantissa] = useState(6.8);
  const [exponent, setExponent] = useState(8);
  const [levels, setLevels] = useState(100);
  const [hitsPerSecond, setHitsPerSecond] = useState(8);

  const target = {
    exponent,
    mantissa,
  };
  const targ = target.mantissa * 10 ** target.exponent;

  function sumSeries(n: number, fn: (i: number) => number): number {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += fn(i);
    }
    return sum;
  }

  function dog() {
    let a = Math.ceil(Math.log10(targ / 5));
    let b = sumSeries(a, (i) => i);
    const dog = {
      limit_break: a,
      blooms: {
        final_tier_cost: a,
        total: b,
        per_power: b / targ,
        per_exponent: b / Math.log10(targ),
      },
    };
    return dog;
  }

  function player(ass: number) {
    let hps = hitsPerSecond;
    let a = Math.ceil(Math.log10(targ / (5 * hps * ass)));
    function player_lb_cost(dick: number) {
      return Math.max(0, 2 * dick - 1);
    }
    let b = player_lb_cost(a);
    let c = sumSeries(a, (i) => player_lb_cost(i));
    const player = {
      limit_break: a,
      blooms: {
        final_tier_cost: b,
        total: c,
        per_power: c / targ,
        per_exponent: c / Math.log10(targ),
      },
    };
    return player;
  }

  const dogResult = dog();
  const playerResult = hitsPerSecond === 0 ? "Invalid hits per second" : player(levels);

  return (
    <div>
      <h3>Set Parameters</h3>
      <label>
        Target Pet Damage: 
        <input
          type="number"
          value={mantissa}
          step="0.1"
          onChange={(e) => setMantissa(Number(e.target.value))}
        />
      </label>
      <label>
        e
        <input
          type="number"
          value={exponent}
          onChange={(e) => setExponent(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Player Level:
        <input
          type="number"
          value={levels}
          onChange={(e) => setLevels(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Player Hits per Second:
        <input
          type="number"
          value={hitsPerSecond}
          min={1}
          onChange={(e) => {
            const val = Math.max(1, Number(e.target.value));
            setHitsPerSecond(val);
          }}
        />
      </label>
      <hr />
      <h2>Dog</h2>
      <pre>{JSON.stringify(dogResult, null, 2)}</pre>
      <h2>Player</h2>
      <pre>{JSON.stringify(playerResult, null, 2)}</pre>
    </div>
  );
}