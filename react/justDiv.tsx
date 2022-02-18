import React from 'react'

import { useCssHandles } from 'vtex.css-handles'

interface justDivProps {
  blockClass?: string,
  htmlId?: string

}

const CSS_HANDLES = [
  'justDiv',
] as const;

const justDiv: StorefrontFunctionComponent<justDivProps> = (
  { 
    children,
    blockClass="",
    htmlId
  }
  
  ) => {

  const { handles } = useCssHandles(CSS_HANDLES, blockClass);
  

  return ( <div className={handles.justDiv} id={htmlId}>
    {children}
  </div> )
}


//Stuff for the site editor. Might not need it.
justDiv.schema = {
  title: 'editor.field.title',
  description: 'editor.field.description',
  type: 'object', 
}

export default justDiv
