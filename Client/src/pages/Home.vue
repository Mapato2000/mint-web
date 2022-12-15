<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <h5> Your address is {{address}}</h5>
          <q-card class="my-card">
            <q-card-actions vertical>
            </q-card-actions>
          </q-card>
        </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import SmartRepository from "src/repositories/SmartRepository"
import axios from "axios";

export default defineComponent({
  name: 'HomePage',

  components: { },

  setup () {
    return {
      address: ref(""),
      NFTs: ref([])
    }
  },
  created () {
    this.fetch();
  },
  data () {
    return { }
  },
  methods: {
    async fetch(){
      await SmartRepository.getMyAddress().then(async (addr) => {
        this.address = addr;
      })
      this.getNFTs();
    },
    getNFTs () {
      axios.get("https://api.chainbase.online/v1/account/nfts?chain_id=1&address=0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85", {
        headers: {
          "X-API-KEY": "",
          "Content-Type": "application/json"
        }
        }).then((res) => {
          console.log(res);
      })
    },
    goTo(pageName){
      this.$router.push({name: pageName});
    },
  },
})
</script>

<style scoped>
.my-card{
  width: 100%;
  max-width: 250px;
  margin: 50px auto 0 auto;
}
</style>
