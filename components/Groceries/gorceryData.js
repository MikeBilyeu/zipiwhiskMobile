import { v4 as uuidv4 } from "uuid";
const groceryData = {
  groceries: [
    {
      id: uuidv4(),
      amount: "¼ cup",
      ingredient: "All-purpose flour",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmaF1M32DN3r7ciBu7pGxbv_jGrBq-6vlfc8F_JZlyJY8lfcFK59_LaCp0Ac_p52crRxruIi5&usqp=CAc",
    },
    {
      id: uuidv4(),
      amount: "1 Tbsp + 2 tsp",
      ingredient: "Vegatable oil ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WIIweap2Y7yXbnNS8qTVs5kI_HRDX9WlpzYTy8M12YBFwR20vfVL2zpRwc4&usqp=CAc",
    },
    {
      id: uuidv4(),
      amount: "1 cup",
      ingredient: "Red wine",
      image: "https://images.heb.com/is/image/HEBGrocery/000538201",
    },
    {
      id: uuidv4(),
      amount: "2",
      ingredient: "Bay leaves",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/37/Indian_bay_leaf_-_tejpatta_-_indisches_Lorbeerblatt.jpg",
    },
  ],
};

export default groceryData;
