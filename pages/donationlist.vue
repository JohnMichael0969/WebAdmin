<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Donations List</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="item in items" :key="item.id">
                {{ item.name }}
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    // Connect to the database
    const db = firebase.database()

    // Write a query to retrieve the data
    const ref = db.ref('items')

    // Execute the query and process the data
    ref.once('value')
      .then(snapshot => {
        const data = snapshot.val()
        this.items = data
      })
  },
  watch: {
    items: {
      handler(newValue) {
        // Update the data in the database
        const db = firebase.database()
        const ref = db.ref('items')
        ref.update(newValue)
      },
      deep: true
    }
  }
}
</script>
