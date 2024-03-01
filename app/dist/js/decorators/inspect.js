export function inspect(target, propertyKey, descriptor) {
    const methodOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = methodOriginal.apply(this, args);
        console.log(`--- Método${propertyKey}`);
        console.log(`------ Parâmetros${JSON.stringify(args)}`);
        console.log(`------ Retorno Parâmetros ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map