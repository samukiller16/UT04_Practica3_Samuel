import { RestaurantsManager, Coordinate } from "./main.js";
function testRestaurant() {
  const restManager = RestaurantsManager.getInstance();
  const rest2 = RestaurantsManager.getInstance();
  //Devuelve true, ambos son el mismo objeto
  console.log(restManager == rest2);

  const category1 = restManager.createCategory("Entrante","Entrantes del menú");
  const category2 = restManager.createCategory("Postre", "Postres del menú");
  const category3 = restManager.createCategory("Categoría nueva", "Categoría nueva");
  const allergen1 = restManager.createAllergen("Gluten", "Contiene gluten");
  const menu1 = restManager.createMenu("Menú del día", "Menú variado");
  const dish1 = restManager.createDish(
    "Plato1",
    "Descripción del Plato1",
    ["Ingrediente1", "Ingrediente2"],
    "imagen1.jpg"
  );
  const dish2 = restManager.createDish(
    "Plato2",
    "Descripción del Plato2",
    ["Ingrediente3", "Ingrediente4"],
    "imagen2.jpg"
  );
  const restaurant1 = restManager.createRestaurant(
    "Restaurante1",
    "Descripción del Restaurante1",
    new Coordinate(40.7128, -74.006)
  );

  // Añadir categorías (se puede encadenar)
  // Añadir alérgenos
  restManager.addCategory(category1, category2).addAllergen(allergen1);

  // Añadir menús
  restManager.addMenu(menu1);

  // Añadir platos
  restManager.addDish(dish1, dish2);

  // Añadir restaurante
  restManager.addRestaurant(restaurant1);

  // Asignar categorías a plato
  restManager.assignCategoryToDish(dish1, category1, category3);
  restManager.assignCategoryToDish(dish2, category2);
  restManager.assignAllergenToDish(dish1, allergen1);

  // Mostrar información
  let iteradorAllergens = restManager.getterAllergens();
  console.log("\nAlérgenos:");
  for (const allergen of iteradorAllergens) {
    console.log(allergen.toString());
  }

  restManager.assignDishToMenu(menu1, dish1, dish2);
  let iteradorMenus = restManager.getterMenus();
  console.log("\nMenús:");
  for (const menu of iteradorMenus) {
    console.log(menu);
  }
  // Por algún motivo se imprime arriba también el menú después del cambio
  iteradorMenus = restManager.getterMenus();
  console.log("\nMenús tras cambiar platos:");
  restManager.changeDishesPositionsInMenu(menu1, dish2, dish1);
  for (const menu of iteradorMenus) {
    console.log(menu);
  }

  //Categoria
  let iteradorDishesFiltro = restManager.getDishesInCategory(category2);
  console.log("\nPlatos en Categoría "+category2.name+": ");
  for (const dish of iteradorDishesFiltro) {
    console.log(dish.dish.toString());
    console.log("  Categorías:");
    for (const category of dish.categories) {
      console.log("   - " + category.toString());
    }
    console.log("  Alérgenos:");
    for (const allergen of dish.allergens) {
      console.log("   - " + allergen.toString());
    }
  }

  iteradorDishesFiltro = restManager.getDishesWithAllergen(allergen1);
  console.log("\nPlatos con Alérgeno "+allergen1.name+": ");
  for (const dish of iteradorDishesFiltro) {
    console.log(dish.dish.toString());
    console.log("  Categorías:");
    for (const category of dish.categories) {
      console.log("   - " + category.toString());
    }
    console.log("  Alérgenos:");
    for (const allergen of dish.allergens) {
      console.log("   - " + allergen.toString());
    }
  }

  let iteradorDishes = restManager.getterDishes();
  console.log("\nPlatos:");
  for (const dish of iteradorDishes) {
    console.log(dish.dish.toString());
    console.log("  Categorías:");
    for (const category of dish.categories) {
      console.log("   - " + category.toString());
    }
    console.log("  Alérgenos:");
    for (const allergen of dish.allergens) {
      console.log("   - " + allergen.toString());
    }
  }

  restManager.removeCategory(category3);
  restManager.removeAllergen(allergen1);
  //Con esto hemos usado deassignCategory y Allergen indirectamente
  //También findDishes

  iteradorDishes = restManager.getterDishes();
  console.log("\nPlatos tras eliminar category y Allergen:");
  for (const dish of iteradorDishes) {
    console.log(dish.dish.toString());
    console.log("  Categorías:");
    for (const category of dish.categories) {
      console.log("   - " + category.toString());
    }
    console.log("  Alérgenos:");
    for (const allergen of dish.allergens) {
      console.log("   - " + allergen.toString());
    }
  }

  let iteradorRestaurants = restManager.getterRestaurants();
  console.log("\nRestaurantes:");
  for (const restaurant of iteradorRestaurants) {
    console.log(restaurant.toString());
  }
}
testRestaurant();
