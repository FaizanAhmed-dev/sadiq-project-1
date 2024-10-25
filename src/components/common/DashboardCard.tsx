import Image from 'next/image';
import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card";


interface Props {
  id: number;
  label: string;
  icon: string;
  number: string;
  per: string;
  color: string;
}
interface Card {
  data: Props;
}

const DashboardCard: React.FC<Card> = ({ data }) => {
  const {label, icon,number,per,color } = data;
  return (
    <Card className='shadow-boxShadow '>
      <CardContent className='py-6'>
        <div  className='flex justify-between'>
          <div>   
            <p>{label}</p>
            <h3>{number}<span style={{ color:color }}>{per}</span></h3>
          </div>
          <Image src={icon} alt="icon" width={40} height={40} />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
