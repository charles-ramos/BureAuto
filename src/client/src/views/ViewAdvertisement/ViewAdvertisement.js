import Card from "@/components/Card/Card.vue"
import Button from "@/components/Button/Button.vue"
import axios from "@/axios.js"

export default {
    name: "ViewAdvertisement",
    components: {
        Card,
        Button
    },
    data: function() {
        return {
            advertisement: {
                adv_model_description: "",
                adv_value: "",
                adv_year_manufacture: "",
                adv_year_model: "",
                adv_brand_description: "",
                Manufacturer: {
                    man_name: ""
                }
            }
        }
    },
    methods: {
        getAdvertisement: async function() {
            try {
                const {data} = await axios.get(`/advertisement/${this.$route.params.id}`)
                if (data.success && data.data.length) {
                    this.advertisement = data.data[0]
                } else {
                    this.$router.push("/")
                }
            } catch (error) {
                this.$toasted.error("Ocorreu um erro ao pegar os dados do anúncio")
                this.$router.push("/")
            }
        }
    },
    created: async function() {
        await this.getAdvertisement()
    }
}