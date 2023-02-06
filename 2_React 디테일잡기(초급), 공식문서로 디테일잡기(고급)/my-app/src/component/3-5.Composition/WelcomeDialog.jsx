import React from 'react'
import CustomeDialog from './CustomeDialog'
// import Dialog from './Dialog'

export default function WelcomeDialog() {
  // return (
  //   <Dialog>
  //     <h1>Welcome</h1>
  //     <h5>Thank you!</h5>
  //   </Dialog>
  // )
  return(
    <CustomeDialog title="Welcome" description="Thanks" />
    // <CustomeDialog title={<button>Welcome</button>} description="Thanks" />
  )
}
