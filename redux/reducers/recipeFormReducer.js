import {
  MEDIA_CHANGE,
  RECIPE_NAME_CHANGE,
  SERVINGS_CHANGE,
  INGREDIENTS_CHANGE,
  INSTRUCTIONS_CHANGE,
  TIME_HR_CHANGE,
  TIME_MIN_CHANGE,
  KEYWORDS_CHANGE,
  CATEGORIES_CHANGE,
} from "../constants";

const initialState = {
  id: null,
  media_url:
    "file:///Users/Bilyeu/Library/Developer/CoreSimulator/Devices/25FF060A-F7CD-4C77-944F-99BEC79F6F35/data/Containers/Data/Application/D68D1413-1B03-480B-BE1B-D36D74DFAD2D/Library/Caches/ExponentExperienceData/%2540anonymous%252Fzipiwhisknative-3fb95155-5d04-4b8a-8e04-90842a839399/ImagePicker/E0410727-E816-4EC0-95FD-3AA3731A1B6D.jpg",
  media_type: "image",
  recipe_name: "Banana Bread",
  servings: "10",
  ingredients:
    "2 to 3 medium (7-8inch) very ripe bananas, peeled (about 1 1/4 to 1 1/2 cups mashed)\n1/3 cup butter, unsalted or salted, melted\n1/2 teaspoon baking soda\n1 pinch salt\n3/4 cup sugar (1/2 cup if you would like it less sweet, 1 cup if more sweet)\n1 large egg, beaten\n1 teaspoon vanilla extract\n1 1/2 cups all purpose flour",
  instructions:
    "Preheat the oven to 350°F (175°C), and butter a 4x8-inch loaf pan.\n\nIn a mixing bowl, mash the ripe bananas with a fork until completely smooth. Stir the melted butter into the mashed bananas.\n\nMix in the baking soda and salt. Stir in the sugar, beaten egg, and vanilla extract. Mix in the flour.\n\nPour the batter into your prepared loaf pan. Bake for 50 minutes to 1 hour at 350°F (175°C), or until a toothpick or wooden skewer inserted into the center comes out clean. A few dry crumbs are okay; streaks of wet batter are not. If the outside of the loaf is browned but the center is still wet, loosely tent the loaf with foil and continue baking until the loaf is fully baked.\n\nRemove from oven and let cool in the pan for a few minutes. Then remove the banana bread from the pan and let cool completely before serving. Slice and serve. (A bread knife helps to make slices that aren't crumbly. Wrapped well, the banana bread will keep at room temperature for 4 days. For longer storage, refrigerate the loaf up to 5 days, or freeze it.",
  timeHours: "1",
  timeMins: "05",
  keywords: "Bread, baking",
  categories: [
    { name: "Breakfast", selected: false },
    { name: "Lunch/Dinner", selected: false },
    { name: "Snack", selected: false },
    { name: "Dessert", selected: true },
    { name: "Beverage", selected: false },
  ],
};

const recipeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_NAME_CHANGE:
      return { ...state, recipe_name: action.payload };
    case MEDIA_CHANGE:
      return {
        ...state,
        media_url: action.payload.media_url,
        media_type: action.payload.media_type,
      };
    case SERVINGS_CHANGE:
      return { ...state, servings: action.payload };
    case INGREDIENTS_CHANGE:
      return { ...state, ingredients: action.payload };
    case INSTRUCTIONS_CHANGE:
      return { ...state, instructions: action.payload };
    case TIME_HR_CHANGE:
      return {
        ...state,
        timeHours: action.payload,
      };
    case TIME_MIN_CHANGE:
      return {
        ...state,
        timeMins: action.payload,
      };
    case KEYWORDS_CHANGE:
      return { ...state, keywords: action.payload };
    case CATEGORIES_CHANGE:
      let i = action.payload;
      let newList = [...state.categories];
      newList[i].selected = !newList[i].selected;
      return { ...state, categoires: newList };
    default:
      return state;
  }
};
export default recipeFormReducer;
