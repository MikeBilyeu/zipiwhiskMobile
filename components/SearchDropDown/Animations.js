import { Animated } from "react-native";

const Animations = (
  dropDownOpen,
  pan,
  mount,
  setMount,
  backgroudnopacityValue
) => {
  //Open animation
  if (dropDownOpen && !mount) {
    setMount(true);
    Animated.spring(pan, {
      toValue: { x: 0, y: -285 },
      friction: 8,
      useNativeDriver: true,
    }).start();

    Animated.timing(backgroudnopacityValue, {
      toValue: 0.6,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }
  //close animation
  if (!dropDownOpen && mount) {
    Animated.timing(backgroudnopacityValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(pan, {
      toValue: { x: 0, y: -800 },
      duration: 200,
      delay: 100,
      useNativeDriver: true,
    }).start(() => {
      pan.flattenOffset();
      setMount(false);
    });
  }
};

export default Animations;
