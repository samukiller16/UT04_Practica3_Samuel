// Objeto Dish
class Dish {
  #name = "";
  #description = "";
  #ingredients = [];
  #image = "";

  constructor(name, description, ingredients, image) {
    if (!name || name == "") {
      throw new InvalidValueException();
    }
    this.#name = name;
    this.#description = description;
    this.#ingredients = ingredients;
    this.#image = image;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get ingredients() {
    return this.#ingredients;
  }

  set ingredients(newIngredients) {
    this.#ingredients = newIngredients;
  }

  get image() {
    return this.#image;
  }

  set image(newImage) {
    this.#image = newImage;
  }
  //Método para pasar los ingredientes a un string
  stringIngredientes() {
    return this.#ingredients.join(", ");
  }

  toString() {
    return `Nombre: ${this.#name} | Descripción: ${
      this.#description
    } | Ingredientes: ${this.stringIngredientes()} | Imagen: ${this.#image}`;
  }
}

// Objeto Category
class Category {
  #name = "";
  #description = "";

  constructor(name, description) {
    if (!name || name == "") {
      throw new InvalidValueException();
    }
    this.#name = name;
    this.#description = description;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  toString() {
    return `Nombre de la categoría: ${this.#name} | Descripción: ${
      this.#description
    }`;
  }
}

// Objeto Allergen
class Allergen {
  #name = "";
  #description = "";

  constructor(name, description) {
    if (!name || name == "") {
      throw new InvalidValueException();
    }
    this.#name = name;
    this.#description = description;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  toString() {
    return `Nombre del alérgeno: ${this.#name} | Descripción: ${
      this.#description
    }`;
  }
}

// Objeto Menu
class Menu {
  #name = "";
  #description = "";

  constructor(name, description) {
    if (!name || name == "") {
      throw new InvalidValueException();
    }
    this.#name = name;
    this.#description = description;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  toString() {
    return `Nombre del menú: ${this.#name} | Descripción: ${this.#description}`;
  }
}

// Objeto Coordinate
class Coordinate {
  #latitude;
  #longitude;

  constructor(latitude, longitude) {
    if (
      !latitude ||
      !longitude ||
      typeof latitude !== "number" ||
      typeof longitude !== "number"
    ) {
      throw new InvalidValueException();
    }
    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  get latitude() {
    return this.#latitude;
  }

  set latitude(newLatitude) {
    this.#latitude = newLatitude;
  }

  get longitude() {
    return this.#longitude;
  }

  set longitude(newLongitude) {
    this.#longitude = newLongitude;
  }

  toString() {
    return `Latitud: ${this.#latitude} | Longitud: ${this.#longitude}`;
  }
}

// Objeto Restaurant
class Restaurant {
  #name = "";
  #description = "";
  #location;

  constructor(name, description, location) {
    this.#name = name;
    this.#description = description;
    this.#location = location;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  get location() {
    return this.#location;
  }

  set location(newLocation) {
    this.#location = newLocation;
  }

  toString() {
    return `Nombre del restaurante: ${this.#name} | Descripción: ${
      this.#description
    } | Ubicación: ${this.#location.toString()}`;
  }
}

// RestaurantsManager como singleton, solo se podrá instanciar una vez, si se trata de instanciar más se devolverá la misma instancia
const RestaurantsManager = (function () {
  let instantiated;
  function init() {
    //Inicialización del Singleton
    class RestaurantsManagerObj {
      #name;
      #categories = [];
      #allergens = [];
      #dishes = [];
      #menus = [];
      #restaurants = [];

      constructor(name, categories, allergens, dishes, menus, restaurants) {
        //La función se invoca con el operador new
        if (!new.target) throw new InvalidAccessConstructorException();

        this.#name = name;
        this.#categories = categories;
        this.#allergens = allergens;
        this.#dishes = dishes;
        this.#menus = menus;
        this.#restaurants = restaurants;
      }
      //Devuelve un iterador de categorías
      *getterCategories() {
        for (let i = 0; i < this.#categories.length; i++) {
          yield this.#categories[i];
        }
      }
      //Devuelve un iterador de menús
      *getterMenus() {
        for (let i = 0; i < this.#menus.length; i++) {
          yield this.#menus[i];
        }
      }
      //Devuelve un iterador de alérgenos
      *getterAllergens() {
        for (let i = 0; i < this.#allergens.length; i++) {
          yield this.#allergens[i];
        }
      }
      //Devuelve un iterador de restaurantes
      *getterRestaurants() {
        for (let i = 0; i < this.#restaurants.length; i++) {
          yield this.#restaurants[i];
        }
      }

      //Añadimos una categoría al array categories
      addCategory(...categories) {
        for (const category of categories) {
          // Si no es una categoría o es nula, la categoría es inválida
          if (!(category instanceof Category) || category == null) {
            throw new InvalidCategoryException();
          } else if (
            // Si ya existe, lanzamos otra excepción
            this.getPositionCategory(category) != -1
          ) {
            throw new ExistingCategoryException();
          } else {
            this.#categories.push(category);
          }
        }
        return this;
      }

      getPositionCategory(category) {
        return this.#categories.findIndex(
          (existingCategory) => existingCategory.name === category.name
        );
      }

      removeCategory(...categories) {
        for (const category of categories) {
          const index = this.getPositionCategory(category);

          if (index === -1) {
            // La categoría no existe, lanzar una excepción
            throw new UnregisteredCategoryException();
          }

          // Eliminar la categoría del array
          this.#categories.splice(index, 1);
        }
        return this;
      }

      getPositionMenu(menu){
        return this.#menus.findIndex(
          (menuObj) => menuObj.menu.name === menu.name
        );
      }

      addMenu(...menus){
        for (const menu of menus) {
          // Si no es un menu o es nulo, el menú es inválido
          if (!(menu instanceof Menu) || menu == null) {
            throw new InvalidMenuException();
          } else if (
            // Si ya existe, lanzamos otra excepción
            this.getPositionMenu(menu) != -1
          ) {
            throw new ExistingMenuException();
          } else {
            this.#menus.push({
              menu,
              dishes: []
            });
          }
        }
        return this;
      }

      removeMenu(...menus) {
        for (const menu of menus) {
          const index = this.getPositionMenu(menu);

          if (index === -1) {
            // El menú no existe, lanzar una excepción
            throw new UnregisteredMenuException();
          }

          // Eliminar menú del array
          this.#menus.splice(index, 1);
        }
        return this;
      }

      getPositionAllergen(allergen){
        return this.#allergens.findIndex(
          (existingAllergen) => existingAllergen.name === allergen.name
        );
      }

      addAllergen(...allergens){
        for (const allergen of allergens) {
          // Si no es un allergen o es nulo, el allergen es inválido
          if (!(allergen instanceof Allergen) || allergen == null) {
            throw new InvalidAllergenException();
          } else if (
            // Si ya existe, lanzamos otra excepción
            this.getPositionAllergen(allergen) != -1
          ) {
            throw new ExistingAllergenException();
          } else {
            this.#allergens.push(allergen);
          }
        }
        return this;
      }

      removeAllergen(...allergens) {
        for (const allergen of allergens) {
          const index = this.getPositionAllergen(allergen);

          if (index === -1) {
            // El menú no existe, lanzar una excepción
            throw new UnregisteredAllergenException();
          }

          // Eliminar menú del array
          this.#allergens.splice(index, 1);
        }
        return this;
      }
      
    }
    // Creamos nuevo RestaurantsManager
    let restMan = new RestaurantsManagerObj();
    // Lo congelamos para que no se modifique
    Object.freeze(restMan);
    // Lo devolvemos
    return restMan;
  }
  return {
    // Devuelve un objeto con el método getInstance
    getInstance: function () {
      if (!instantiated) {
        //Si la variable instantiated es undefined, primera ejecución, ejecuta init.
        instantiated = init(); //instantiated contiene el objeto único
      }
      return instantiated; //Si ya está asignado devuelve la asignación.
    },
  };
})();
