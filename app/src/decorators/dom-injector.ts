export function DomInjector(seletor: string){
  return function(
    target: any,
    propertyKey: string

  ){
    let element: HTMLElement | null = null
    const getter = function (){
      if(!element){
        element = <HTMLElement>document.querySelector(seletor);
        console.log(`Buscando elemento do DOM com o ${seletor} para injetar em ${propertyKey}`)
      }
     
   
      return element; 
    }

    Object.defineProperty(target, propertyKey, {
      get: getter 
    })
  }
}