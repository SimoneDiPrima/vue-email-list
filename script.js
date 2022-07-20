console.log(`vue ok`,Vue);

const root = new Vue({
    el:`#root`,
    data:{
        allEmail:  10,
        emails:[]
    },
    methods:{
        getrandomEmail(){
            console.log(this.allEmail)
            for(let i=1; i <= this.allEmail; i++ ){
               
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then((answer)=>{
                    
                    let email = answer.data.response
                    this.emails.push(email)
                    console.log(this.emails)

                    
                })
                
            }
            
        }
    },
    created(){
       return this.getrandomEmail();
    }
    





})