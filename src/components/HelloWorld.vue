<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <CustomSelect @set-selection="setSelection" :field="'selected_continent'" :label="'Continent'" :items="continents"/>
  <div class="filter" v-for="filter in filtersData" :key="filter.value">
    <div v-if="filter.value != null && filter.value != -1" class="filter-box">
      {{ filter.label }} - {{ filter.value }}
      <button @click="removeFilter(filter)">X</button>
    </div>
  </div>
  <div class="countries-container">
    <div class="country-box" v-for="country in countries" :key="country.code">
      <h2>{{ country.name }}</h2>
      <h3>{{ country.continent.name }}</h3>
    </div>
  </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import CustomSelect from '@/components/CustomSelect.vue';
import { mapState } from 'vuex';

export default {
  components:{
CustomSelect
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState([
      'filtersData',
    ])
  },
  methods: {
    setSelection(data){
      this.filtersData[data.field] = data.value;
    },
    removeFilter(filter){
      console.log(filter)
      this.$store.state.filtersData[filter.field].value = -1;
    }
  },
    apollo: {
    continents: gql`query Test{
      continents{
        code
        name
      }
    }`,
    countries : gql`
    query Countries($search : CountryFilterInput){
  countries(filter : $search){
    code
    name
    continent{
      name
    }
  }
}
    `,
    variables: {
      search: {"continent":  {"eq" : "EU"}}
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.countries-container{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  .country-box{
    width:150px;
    height:200px;
    border:1px solid black;
    padding:20px;
    display:flex;
    flex-direction: column;
    gap:20px;
    justify-content: center;
    align-items: center;
  }
}
.filter-box{

  border:1px solid black;
  display:flex;
  padding:5px;
}
</style>
