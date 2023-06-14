import './Footer.scss';
import logo from "./Media/logo.png"
import facebook from "./Media/facebook.png"
import linkedIn from "./Media/linkedIn.png"
import twitter from "./Media/twitter.png"

const dataset1 = [
  "Partner",
  "Income Tax Guide",
  "F&O Trading",
  "Terms & Conditions",
  "Privacy Policy",
  "FAQ's",
  "Calculators",
]
const dataset2 = [
  "Mobile: +91 93219 08755",
  "Email: support@taxbuddy.com",
  "Contact Us",
  "Team",
  "News",
  "Blogs",
  "Refund Status",
]


function Footer() {

  return (

    <div className='container_footer'>
      <div className='content_container'>
      <div className='footer'>
        <div className='sec_1'>
          <img className='logo' src={logo} alt="logo" title="logo" />
          <div className='sec_1_text'>TaxBuddy's intuitive e-filing application ensures filing Accurate tax returns. TaxBuddy leverages technology to bring expert advice to taxpayers at reasonable cost.</div>
        </div>

        <div className='sec_2'>
          <div className='sec_2_header'>Company</div>
          <div>
            <ul type='none'>
              {dataset1.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className='sec_3'>
          <div className='sec_3_header'>Contact Us</div>
          <div>
            <ul type='none'>
            {dataset2.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div className='sec_4'>
          <div className='sec_4_container'>
            <div className='icon'><img src={twitter} alt="twitter" title="twitter" /></div>
            <div className='icon'><img src={facebook} alt="facebook" title="facebook" /></div>
            <div className='icon'><img src={linkedIn} alt="linkedIn" title="linkedIn" /></div>
          </div>
        </div>



      </div>
      
      </div>
      <div className='copyright'>
        <div className='copyright_text'>Copyright © 2023 SSBA Innovations Ltd. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;