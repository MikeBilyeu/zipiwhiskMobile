import { Animated } from "react-native";

const Animations = (dropDownOpen, pan, mount, setMount) => {
  //Open animation
  if (dropDownOpen && !mount) {
    setMount(true);
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      friction: 8.5,
      useNativeDriver: true,
    }).start(() => pan.setValue({ x: 0, y: 0 }));
  }
  //close animation
  if (!dropDownOpen && mount) {
    Animated.timing(pan, {
      toValue: { x: 0, y: -450 },
      duration: 200,
      delay: 0,
      useNativeDriver: true,
    }).start(() => {
      pan.setValue({ x: 0, y: -450 });
      setMount(false);
    });
  }
};

export default Animations;
