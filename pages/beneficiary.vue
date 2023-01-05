<template>
  <v-container>
    <h2>Beneficiaries List</h2><!--Ilisan ug donor and beneficiary list-->
    <v-data-table :items="Persons" :headers="headers" class="elevation-1">
      <template v-slot:item.Email="{ item }">
        {{ item.Email}}
      </template>
      <template v-slot:item.Password="{ item }">
        {{ item.Password }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data () {
    return {
      Persons: [],
      headers: [
        { text: 'Email', value: 'Email' },
        { text: 'Password', value: 'Password' },
      ]
    }
  },
  created () {
    firebase.database().ref('Persons').on('value', snapshot => {
      this.Persons = Object.values(snapshot.val())
    })
  }
}
</script>
