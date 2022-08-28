<template>
    <div>
        <select  v-model="filtersData[field].value" name="" id="">
            <option value="-1">{{ label }}</option>
            <option :value="item.code" v-for="item in items" :key="item.code">{{item.name}}</option>
        </select>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name : "CustomSelect",
        props:{
            items :{
                type : Array,
                required : true,
            },
            field : {
                type: String,
                required  : true,
            },
            label : {
                type:String,
                required : true,
            }
        },
        data() {
            return {
                selectedOption : -1,
            }
        },
            computed: {
        ...mapState([
            'filtersData',
        ])
    },
        methods: {
            setSelection(){
                // this.$store.state.filtersData[this.field].value = this.filtersData[this.field];
                // this.$emit('set-selection' , {field : this.field, value : this.selectedOption})
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>