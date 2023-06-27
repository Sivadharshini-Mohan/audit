import React from 'react'
import Filter from '@components/Filter'
import AuditTrailTable from '@components/AuditTrailTable'

const Mainlayout = () => {
  return (
    <div className="relative flex flex-grow">
        <div className="w-[4px]"></div>
        <div className="bg-white shadow-sm space-y-6 w-64 w-[204px] min-w-[204px]"><Filter /></div>
        <div className="w-[4px]"></div>
        <div className="bg-white flex-1"><AuditTrailTable /></div>
    </div>
  )
}

export default Mainlayout