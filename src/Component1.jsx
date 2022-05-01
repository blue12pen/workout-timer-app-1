import { Howl, Howler } from 'howler';
import { useState } from 'react';

const Component1 = () => {
  Howler.volume(1.0);

  const startSound = new Howl({
    src: ['StartSound.mp3'],
    html5: true,
    loop: false,
  });

  const pauseSound = new Howl({
    src: ['PauseSound.mp3'],
    html5: true,
    loop: false,
  });

  const defaultExcercisePeriod = 20;
  const defaultRestingPeriod = 60;
  const defaultnumberOfExcercises = 4;

  const [excercisePeriod, setExcercisePeriod] = useState(defaultExcercisePeriod);
  const [restingPeriod, setRestingPeriod] = useState(defaultRestingPeriod);
  const [numberOfExcercises, setNumberOfExcercises] = useState(defaultnumberOfExcercises);

  const delays = [
    2000,
    2000 + excercisePeriod * 1000,
    2000 + excercisePeriod * 1000 + restingPeriod * 1000,
    2000 + excercisePeriod * 1000 + restingPeriod * 1000 + excercisePeriod * 1000,
    2000 +
      excercisePeriod * 1000 +
      restingPeriod * 1000 +
      excercisePeriod * 1000 +
      restingPeriod * 1000,
  ];
  function run() {
    setTimeout(() => {
      startSound.play();
    }, delays[0]);

    setTimeout(() => {
      pauseSound.play();
    }, delays[1]);

    setTimeout(() => {
      startSound.play();
    }, delays[2]);

    setTimeout(() => {
      pauseSound.play();
    }, delays[3]);

    setTimeout(() => {
      startSound.play();
    }, delays[4]);
  }

  return (
    <div className="component1">
      <div className="periods">
        <div className="periodDivs">
          <input type="number" min={0} />
          <div className="excercisePeriod">{excercisePeriod} s</div>
        </div>
        <div className="periodDivs">
          <input type="number" min={0} />
          <div className="restingPeriod">{restingPeriod} s</div>
        </div>
      </div>
      <hr />
      <div className="buttonDiv">
        <button className="start" onClick={() => run()}>
          START
        </button>
      </div>
    </div>
  );
};

export default Component1;
