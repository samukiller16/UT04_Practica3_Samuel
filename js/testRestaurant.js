function testRestaurant(){

    const rest = RestaurantsManager.getInstance();
    const rest2 = RestaurantsManager.getInstance();
    //Devuelve true, ambos son el mismo objeto
    console.log(rest == rest2);

    // Crear instancias de objetos
    const category1 = new Category("Entrante", "Entrantes del menú");
    const category2 = new Category("Postre", "Postres del menú");
    const allergen1 = new Allergen("Gluten", "Contiene gluten");
    const menu1 = new Menu("Menú del día", "Menú variado");
    const dish1 = new Dish("Plato1", "Descripción del Plato1", ["Ingrediente1", "Ingrediente2"], "imagen1.jpg");
    const dish2 = new Dish("Plato2", "Descripción del Plato2", ["Ingrediente3", "Ingrediente4"], "imagen2.jpg");
    const restaurant1 = new Restaurant("Restaurante1", "Descripción del Restaurante1", new Coordinate(40.7128, -74.0060));

    // Obtener instancia de RestaurantsManager
    const restaurantsManager = RestaurantsManager.getInstance();

    // Añadir categorías
    restaurantsManager.addCategory(category1, category2);

    // Añadir alérgenos
    restaurantsManager.addAllergen(allergen1);

    // Añadir menús
    restaurantsManager.addMenu(menu1);

    // Añadir platos
    restaurantsManager.addDish(dish1, dish2);

    // Añadir restaurante
    restaurantsManager.addRestaurant(restaurant1);

    // Asignar categorías a plato
    restaurantsManager.assignCategoryToDish(dish1, category1);
    restaurantsManager.assignCategoryToDish(dish2, category2);

    // Mostrar información
    let iteradorCategories = restaurantsManager.getterCategories()
    console.log("Categorías:");
    for (const category of iteradorCategories) {
      console.log(category.toString());
    }

    let iteradorAllergens = restaurantsManager.getterAllergens()
    console.log("\nAlérgenos:");
    for (const allergen of iteradorAllergens) {
      console.log(allergen.toString());
    }

    let iteradorMenus = restaurantsManager.getterMenus()
    console.log("\nMenús:");
    for (const menu of iteradorMenus) {
      console.log(menu.menu.toString());
    }
    
    let iteradorDishes = restaurantsManager.getterDishes()
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

    let iteradorRestaurants = restaurantsManager.getterRestaurants()
    console.log("\nRestaurantes:");
    for (const restaurant of iteradorRestaurants) {
      console.log(restaurant.toString());
    }
}
testRestaurant();