const { createApp } = Vue
createApp({
    data() {
        return{
            numberOfEmailToGenerate: 10,
            generatedEmails:[]
        };

    },
    methods: {
     },
    created: function(){
        for(let i = 0; i < this.numberOfEmailToGenerate; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
            console.log(resp.data.response);
            this.generatedEmails.push(resp.data.response);
            })
        }
        console.log(this.generatedEmails);
    }
   
}).mount("#app");