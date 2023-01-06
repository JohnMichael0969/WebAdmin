<template>
  <div>
    Number of Donors: {{ Persons }}<br>
    Number of Campaigns: {{ Campaigns }}<br>
    Number of Donations: {{ Donation }}<br>
    <!--Number of Beneficiaries: {{ beneficiaries }}-->
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      Persons: 0,
      Campaigns: 0,
      Donation: 0,
      //beneficiaries: 0
    }
  },
  created() {
    // Set up references to the four nodes
    const PersonsRef = firebase.database().ref('Persons')
    const CampaignsRef = firebase.database().ref('Campaigns')
    const DonationRef = firebase.database().ref('Donation')
    //const beneficiariesRef = firebase.database().ref('beneficiaries')

    // Listen for changes to the data in each node
    PersonsRef.on('value', snapshot => {
      this.Persons = snapshot.numChildren()
    })
    CampaignsRef.on('value', snapshot => {
      this.Campaigns = snapshot.numChildren()
    })
    DonationRef.on('value', snapshot => {
      this.Donation = snapshot.numChildren()
    })
   // beneficiariesRef.on('value', snapshot => {
    //  this.beneficiaries = snapshot.numChildren()
   // })
  }
}
</script>
