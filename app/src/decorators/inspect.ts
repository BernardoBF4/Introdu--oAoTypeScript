export function inspect() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const meodo_original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const retorno = meodo_original.apply(this, args);

      console.log(`--- MÉTODO: ${propertyKey}`);
      console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
      console.log(`------ Retorno: ${retorno}`);

      return retorno;
    }

    return descriptor;
  }
}