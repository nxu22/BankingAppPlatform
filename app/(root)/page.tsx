import React from "react";
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = { firstName: 'N', lastName:'X', email:'nx@gmail.com'};
  
  

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

     RECENT TRANSACTIONS
     </div>

      
     <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 123.04 },{ currentBalance: 456.09 }]}
      />
  </section>
 )

}

export default Home