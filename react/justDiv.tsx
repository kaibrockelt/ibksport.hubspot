import React from 'react'



interface justDivProps {
 
}


const justDiv: StorefrontFunctionComponent<justDivProps> = (
  
  ) => {

  
const thedom='<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script><script> hbspt.forms.create({ region: "na1", portalId: "4406968", formId: "843a1811-6b5a-4118-9a51-56a40c653cb0" });</script>'
  return ( 
    <div className="hubspotcontainer"
      dangerouslySetInnerHTML={{ __html: thedom }} 
    />
  )
}


export default justDiv
 