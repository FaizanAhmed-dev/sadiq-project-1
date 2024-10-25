import React from 'react'
import { CardData } from '@/app/utils/contants/CardData'
import DashboardCard from '@/components/common/DashboardCard';




const ExecutiveSummary = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {CardData.map((item, index) => {
          return <DashboardCard data={item} key={index} />;
        })}
      </div>
    );
}

export default ExecutiveSummary
