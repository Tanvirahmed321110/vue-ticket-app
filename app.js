const app = Vue.createApp({
    data(){
        return{
            name:'',
            mobile: '',
            isConfirm: false,
            appliedCoupon: null,
            couponCode : '',
            coupons:[
                {code :'50TAKA',discount: 50},
                {code :'90TAKA', discount: 90}
            ],
            
            seatColorFind : {
                sold:{
                    text: 'Sold',
                    color : 'red'
                },
                available: {
                    text: 'Available',
                    color: '#fff'
                },
                booked: {
                    text: 'Booked',
                    color: 'gray'
                },
                selected: {
                    text: 'Selected',
                    color: '#00ff00'
                }
            },
            seats:[
                {
                    name: 'A1',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'A2',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'A3',
                    type: 'sold',
                    price: 950
                },
                {
                    name: 'A4',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'B1',
                    type: 'booked',
                    price: 950
                },
                {
                    name: 'B2',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'B3',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'B4',
                    type: 'sold',
                    price: 950
                },
                {
                    name: 'C1',
                    type: 'sold',
                    price: 950
                },
                {
                    name: 'C2',
                    type: 'sold',
                    price: 950
                },
                {
                    name: 'C3',
                    type: 'booked',
                    price: 950
                },
                {
                    name: 'C4',
                    type: 'booked',
                    price: 950
                },
                {
                    name: 'D1',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'D2',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'D3',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'D4',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'E1',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'E2',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'E3',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'E4',
                    type: 'available',
                    price: 950
                },
                {
                    name: 'F1',
                    type: 'available',
                    price: 800
                },
                {
                    name: 'F2',
                    type: 'available',
                    price: 800
                },
                {
                    name: 'F3',
                    type: 'available',
                    price: 800
                },
                {
                    name: 'F4',
                    type: 'available',
                    price: 800
                },
            ]
        }
    },
    
    
    methods: {
        handelSeatClickedF(seatIndex){
            let seatClicked = this.seats[seatIndex]
            if(seatClicked.type === 'booked' || seatClicked.type === 'sold'){
                if(seatClicked.type === 'booked'){
                    return alert("OPPS! This Seat Already Booked")
                }
                else{
                    return alert('Sorry, this seat alreay sold. \n Try Other Seat')
                }
            }
            seatClicked.type = seatClicked.type === 'selected' ? 'available' : 'selected'
        },
        totalPriceF(){
            let total = 0
            this.selectedSeatF.forEach((item)=>{
                total += item.price;
            })
            if(this.appliedCoupon !==null){
                total = total- this.appliedCoupon.discount
            }
            return total;
        },
        confirmF(){
            if(!this.name || !this.mobile){
                return  alert('Please Fill mobile and Name')
            }
            return    this.isConfirm = true;
        },
        againBookF(){
            this.isConfirm=false;
            this.name=''
            this.mobile=''
            this.appliedCoupon=null
            this.seats.forEach((seat)=>{
                if(seat.type=='selected'){
                    seat.type='sold'
                }
            })
        }
    },
    
    
    computed:{
        selectedSeatF(){
            let totalSelect = this.seats.filter((seat)=>{
                if(seat.type==='selected'){
                    return seat;
                }
            })
            if(totalSelect.length >3){
                return alert('you are buy most 3 seat')
            }
            return totalSelect
        }
    },
        
    
    watch:{
        couponCode(newVal,oldVal){
            if(newVal.length === 6){
                let searchCoupon = this.coupons.find((item)=>item.code===newVal)
                
                if(searchCoupon){
                    this.appliedCoupon = searchCoupon;
                    this.couponCode = ''
                    alert('ok')
                }
                else{
                    this.couponCode= ''
                    this.appliedCoupon = null
                    return alert('Invalid Coupon')
                    
                }
            }
        }
    }    
})
app.mount('#app')