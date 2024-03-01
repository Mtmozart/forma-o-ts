//quando o decorator n recebe parâmetro e aplica sem abrir e fechar os parênteses
export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ){
    const methodOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
      const retorno = methodOriginal.apply(this, args)
      console.log(`--- Método${propertyKey}`)
      console.log(`------ Parâmetros${JSON.stringify(args)}`)
      console.log(`------ Retorno Parâmetros ${JSON.stringify(retorno)}`)
      return retorno
    }


    return descriptor;
  }
