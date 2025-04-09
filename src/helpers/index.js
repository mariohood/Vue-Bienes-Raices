
export const propertyPrice = (price) => 
    Number(price).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })   
