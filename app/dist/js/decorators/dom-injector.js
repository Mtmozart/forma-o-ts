export function DomInjector(seletor) {
    return function (target, propertyKey) {
        let element = null;
        const getter = function () {
            if (!element) {
                element = document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o ${seletor} para injetar em ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=dom-injector.js.map