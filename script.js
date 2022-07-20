console.log(`vue ok`,Vue);

const root = new Vue({
    el:`#root`,
    data:{
        allEmail:  9,
        emails:[]
    },
    methods:{
        getrandomEmail(){
            for(let i=1;i<= 10; i++ ){
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((answer)=>{
                    const email = answer.data.response
                    this.emails.push(email)
                })
    
            }
        }
    },
    created(){
       return this.getrandomEmail(`email`)
    }
    





})