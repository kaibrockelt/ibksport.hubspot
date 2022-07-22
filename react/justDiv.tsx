import React from 'react'



const justDiv: StorefrontFunctionComponent<any> = (

  ) => {

  
const thedom='<script charset="utf-8" type="text/javascript" src="https://js.hsforms.net/forms/v2.js"></script><script> hbspt.forms.create({ region: "na1", portalId: "4406968", formId: "843a1811-6b5a-4118-9a51-56a40c653cb0" });</script>'
  return ( 
    <div className="hubspotcontainer"
      dangerouslySetInnerHTML={{ __html: thedom }} 
    />
  )
}


export default justDiv
 