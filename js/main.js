// Objeto Dish
class Dish {
  #name = "";
  #description = "";
  #ingredients = [];
  #image = "";

  constructor(name, description, ingredients, image) {
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
      *getCategories() {
        for (let i = 0; i < this.#categories.length; i++) {
          yield this.#categories[i];
        }
      }
      //Devuelve un iterador de menús
      *getMenus() {
        for (let i = 0; i < this.#menus.length; i++) {
          yield this.#menus[i];
        }
      }
      //Devuelve un iterador de alérgenos
      *getAllergens() {
        for (let i = 0; i < this.#allergens.length; i++) {
          yield this.#allergens[i];
        }
      }
      //Devuelve un iterador de restaurantes
      *getRestaurants() {
        for (let i = 0; i < this.#restaurants.length; i++) {
          yield this.#restaurants[i];
        }
      }

      //Añadimos una categoría al array categories
      addCategory(...categoriesadded) {
        for (const category of categoriesadded) {
          // Si no es una categoría o es nula, la categoría es inválida
          if (!(category instanceof Category) || category == null) {
            throw new InvalidCategoryException();
          } else if (
            // Si ya existe, lanzamos otra excepción
            this.#categories.some(
              (existingCategory) => existingCategory.name === category.name
            )
          ) {
            throw new ExistingCategoryException();
          } else {
            this.#categories.push(category);
          }
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
