<template>
  <v-app>
    <!-- Navigation menu -->
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      :clipped="clipped"
      :mini-variant="miniVariant"
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Report page -->
    <v-content>
      <v-container fluid>
        <!-- Report title and toolbar -->
        <v-toolbar
          color="primary"
          dark
          app
          clipped-left ="clipped"
          :mini-variant="miniVariant"
        >
          <v-toolbar-side-icon @click.stop="drawer = !drawer" />
          <v-toolbar-title>{{ report.title }}</v-toolbar-title>
          <v-spacer />
          <!-- Report actions -->
          <v-btn icon>
            <v-icon>mdi-download</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-print</v-icon>
          </v-btn>
        </v-toolbar>

        <!-- Display a table of report data -->
        <v-data-table :headers="report.columns" :items="report.data" item-key="id" class="elevation-1">
          <template v-slot:item="{ item }">
            {{ item}}
          </template>
        </v-data-table>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home' },
        { title: 'Reports' },
        { title: 'Settings' }
      ],
      clipped: false,
      miniVariant: false,
      report: {
        title: '',
        columns: [],
        data: []
      }
    }
  },
  async asyncData({ params }) {
    // Initialize Firebase Realtime Database
    const firebaseConfig = {
        apiKey: "AIzaSyAXxg0shv7zheBNvBIBZAep70ifJC3hcVE",
        authDomain: "dbadminweb.firebaseapp.com",
        databaseURL: "https://dbadminweb-default-rtdb.firebaseio.com",
        projectId: "dbadminweb",
        storageBucket: "dbadminweb.appspot.com",
        messagingSenderId: "72331695996",
        appId: "1:72331695996:web:aabeaf0a47becf1bc1b6f9",
        measurementId: "G-TF6B7YY14L"
    }
    firebase.initializeApp(firebaseConfig)
    const db = firebase.database()

    // Fetch report data from Firebase Realtime Database
    const reportRef = db.ref(`reports/${params.id}`)
    const snapshot = await reportRef.once('value')
    const report = snapshot.val()

    return { report }
  }
}
</script>
