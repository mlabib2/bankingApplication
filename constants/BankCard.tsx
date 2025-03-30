import { formatAmount } from "@/lib/utils";
// ❌ Remove this line: import { Link } from "lucide-react";
import Link from "next/link"; // ✅ Correct import for Next.js navigation
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}): CreditCardProps => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div>
          <h1 className="text-16 font-semibold text-white">
            {account.name || userName}
          </h1>
          <p className="font-ibm-plex-serif font-black text-white">
            {formatAmount(account.totalCurrentBalance)}
          </p>
        </div>
        <article>
          <div className="flex justify-between">
            <h1 className="text-12 font-semibold text-white">{userName}</h1>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default BankCard;
// import React from "react";
