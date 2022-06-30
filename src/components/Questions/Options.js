import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import { AppContext } from '../../App';

export const Options = () => {
  const { optionsPoints, setOptionsPoints } = useContext(AppContext);
  const [optionOneChecked, setOptionOneChecked] = useState(false);
  const [optionTwoChecked, setOptionTwoChecked] = useState(false);
  const [optionThreeChecked, setOptionThreeChecked] = useState(false);

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
          onChange={(e) => {
            setOptionOneChecked(!optionOneChecked);
            if (e.target.value) {
              setOptionsPoints((prevState) => prevState + 2);
            }
            if (optionOneChecked) {
              setOptionsPoints((prevState) => prevState - 4);
            }
          }}
        />
        Option 1
      </label>

      <label>
        <input
          type="checkbox"
          checked={optionTwoChecked}
          onChange={(e) => {
            setOptionTwoChecked(!optionTwoChecked);
            if (e.target.value) {
              setOptionsPoints((prevState) => prevState + 2);
            }
            if (optionTwoChecked) {
              setOptionsPoints((prevState) => prevState - 4);
            }
          }}
        />
        Option 2
      </label>

      <label>
        <input
          type="checkbox"
          checked={optionThreeChecked}
          onChange={(e) => {
            setOptionThreeChecked(!optionThreeChecked);
            if (e.target.value) {
              setOptionsPoints((prevState) => prevState + 2);
            }
            if (optionThreeChecked) {
              setOptionsPoints((prevState) => prevState - 4);
            }
          }}
        />
        Option 3
      </label>

      <button type="submit">next</button>
    </form>
  );
};
