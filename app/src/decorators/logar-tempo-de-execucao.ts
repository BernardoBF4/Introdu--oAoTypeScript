export function logarTempoDeExecucao(em_segundos: boolean = false) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodo_original = descriptor.value;

    descriptor.value = function (...args: Array<any>) {
      const t1 = performance.now();
      let divisor = 1;
      let unidade = 'milissegundos';

      if (em_segundos) {
        divisor = 1000;
        unidade = 'segundos';
      }

      const retorno = metodo_original.apply(this, args);

      const t2 = performance.now();
      console.log(`${propertyKey} --> tempo de execução: ${(t2 - t1) / divisor} ${unidade}.`);

      retorno
    }

    return descriptor;
  }
} 