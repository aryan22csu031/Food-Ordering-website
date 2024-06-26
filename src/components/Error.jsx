import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
      404 NOT FOUND
    </div>
  )
}

export default Error