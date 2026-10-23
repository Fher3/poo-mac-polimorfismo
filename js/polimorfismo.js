// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {

  constructor() {
    
  }

  calcularArea() {
    
  }

  calcularPerimetro() {
    
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  

  constructor() {
    super("Rectángulo");
    
  }

  calcularArea() {
    
  }

  calcularPerimetro() {
    
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  

  constructor() {
  
  }

  calcularArea() {
    
  }

  calcularPerimetro() {
    
  }
}

// ==========================================
// 4: ZONA DE PRUEBAS
// ==========================================
