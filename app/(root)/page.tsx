import React from "react";
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: 'Nan' };
  
  const accounts = [
    { name: 'Checking', currentBalance: 750.35 },
    { name: 'Savings', currentBalance: 500.00 }
  ];

  return (
    <section className="home">
    <div className="home-content">
     <header className="home-header">
       <HeaderBox 
        type="greeting"
        title="welcome"
        user={loggedIn?.firstName || 'Guest' }
        subtext="Access and manage your account and transaction effeciently"
        />

     <TotalBalanceBox
       accounts={[]}
       totalBanks={1}
       totalCurrentBalance={1250.35}
       />

  

     </header>
     </div>
  </section>
 )

}

export default Home