export const parseHourInput = (hr) => {
  console.log(hr);
  return hr;
};

export const parseMinuteInput = (min) => {
  console.log(min);
  return min;
};

// 5     ->  00:05
// 55    ->  00:55
// 555   ->  05:55
// 5555  ->  55:55
//hours and mins can only be two digits long
// if mins becomes longer than 2 digits push the left text intot the hours
// if the mins get deleted remove from hours and insert back into mins
//
