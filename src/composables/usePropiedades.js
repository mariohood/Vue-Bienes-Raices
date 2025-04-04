import { computed } from 'vue'
import { collection } from 'firebase/firestore'
import { useFirestore, useCollection } from 'vuefire'

export default function nusePropiedades(){

  const db = useFirestore()
  const propiedadesCollection = useCollection(collection(db, 'propiedades')) 

  const propertyPrice = computed(() => {
    return (price) => 
      Number(price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })   
  })

  return {
    propiedadesCollection,
    propertyPrice
  }

}