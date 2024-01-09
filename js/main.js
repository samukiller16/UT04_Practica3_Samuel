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
    return this.#ingredients.join(', ');
  }

  toString() {
    return `Nombre: ${this.#name} | Descripción: ${this.#description} | Ingredientes: ${this.stringIngredientes()} | Imagen: ${this.#image}`;
  }
}
