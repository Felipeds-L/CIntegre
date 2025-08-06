'use client';
import ActivityCard from '@/components/general/ActivityCard';
import { useEffect, useState } from 'react';
import getActivities, { Activity } from '@/actions/getActivities';

export default function SchoolRequestsPage() {
  const [activities, setActivities] = useState<Activity[] | null>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await getActivities();
      setActivities(response.data);
    }
    fetchActivities();
  }, []);
  
  return (
    <>
          <div className="h-5"></div>
          <div className="container mx-auto px-4 py-12 mt-8 mb-5">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
              Pedidos de Ajuda
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activities && activities.map((activity) => (
              <ActivityCard key={activity.id} apiData={activity} />
              ))}
              </div>
            </div>
          </div>
          <div className="h-22"></div> 
        </>
      );
    }