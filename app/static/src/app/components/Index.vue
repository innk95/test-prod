<template>
    <div>
        {{names}}
    </div>
</template>

<script>
    export default {
        name: "Index",
        data () {
            return {
                names: '',
                times: 0,
            }
        },
        mounted () {
            this.addName()
        },
        methods: {
            async addName () {
                for (let i = 0; i < 3000; i++) {
                    this.names += '_____ВАДИМ____'
                    await this.sleep(600)
                }
            },
            sleep(ms) {
              return new Promise(resolve => setTimeout(resolve, ms));
            }
        }
    }
</script>

<style>

</style>