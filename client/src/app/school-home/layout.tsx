import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

export default function SchoolHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        {children} 
      </main>
      
    </div>
  );
}