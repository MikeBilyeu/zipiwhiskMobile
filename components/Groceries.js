import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/zipiwhisk.png")}
        style={{ width: 70, height: 15 }}
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{"Groceries"}</Text>
      </View>
    </View>
  );
}
const Groceries = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState(groceryData.groceries);
  const inputField = useRef(null);

  const renderList = (list) => {
    return list.map((i, index) => (
      <View key={uuidv4()} style={styles.ingredientContainer}>
        <View style={styles.ingredientWrapper}>
          <Text style={styles.ingredientName}>{i.ingredient}</Text>
          <Text style={styles.ingredientAmount}>{i.amount}</Text>
        </View>
        <Image source={{ uri: i.image }} style={styles.ingredientImage} />
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <Header />
        <ScrollView style={styles.listContainer}>
          {renderList(list)}

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              ref={inputField}
              returnKeyType="done"
              //blurOnSubmit={false}
              onBlur={() => {
                inputText &&
                  setList(
                    [
                      ...list,
                      {
                        amount: null,
                        ingredient: inputText,
                        image: null,
                      },
                    ],
                    setInputText("")
                  );
              }}
            />
          </View>

          <TouchableOpacity
            style={styles.addItemBtn}
            onPress={() => inputField.current.focus()}
          ></TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: 2,
    height: 65,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleWrapper: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  titleText: {
    textAlign: "left",
    fontFamily: "AvenirNextDemiBold",
    fontSize: 30,
    color: "#313131",
    marginHorizontal: 10,
  },

  listContainer: {
    width: "100%",
    marginVertical: 10,
  },

  ingredientContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  ingredientImage: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  ingredientWrapper: {
    justifyContent: "space-between",
    flex: 1,
  },
  ingredientName: {
    fontSize: 18,
    fontFamily: "AvenirNextBold",
    color: "#313131",
  },
  ingredientAmount: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: "AvenirNextRegular",
    color: "#707070",
  },

  inputContainer: {
    paddingHorizontal: 15,
  },
  inputText: {
    height: 50,
    fontSize: 20,
    fontFamily: "AvenirNextRegular",
    color: "#313131",
  },

  addItemBtn: {
    height: "100%",
    minHeight: 300,
  },
});

export default Groceries;

const groceryData = {
  groceries: [
    {
      amount: "¼ cup",
      ingredient: "All-purpose flour",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmaF1M32DN3r7ciBu7pGxbv_jGrBq-6vlfc8F_JZlyJY8lfcFK59_LaCp0Ac_p52crRxruIi5&usqp=CAc",
    },
    {
      amount: "1 Tbsp + 2 tsp",
      ingredient: "Vegatable oil ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WIIweap2Y7yXbnNS8qTVs5kI_HRDX9WlpzYTy8M12YBFwR20vfVL2zpRwc4&usqp=CAc",
    },
    {
      amount: "1 cup",
      ingredient: "Red wine",
      image: "https://images.heb.com/is/image/HEBGrocery/000538201",
    },
    {
      amount: "2",
      ingredient: "Bay leaves",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Indian_bay_leaf_-_tejpatta_-_indisches_Lorbeerblatt.jpg",
    },
  ],
};
