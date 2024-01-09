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
class InvalidAccessConstructorException extends BaseException {
  constructor(fileName, lineNumber) {
    super("Constructor can’t be called as a function.", fileName, lineNumber);
    this.name = "InvalidAccessConstructorException";
  }
}

class InvalidCategoryException extends BaseException {
    constructor(fileName, lineNumber) {
        super("La categoría no puede ser null o no es un objeto Category.", fileName, lineNumber);
        this.name = "InvalidCategoryException";
    }
}

class ExistingCategoryException extends BaseException {
    constructor(fileName, lineNumber) {
        super("La categoría ya existe", fileName, lineNumber);
        this.name = "InvalidCategoryException";
    }
}



class InvalidMenuException extends BaseException {
    constructor(fileName, lineNumber) {
        super("El menú no puede ser null o no es un objeto Menu.", fileName, lineNumber);
        this.name = "ExistingCategoryException";
    }
}

class ExistingCategoryException extends BaseException {
    constructor(fileName, lineNumber) {
        super("El menú ya existe", fileName, lineNumber);
        this.name = "InvalidCategoryException";
    }
}