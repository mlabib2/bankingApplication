import HeaderBox from '@/constants/HeaderBox'
import TotalBalanceBox from '@/constants/TotalBalanceBox';
import React from 'react'

const Page = () => {
  const loggedIn = {firstName: "Mahir"};
  return (
    <section className="home">
      <div className="home-content">
      <header className="home-header">
        <HeaderBox
          type = "greeting"
          title = "welcome"
          user = {loggedIn?.firstName || "Guest"}
          subtext = "Access and manage your account and transactions efficiently"
        >
        </HeaderBox>
        <TotalBalanceBox
        accounts = {[]}
        totalBanks = {1}
        totalCurrentBalance = {1250.35}      
        ></TotalBalanceBox>
      </header>
      </div>
    </section>
  )
}

export default Page
