import React,{useState} from 'react';

function Payment() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_afsUmw3cu6el3h",
        key_secret:"FnSjU0QhoYYruZ1HihXZyX32",
        amount: amount *100,
        currency:"INR",
        name:"Travellers",
        description:"Travellers",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Boopathiraja Kannan",
          email:"kbrkannan55@gmail.com",
          contact:"9626404720"
        },
        notes:{
          address:"Kbrkannan"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h2>Razorpay</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Payment;