import React from "react";
import gitHub from './images/logo-github.png'
import linkedin from './images/logo-linkedin.svg'
import twitter from './images/logo-twitter.svg'


function Footer (){
    return(

       <div className=" inset-x-0 bottom-0 bg-black text-white pt-8 pb-10 block">

        <div className="md:flex  md:justify-around  ">

      <div>
        <h3 className="text-lg font-sm">Exclusive</h3>
        <h4 className="mt-4 text-sm">Subscribe</h4>
        <p className="mt-4 text-sm">Get 10% off your first order</p>

      </div>


    <div>
        <h3 className="text-lg font-sm" >Support</h3>
        <p className="mt-4 mb-4 text-sm">Block 324 Texas,USA,New York<br/>City Avenue </p>
        <a href="https://levikingdavid4040@gmail.com" className="underline text-blue-300  ">levikingdavid4040@gmail.com</a>
        <p className="mt-4 text-sm">+234-906-777-4541</p>
    </div>



<div>
<h3 className="text-lg font-sm">Account</h3>
<p  className="mt-4 text-sm">Cart</p>
<p className="mt-4 text-sm">Wishlist</p>
<p className="mt-4 text-sm">Shop</p>
</div>




<div>
<h3 className="text-lg ">Quick Link</h3>
<p className="mt-4 text-sm">Privacy Policy</p>
<p className="mt-4 text-sm">Terms Of Use</p>
<p className="mt-4 text-sm">FAQ</p>
<p className="mt-4 text-sm">Contact</p>
</div>


<div>
    <h3 className="text-lg font-sm">Contact Me</h3>
   <div>
   <a href="https://github.com/kingdavidlevi" target="_blank"><div><img src={gitHub} alt="img" /></div> Github</a>
   <a href="#" target="_blank"><div><img src={linkedin} alt="img" /></div>LinkedIn</a>
                <a href=" https://twitter.com/Code_King_" target="_blank"><div><img src={twitter} alt="img"/></div>Twitter</a>
              
   </div>
    
</div>


        </div>



        </div>
    )
}


export default Footer;