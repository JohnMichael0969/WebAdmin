<template>
  <div>
    Total number of users: {{ Persons }}
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  data () {
    return {
      Persons: [],
      Persons: 0
    }
  },
  created () {
    firebase.database().ref('Persons').on('value', snapshot => {
      this.Persons = snapshot.val()
      this.Persons = this.Persons.length
    })
  }
}
</script>
