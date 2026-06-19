import React from 'react'
import ServiceRequest from './ServiceRequest'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: `Service Request | Morzze Kitchen & Bathroom Accessories`,
  description: `Need assistance with your Morzze products? Submit a service request, and our support team ensures quick and reliable solutions. Fill out the form now`,
}



const page = () => {
  return (
    <ServiceRequest />
  )
}

export default page