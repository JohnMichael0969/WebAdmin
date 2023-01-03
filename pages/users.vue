<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Users List</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(Persons, index) in Persons" :key="index">
                <v-list-item-title>{{ Persons.Email }}</v-list-item-title>
                <v-list-item-subtitle>{{ Persons.Password }}</v-list-item-subtitle>
                
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { database } from '~/plugins/firebase'

export default {
  data() {
    return {
      Persons: []
    }
  },
  created() {
    database.ref('Persons').on('value', snapshot => {
      this.Persons = snapshot.val()
    })
  }
}
</script>
