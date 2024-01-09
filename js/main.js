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

const RestaurantsManager = (function () {
  let instantiated;
  function init() {
    //Inicialización del Singleton
    class RestaurantsManagerObj {
      constructor() {
        //La función se invoca con el operador new
        if (!new.target) throw new InvalidAccessConstructorException();
      }
    }

    let restMan = new RestaurantsManagerObj();
    Object.freeze(restMan);

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
