function calcularAreaRetangulo(base, altura) {
    var area = base * altura;
    return area;
  }
  
  function calcularPerimetroRetangulo(base, altura) {
    var perimetro = 2 * (base + altura);
    return perimetro;
  }
  
  function calcularAreaQuadrado(lado) {
    var area = lado * lado;
    return area;
  }
  
  function calcularPerimetroQuadrado(lado) {
    var perimetro = 4 * lado;
    return perimetro;
  }
    
  function realizarLogin(usuario, senha) {
    if (usuario === "admin" && senha === "senha123") {
      console.log("Login bem-sucedido!");
    } else {
      console.log("Credenciais inválidas!");
    }
  }
    
  function calcularFibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
    }
  }
    
  function calcularMedia(valores) {
    var soma = 0;
    for (var i = 0; i < valores.length; i++) {
      soma += valores[i];
    }
    var media = soma / valores.length;
    return media;
  }
    
  function dividirNumeros(a, b) {
    try {
      var resultado = a / b;
    } catch (error) {
      console.log("Erro: divisão por zero");
    }
    return resultado;
  }
  
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function main() {
    var retanguloArea = calcularAreaRetangulo(5, 10);
    var retanguloPerimetro = calcularPerimetroRetangulo(5, 10);
  
    var quadradoArea = calcularAreaQuadrado(7);
    var quadradoPerimetro = calcularPerimetroQuadrado(7);
  
    realizarLogin("admin", "senha123");
  
    var fibonacciResultado = calcularFibonacci(10);
  
    var valores = [1, 2, 3, 4, 5];
    var media = calcularMedia(valores);
  
    var resultadoDivisao = dividirNumeros(10, 0);
  
    var resultadoMultiplicacao = multiplicar(3, 4);
  }
  
  main();
  