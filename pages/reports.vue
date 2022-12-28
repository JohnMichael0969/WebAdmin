<template>
  <div>
    <h1>Reports</h1>
    <ul>
      <li v-for="report in reports" :key="report.id">
        {{ report.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reports: []
    }
  },
  async asyncData({ $firebaseRef }) {
    const reportsRef = $firebaseRef('reports')
    const snapshot = await reportsRef.once('value')
    return {
      reports: snapshot.val()
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
