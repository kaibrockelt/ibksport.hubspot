import React, {useEffect} from 'react'





  const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        let container=document.getElementsByClassName('hubspotcontainer')[0];
        container.appendChild(script);

        script.addEventListener('load', () => {
            // @ts-ignore
            if (window.hbspt) {
                // @ts-ignore
                window.hbspt.forms.create({
                    portalId: '4406968',
                    formId: '843a1811-6b5a-4118-9a51-56a40c653cb0',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);
    return (
        <div>
            <div className="hubspotcontainer" id="hubspotForm"></div>
        </div>
    );

}


export default HubspotContactForm
 