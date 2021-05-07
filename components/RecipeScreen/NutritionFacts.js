import React, { useRef, useEffect } from "react";

import { StyleSheet, View, Text, Dimensions, Animated } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Svg, { G, Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const NutritionFacts = ({
  data,
  percentage = 10,
  radius = (screenWidth - 50) / 2,
  strokeWidth = wp("3%"),
  duration = 700,
  delay = 100,
  textColor,
  max = 100,
}) => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const halfCircle = radius + strokeWidth;
  const circleCircumfrence = 2 * Math.PI * radius;

  const strokeDashoffset = circleCircumfrence - (circleCircumfrence * 22) / 100;

  // const animation = (toValue) => {
  //   return Animated.timing(AnimatedValue, {
  //     toValue,
  //     duration,
  //     delay,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     animation(toValue === 0 ? percentage : 0);
  //   });
  // };

  // useEffect(() => {
  //   animation(percentage);

  //   AnimatedValue.addListener((v) => {
  //     if (circleRef?.current) {
  //       const maxPerc = (100 * v.value) / max;
  //       const strokeDashoffset =
  //         circleCircumfrence - (circleCircumfrence * maxPerc) / 100;

  //       circleRef.current.setNativeProps({
  //         strokeDashoffset,
  //       });
  //     }
  //   });
  // });
  return (
    <View style={styles.container}>
      <View style={styles.titleConatainer}>
        <Text style={styles.title}>Nutrition Facts</Text>
        <Text style={styles.subTitle}>Amount Per Serving</Text>
      </View>

      <View style={styles.caloriesContainer}>
        <View style={{ position: "absolute" }}>
          <Text style={styles.caloriesNum}>{data.nutrition.calories}</Text>
          <Text style={styles.caloriesText}>Calories</Text>
        </View>

        <Svg
          width={radius * 2}
          height={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
          <G rotation="-90" origin={(halfCircle, halfCircle)}>
            <Circle
              cx="50%"
              cy="50%"
              stroke="#F2F2F2"
              strokeWidth={strokeWidth}
              r={radius}
              fill="transparent"
            />

            <AnimatedCircle
              //Carbs
              ref={circleRef}
              cx="50%"
              cy="50%"
              stroke="#3870ED"
              strokeWidth={strokeWidth}
              r={radius}
              fill="transparent"
              strokeDasharray={circleCircumfrence}
              strokeDashoffset={0}
            />

            <AnimatedCircle
              //Fats
              ref={circleRef}
              cx="50%"
              cy="50%"
              stroke="#EF476F"
              strokeWidth={strokeWidth}
              r={radius}
              fill="transparent"
              strokeDasharray={circleCircumfrence}
              strokeDashoffset={
                circleCircumfrence -
                (circleCircumfrence * (22.72 + 18.18)) / 100
              }
            />

            <AnimatedCircle
              //Protien
              ref={circleRef}
              cx="50%"
              cy="50%"
              stroke="#06D6A0"
              strokeWidth={strokeWidth}
              r={radius}
              fill="transparent"
              strokeDasharray={circleCircumfrence}
              strokeDashoffset={
                circleCircumfrence - (circleCircumfrence * 18.18) / 100
              }
            />
          </G>
        </Svg>
      </View>

      <View style={styles.macrosContainer}>
        <View style={styles.macroWrapper}>
          <View style={[styles.colorKey, styles.protienColor]}></View>
          <Text style={styles.macroText}>Protiens</Text>
          <Text style={styles.macroNum}>{data.nutrition.protiens}</Text>
        </View>
        <View style={styles.macroWrapper}>
          <View style={[styles.colorKey, styles.fatColor]}></View>
          <Text style={styles.macroText}>Fats</Text>
          <Text style={styles.macroNum}>{data.nutrition.fats}</Text>
        </View>
        <View style={styles.macroWrapper}>
          <View style={[styles.colorKey, styles.carbColor]}></View>
          <Text style={styles.macroText}>Carbs</Text>
          <Text style={styles.macroNum}>{data.nutrition.carbs}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: hp("90%"),
    marginVertical: wp("6%"),
  },
  title: {
    fontFamily: "AvenirNextBold",
    color: "#313131",
    fontSize: wp("7%"),
    textAlign: "center",
  },
  subTitle: {
    fontSize: wp("3.5%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
    marginVertical: wp("1.5%"),
  },
  caloriesContainer: {
    //borderWidth: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    // borderWidth: 12,
    // borderColor: "#3870ED",
    // backgroundColor: "transparent",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.4,
    // shadowRadius: 5,
    // borderRadius: 300,
    // width: screenWidth - 50,
    // height: screenWidth - 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  caloriesNum: {
    shadowOpacity: 0,
    fontSize: wp("18%"),
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  caloriesText: {
    fontSize: wp("3.5%"),
    fontFamily: "AvenirNextRegular",
    color: "#464646",
    textAlign: "center",
  },

  macrosContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp("4%"),
  },

  macroWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    height: wp("16%"),
  },
  colorKey: {
    width: wp("4.5%"),
    height: wp("4.5%"),
    borderRadius: wp("1.2%"),
  },
  protienColor: {
    backgroundColor: "#06D6A0",
  },
  fatColor: {
    backgroundColor: "#EF476F",
  },
  carbColor: {
    backgroundColor: "#3870ED",
  },
  macroText: {
    textAlign: "center",
    fontSize: wp("3.5%"),
    fontFamily: "AvenirNextDemiBold",
    color: "#464646",
  },
  macroNum: {
    textAlign: "center",
    fontSize: wp("5%"),
    fontFamily: "AvenirNextBold",
    color: "#464646",
  },
});

export default NutritionFacts;
