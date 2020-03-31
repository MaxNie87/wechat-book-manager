<template>
    <div>
        <div :key='book.id' v-for='book in books'>{{book.BookName}}</div>
    </div>
</template>

<script>

import {get} from '@/util'

export default {
    data() {
        books: []
    },
    methods: {
        async getList() {
            const books = await get('weapp/booklist')


            this.books = books.list
        }
    },

    mounted() {
        this.getList()
    }
}
</script>

<style>

</style>