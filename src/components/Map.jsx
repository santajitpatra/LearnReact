import { useState } from "react";

var arr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Map = () => {
  const [arrCopy, setArrCopy] = useState(arr);
  const [check, setCheck] = useState(false);
  const [checkIndex, setCheckIndex] = useState();

  const handleDelete = (itemIndex) => {
    let newArr = arrCopy;
    let filteredArray = newArr.filter((element, i) => {
      return i !== itemIndex;
    });

    setArrCopy(filteredArray);
  };

  const handleCheckbox = (value, i) => {
    setCheck(!check);
    setCheckIndex(i);
  };
  return (
    <div>
      <ul>
        {arrCopy.map((element, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                onChange={(e) => handleCheckbox(!e.target.value, i)}
              />
              {element}
              {check && checkIndex === i && (
                <button onClick={() => handleDelete(i)}>Delete Item</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Map;
