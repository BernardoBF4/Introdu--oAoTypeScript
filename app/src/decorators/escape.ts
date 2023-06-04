export function escapar(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodo_original = descriptor.value;

  descriptor.value = function (...args: Array<any>) {
    let retorno = metodo_original.apply(this, args);

    if (typeof retorno === 'string') {
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    return retorno;
  }

  return descriptor;
}