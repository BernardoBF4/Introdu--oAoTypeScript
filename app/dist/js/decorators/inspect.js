export function inspect() {
    return function (target, propertyKey, descriptor) {
        const meodo_original = descriptor.value;
        descriptor.value = function (...args) {
            const retorno = meodo_original.apply(this, args);
            console.log(`--- MÉTODO: ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            console.log(`------ Retorno: ${retorno}`);
            return retorno;
        };
        return descriptor;
    };
}
