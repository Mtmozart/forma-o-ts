  export function logarTempoDeExecucao(emSegundos: boolean = false){
    return function(
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor

    ){
      const metodoOriginal = descriptor.value;
      descriptor.value = function(...args: any[]){
        let divisor = 1;
        let unidade = 'milisegundos'
        if(emSegundos){
          divisor = 100;
          unidade = 'segundos'
        }
        const t1 = performance.now()
        const t2 = performance.now()
        const retorno = metodoOriginal.apply(this, args);
        console.log(`${propertyKey}, tempo de execução: ${(t2 - t1 /divisor)} ${unidade }`)
        return
      }
      return descriptor;
    }
  }