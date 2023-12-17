import React from "react"
import Card from "./component/Card"

function App() {
// .....ENERING THE CARD DETAILS IN JSON FORM......
  const details=[
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      isuser:true,
      storage:"50GB Storage",
      issorage:true,
      projectPublic:"Unlimited Public Projects",
      isprojectPublic:true,
      access:"Community Access",
      isaccess:true,
      projectPrivate:"Unlimited Private Project",
      isprojectPrivate:false,
      support:"Dedicated Phone Support",
      issupport:false,
      domain:"Free Subdomain",
      isdomain:false,
      report:"Monthly Status Report",
      isreport:false
    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 User",
      isuser:true,
      storage:"50GB Storage",
      issorage:true,
      projectPublic:"Unlimited Public Projects",
      isprojectPublic:true,
      access:"Community Access",
      isaccess:true,
      projectPrivate:"Unlimited Private Project",
      isprojectPrivate:true,
      support:"Dedicated Phone Support",
      issupport:true,
      domain:"Free Subdomain",
      isdomain:true,
      report:"Monthly Status Report",
      isreport:false
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited User",
      isuser:true,
      storage:"50GB Storage",
      issorage:true,
      projectPublic:"Unlimited Public Projects",
      isprojectPublic:true,
      access:"Community Access",
      isaccess:true,
      projectPrivate:"Unlimited Private Project",
      isprojectPrivate:true,
      support:"Dedicated Phone Support",
      issupport:true,
      domain:"Unlimited Free Subdomain",
      isdomain:true,
      report:"Monthly Status Report",
      isreport:true 
    }

  ]
  
  return  <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
        {/* <!-- Free Tier -->*/}
         {/*.....JAVA SCRIPT CODE IS HERE......*/}
         {
          details.map((e,i)=>{
            return <Card details={e} key={i}/>
          })
         }   

        </div>
      </div>
    </section>
    </>
}

export default App
