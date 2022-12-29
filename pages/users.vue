<template>
  <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <div class="container-fluid container">
          <h3 class="text-dark mb-1" style="text-align: center;font-family: Biryani, sans-serif;font-weight: bold;padding: 9px;margin: 5px;">
                  Users List
                </h3>
        </div>
         <v-data-table :headers="headers" :items="items" />
      </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [//mao ning naas babaw sa table
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Age', value: 'age' }
      ],
      items: [// mao ni sud sa table
        { name: 'John', email: 'john@example.com', age: 30 },
        { name: 'Jane', email: 'jane@example.com', age: 25 },
        { name: 'Bob', email: 'bob@example.com', age: 35 }
      ]
    }
  }
}
</script>
