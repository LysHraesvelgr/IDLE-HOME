import React, { useState } from "react";

export default function Keys(): React.ReactNode {
  // State for input fields
  const [luck, setLuck] = useState(10);
  const [timeToKill, setTimeToKill] = useState(30);
  const [hitsPerKill, setHitsPerKill] = useState(10);
  const [malachiticUnmakerLevel, setLevel] = useState(1);
  const [malachiticUnmakerOwnedState, setOwnedState] = useState(false);
  const [malachiticUnmakerHeldState, setHeldState] = useState(false);
  const [malachiticUnmakerSkillState, setSkillState] = useState(false);

  const stats = {
    luck,
    timeToKill,
  };

  type MalachiticUnmaker = {
    level: number;
    TotalBuff: number;
    owned: {
      state: boolean;
      buff: number;
    };
    held: {
      state: boolean;
      buff: number;
    };
    skill: {
      state: boolean;
      buff: number;
    };
  };

  let malachiticUnmaker: MalachiticUnmaker = {
    level: malachiticUnmakerLevel,
    TotalBuff: 0,
    owned: {
      state: malachiticUnmakerOwnedState,
      buff: 0,
    },
    held: {
      state: malachiticUnmakerHeldState,
      buff: 0,
    },
    skill: {
      state: malachiticUnmakerSkillState,
      buff: 0,
    },
  };

  function solveUnmaker() {
    malachiticUnmaker.owned.buff = 4 * malachiticUnmaker.level * (malachiticUnmaker.owned.state ? 0 : 1);
    malachiticUnmaker.held.buff = 4 * malachiticUnmaker.level * (malachiticUnmaker.held.state ? 1 : 0);
    malachiticUnmaker.skill.buff = (25 + 4 * malachiticUnmaker.level) * (malachiticUnmaker.skill.state ? 1 : 0);
    malachiticUnmaker.TotalBuff = malachiticUnmaker.owned.buff + malachiticUnmaker.held.buff + malachiticUnmaker.skill.buff;
    
    return malachiticUnmaker;
  }
  solveUnmaker();

  function solveKeys(){
    
    let simulated = {
      luck: stats.luck + malachiticUnmaker.TotalBuff,
    };
    let timeMult = timeToKill ** 1.05;
    let hitsMult = 2.5 - 0.5/(.01*hitsPerKill+1);
    let baseChance = 5 - 4.99 / (.0005 * simulated.luck + 1);
    let chance = {
      normal: Math.min(
        1, baseChance * timeMult * hitsMult / 100
      ),
      boss: Math.min(
        1, (100 - 99 / (.002 * simulated.luck + 1))/100
      )
    };
    let keysPerHour = {
      normal: 3600/timeToKill * chance.normal,
      boss: 3600/timeToKill * chance.boss
    };
    let secondsPerKey = {
      normal: timeToKill / chance.normal,
      boss: timeToKill / chance.boss
    };
    return {
      chance,
      keysPerHour,
      secondsPerKey
    };
  }
  solveKeys();
  

  



  return (
    <div>
      <h3>Set Parameters</h3>
      <label>
        Current Luck: 
        <input
          type="number"
          value={luck}
          onChange={(e) => setLuck(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Time to Kill: 
        <input
          type="number"
          value={timeToKill}
          onChange={(e) => setTimeToKill(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Hits per Kill: 
        <input
          type="number"
          value={hitsPerKill}
          onChange={
            (e) => {
              setHitsPerKill(Number(e.target.value));
            }
          }
        />
      </label>
      <br />
      <h3>Malachitic Unmaker</h3>
      <label>
        Check if currently owned: 
        <input
          type="checkbox"
          checked={malachiticUnmakerOwnedState}
          onChange={(e) => setOwnedState(e.target.checked)}
        />
      </label>
      <br />
      <label>
        Level: 
        <input
          type="number"
          value={malachiticUnmakerLevel}
          onChange={(e) => setLevel(Number(e.target.value))}
        />
      </label>
      <br /><h3>Simulate:</h3>
      <label>
        Held: 
        <input
          type="checkbox"
          checked={malachiticUnmakerHeldState}
          onChange={(e) => setHeldState(e.target.checked)}
        />
      </label>
      <label>
        Skill:  
        <input
          type="checkbox"
          checked={malachiticUnmakerSkillState}
          onChange={(e) => setSkillState(e.target.checked)}
        />
      </label>
      <hr />
      <h2>Results</h2>
      <pre>{JSON.stringify(malachiticUnmaker, null, 2)}</pre>
      <pre>{JSON.stringify(solveKeys(), null, 2)}</pre>
    </div>
  );
}
