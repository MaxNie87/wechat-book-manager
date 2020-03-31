<template>
  <div>
    <progress :percent="precent" color="red" />
    <p>To Be Great: {{year}} past {{days}} days ({{precent}}%)</p>
  </div>
</template>
<script>
export default {
    methods: {
        isLeapYear() {
            let isLeapYear = false;
            if(this.year % 100 == 0) {
                isLeapYear = true;
            } else if(this.year % 4 == 0 && this.year % 100 != 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }

            return isLeapYear;
        },
        getDayOfYear() {
            return this.isLeapYear() ? 366 : 365 
        }
    },
    computed: {
        year() {
            return new Date().getFullYear()
        },
        days() {
            let start = new Date()
            start.setMonth(0)
            start.setDate(1)
            let offset = new Date() - start
            return offset / 1000 / 60 / 60 / 24 + 1 
        },
        precent() {
            return (this.days / this.getDayOfYear() * 100).toFixed(1)
        }
    }
};
</script>
<style scoped>
</style>