console.log(`vue ok`,Vue);

const root = new Vue({
    el:`#root`,
    data:{
        emails:[]
    },
    created(){
        for(let i=1;i<= 10; i++ ){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((answer)=>{
                const email = answer.data.response
                this.emails.push(email)
            })

        }
    }
    





})