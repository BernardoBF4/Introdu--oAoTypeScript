export function logarTempoDeExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodo_original = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodo_original.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} --> tempo de execução: ${(t2 - t1) / 1000} segundos.`);
            retorno;
        };
        return descriptor;
    };
}
