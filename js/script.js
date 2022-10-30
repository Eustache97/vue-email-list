const { createApp } = Vue
createApp({
    data() {
        return{
            numberOfEmailToGenerate: 10,
            generatedEmail:[]
        };

    },
    methods: {

    //     showEmailsList: function(){
     },
    created: function(){
        for(let i = 0; i < this.numberOfEmailToGenerate; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
            console.log(resp.data.response);
            this.generatedEmail.push(resp.data.response);
            })
        }
        console.log(this.generatedEmail);
    }
   
}).mount("#app");