import HeaderBox from "@/constants/HeaderBox";
import RightSidebar from "@/constants/RightSidebar";
import TotalBalanceBox from "@/constants/TotalBalanceBox";
// import { Title } from "chart.js";
import React from "react";

const Page = () => {
  const loggedIn = {
    firstName: "Mahir",
    lastName: "Labib",
    email: "mlabib2-c@my.cityu.edu.hk",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            subtext="Access and manage your account and transactions efficiently"
            user={loggedIn?.firstName || "Guest"}
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
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Page;
