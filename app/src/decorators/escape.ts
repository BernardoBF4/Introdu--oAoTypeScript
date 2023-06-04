export function escapar(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodo_original = descriptor.value;

  descriptor.value = function (...args: Array<any>) {
    let retorno = metodo_original.apply(this, args);

    if (typeof retorno === 'string') {
      console.log(`@Escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    return retorno;
  }
  console.log('####################');
  console.log('Descriptor: ', descriptor);
  console.log('Property key: ', propertyKey);
  console.log('Target: ', target);
  console.log('####################');
  return descriptor;
}