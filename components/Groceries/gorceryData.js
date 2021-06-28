import { v4 as uuidv4 } from "uuid";
const groceryData = {
  groceries: [
    {
      id: uuidv4(),
      ingredient: "¼ cup All-purpose flour",
    },
    {
      id: uuidv4(),
      ingredient: "1 Tbsp + 2 tsp Vegatable oil ",
    },
    {
      id: uuidv4(),
      ingredient: "1 cup Red wine",
    },
    {
      id: uuidv4(),
      ingredient: "2 Bay leaves",
    },
  ],
};

export default groceryData;
