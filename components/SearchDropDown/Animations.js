import { Animated } from "react-native";

const Animations = (
  dropDownOpen,
  dropDownValue,
  mount,
  setMount,
  opacityValue,
  backgroudnopacityValue
) => {
  if (dropDownOpen && !mount) {
    setMount(true);
    Animated.spring(dropDownValue, {
      toValue: -10,
      friction: 8,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 250,
      delay: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(backgroudnopacityValue, {
      toValue: 0.6,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }
  if (!dropDownOpen && mount) {
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 1,
      useNativeDriver: true,
    }).start();
    Animated.timing(backgroudnopacityValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(dropDownValue, {
      toValue: -600,
      duration: 200,
      delay: 100,
      useNativeDriver: true,
    }).start(() => setMount(false));
  }
};

export default Animations;
