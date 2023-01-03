<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Campaign List</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(Campaigns, index) in Campaigns" :key="index">
                <v-list-item-title>{{ Campaigns.Title }}</v-list-item-title>
                <v-list-item-subtitle>{{ Campaigns.Description }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Campaigns.Target }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Campaigns.Location }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Campaigns.DriveStart }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Campaigns.DriveEnd }}</v-list-item-subtitle>
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
      Campaigns: []
    }
  },
  created() {
    database.ref('Campaigns').on('value', snapshot => {
      this.Campaigns = snapshot.val()
    })
  }
}
</script>
