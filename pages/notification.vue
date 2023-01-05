<template>

  <v-container>
    <h2>Notifications List</h2>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>&nbsp;&nbsp;&nbsp;
            Sender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Target&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Description&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Status
            </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(Notification, index) in Notification" :key="index">
                <v-list-item-title>{{ Notification.Sender }}</v-list-item-title>
                <v-list-item-subtitle>{{ Notification.Date }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Notification.Target  }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Notification.Description}}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ Notification.Status}}</v-list-item-subtitle>
                <v-btn @click="updateData(Notification)">Update</v-btn>
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
      Notification: []
    }
  },
  created() {
    database.ref('Notification').on('value', snapshot => {
      this.Notification = snapshot.val()
    })
  }, 
  methods: {
    async updateData(notification) {
      // Get a reference to the Realtime Database
      const db = firebase.database()

      // Update the notification object in the database
      await db.ref(`Notification/${notification.id}`).update({
        Status: 'Delivered',
      })
    },
  }
}
</script>

