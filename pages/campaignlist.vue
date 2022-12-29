<template>
  <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid container">
          <h3 class="text-dark mb-1" style="text-align: center;font-family: Biryani, sans-serif;font-weight: bold;padding: 9px;margin: 5px;">
                  Campaign List
                </h3>
        </div>
         <v-data-table :headers="headers" :items="items" />
      </div>
     </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data() {
    return {
      headers: [],
      items: []
    }
  },
  async asyncData({ $firebaseRef }) {
    const PersonsRef = $firebaseRef('Persons')
    const snapshot = await Persons.once('value')
    return {
      Persons: snapshot.val()
    }
  }
}
</script>

