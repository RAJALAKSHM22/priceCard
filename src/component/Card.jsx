import React from 'react'


function card({details}) {
  
  return <>
      <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
                  <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
                  <hr/>
                  <ul className="fa-ul">
                    <li classNAme={details.isuser?"":"text-muted"}><span className="fa-li"><i className= {details.isuser?"fas fa-check":"fas fa-times"}></i></span>{details.user}</li>
                    <li classNAme={details.isisstorage?"":"text-muted"}><span className="fa-li"><i className= {details.isstorage?"fas fa-check":"fas fa-times"}></i></span>{details.storage}</li>
                    <li classNAme={details.isprojectPublic?"":"text-muted"}><span className="fa-li"><i className= {details.isprojectPublic?"fas fa-check":"fas fa-times"}></i></span>{details.projectPublic} </li>
                    <li classNAme={details.isaccess?"":"text-muted"}><span className="fa-li"><i className= {details.isaccess?"fas fa-check":"fas fa-times"}></i></span>{details.access}</li>
                    <li className={details.isprojectPrivate?"":"text-muted"}><span className="fa-li"><i className= {details.isprojectPrivate?"fas fa-check":"fas fa-times"}></i></span>{details.projectPrivate}</li>
                    <li className={details.issupport?"":"text-muted"}><span className="fa-li"><i className= {details.issupport?"fas fa-check":"fas fa-times"}></i></span>{ details.support} </li>
                    <li className={details.isdomain?"":"text-muted"}><span className="fa-li"><i className= {details.isdomain?"fas fa-check":"fas fa-times"}></i></span>{details.domain}
                    </li>
                    <li className={details.isreport?"":"text-muted"}><span className="fa-li"><i className= {details.isreport?"fas fa-check":"fas fa-times"}></i></span>{details.report}</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>
            </div>

    </>
  
}

export default card