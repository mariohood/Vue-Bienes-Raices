import { defineStore } from 'pinia'
import { useFirebaseAuth } from 'vuefire'
import { signInWithEmailAndPassword } from 'firebase/auth'


export const useAuthStore = defineStore('auth', () => {

  const auth = useFirebaseAuth()

  const login = ({email, password}) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential)
      })
      .catch(error => {
        console.error(error.code)
      })
  }

  return {
    login
  }


})