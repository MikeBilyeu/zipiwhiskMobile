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
      toValue: { x: 0, y: 0 },
      friction: 8,
      useNativeDriver: true,
    }).start(() => pan.setValue({ x: 0, y: 0 }));

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
    }).start(() => setMount(false));

    Animated.timing(pan, {
      toValue: { x: 0, y: -500 },
      duration: 200,
      delay: 100,
      useNativeDriver: true,
    }).start(() => {
      pan.setValue({ x: 0, y: -500 });
      setMount(false);
    });
  }
};

export default Animations;
