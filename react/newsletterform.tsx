import React, {useEffect} from 'react'





  const HubspotNewsletterForm = () => {
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
                    formId: 'c02899d9-a3d9-4ac9-99b5-95dec5fe82a5',
                    target: '#hubspotNL'
                })
            }
        });
    }, []);
    return (
        <div>
            <div className="hubspotcontainer" id="hubspotNL"></div>
        </div>
    );

}


export default HubspotNewsletterForm
 