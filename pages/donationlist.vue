<template>
  <v-container>
    <h2>Donations List</h2>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Food Expiry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Food Prepared
            </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(Donations, index) in Donations" :key="index">
                <v-list-item-title>Title{{ Donations.Title }}</v-list-item-title>
                <v-list-item-subtitle>{{ Donations.Description }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Donations.Date  }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Donations.Address }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Donations.FoodExpiry }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Donations.FoodPrepared }}</v-list-item-subtitle>
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
      Donations: []
    }
  },
  created() {
    database.ref('Donations').on('value', snapshot => {
      this.Donations = snapshot.val()
    })
  }
}
</script>

