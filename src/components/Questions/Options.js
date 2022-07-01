import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../App';

export const Options = () => {
  const { optionsPoints, setOptionsPoints } = useContext(AppContext);
  const [optionOneChecked, setOptionOneChecked] = useState(false);
  const [optionTwoChecked, setOptionTwoChecked] = useState(false);
  const [optionThreeChecked, setOptionThreeChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(!!optionOneChecked);
    console.log(optionsPoints);
  }, [optionOneChecked, optionTwoChecked, optionThreeChecked]);

  //Try to remove label and add label beside input
  return (
    <form>
      <label>
        <input
          type="checkbox"
          checked={optionOneChecked}
          value={optionOneChecked}
          onChange={() => {
            setOptionOneChecked(!optionOneChecked);
            if (!optionOneChecked) {
              setOptionsPoints((prevState) => prevState + 2);
            }
            if (optionOneChecked) {
              setOptionsPoints((prevState) => prevState - 2);
            }
          }}
        />
        Option 1
      </label>

      <label>
        <input
          type="checkbox"
          checked={optionTwoChecked}
          onChange={() => {
            setOptionTwoChecked(!optionTwoChecked);
            if (!optionTwoChecked) {
              setOptionsPoints((prevState) => prevState + 2);
            }
            if (optionTwoChecked) {
              setOptionsPoints((prevState) => prevState - 2);
            }
          }}
        />
        Option 2
      </label>

      <label>
        <input
          type="checkbox"
          checked={optionThreeChecked}
          onChange={() => {
            setOptionThreeChecked(!optionThreeChecked);
            if (!optionThreeChecked) {
              setOptionsPoints((prevState) => prevState + 2);
            }
            if (optionThreeChecked) {
              setOptionsPoints((prevState) => prevState - 2);
            }
          }}
        />
        Option 3
      </label>

      <button onClick={() => navigate('/result')}>next</button>
    </form>
  );
};
