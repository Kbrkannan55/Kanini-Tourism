import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Payment() {
  const [amount, setamount] = useState(1000);

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

  const Logout=()=>{
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('accessToken')
    sessionStorage.removeItem('refreshToken')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('packageID')
  }

  return (
    <div className="App">
     <h2>Pay Advance</h2>
     <button onClick={handleSubmit}>Click Here to Pay</button><br/><br/>
     <Link to={'/'}><button onClick={Logout}>Home</button></Link>
    </div>
  );
}

export default Payment;