<template>
  <q-page padding>
    <div class="row">
      <div class="col-6">
        <q-input v-model="text" outlined label="User" />
      </div>
      <div class="col-3">
        <q-select v-model="selectable" outlined :options="options" label="Number of recommendations" />
      </div>
      <div class="col-3">
        <q-btn color="primary" label="Recommend" @click="recommend" />
      </div>
    </div>
    <div class="row">
      <q-date v-model="date" />
    </div>
    <div class="row">
      <div class="col-12">
        <DataTable />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import DataTable from "components/DataTable";
import ApiRepository from "../repositories/ApiRepository";

const text = ''
const options = [1,2,3,4,5,6,7,8,9,10]
const selectable = ''
const date = '2021/06/01'
export default defineComponent({
  name: 'Home',

  components: {
    DataTable
  },

  setup () {
    return {
      options,
    }
  },
  data () {
    return {
      text,
      selectable,
      date
    }
  },
  methods: {
    recommend() {
      this.testServer();
    },
    testServer() {
      ApiRepository.exampleGet().then((res)=> {
        console.log(res);
      })
    }
  },
})
</script>

<style scoped>

</style>
