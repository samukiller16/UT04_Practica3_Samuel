class BaseException extends Error {
  constructor(message = "", fileName, lineNumber) {
    super(message, fileName, lineNumber);
    this.name = "BaseException";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BaseException);
    }
  }
}

//Excepción acceso inválido a constructor
class InvalidValueException extends BaseException {
  constructor(fileName, lineNumber) {
    super("No se ha introducido un valor obligatorio", fileName, lineNumber);
    this.name = "InvalidValueException";
  }
}

//Excepción acceso inválido a constructor
class InvalidAccessConstructorException extends BaseException {
  constructor(fileName, lineNumber) {
    super("Constructor can’t be called as a function.", fileName, lineNumber);
    this.name = "InvalidAccessConstructorException";
  }
}

class InvalidCategoryException extends BaseException {
  constructor(fileName, lineNumber) {
    super(
      "La categoría no puede ser null o no es un objeto Category.",
      fileName,
      lineNumber
    );
    this.name = "InvalidCategoryException";
  }
}

class ExistingCategoryException extends BaseException {
  constructor(fileName, lineNumber) {
    super("La categoría ya existe", fileName, lineNumber);
    this.name = "InvalidCategoryException";
  }
}

class UnregisteredCategoryException extends BaseException {
  constructor(fileName, lineNumber) {
    super("La categoría no está registrada", fileName, lineNumber);
    this.name = "UnregisteredCategoryException";
  }
}

class InvalidMenuException extends BaseException {
  constructor(fileName, lineNumber) {
    super(
      "El menú no puede ser null o no es un objeto Menu.",
      fileName,
      lineNumber
    );
    this.name = "InvalidMenuException";
  }
}

class ExistingMenuException extends BaseException {
  constructor(fileName, lineNumber) {
    super("El menú ya existe", fileName, lineNumber);
    this.name = "ExistingMenuException";
  }
}

class UnregisteredMenuException extends BaseException {
  constructor(fileName, lineNumber) {
    super("El menú no está registrado", fileName, lineNumber);
    this.name = "UnregisteredMenuException";
  }
}

class InvalidAllergenException extends BaseException {
  constructor(fileName, lineNumber) {
    super(
      "El alérgeno no puede ser null o no es un objeto Menu.",
      fileName,
      lineNumber
    );
    this.name = "InvalidAllergenException";
  }
}

class ExistingAllergenException extends BaseException {
  constructor(fileName, lineNumber) {
    super("El alérgeno ya existe", fileName, lineNumber);
    this.name = "ExistingAllergenException";
  }
}

class UnregisteredAllergenException extends BaseException {
  constructor(fileName, lineNumber) {
    super("El alérgeno no está registrado", fileName, lineNumber);
    this.name = "UnregisteredAllergenException";
  }
}
