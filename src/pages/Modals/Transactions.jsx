import { useState, useEffect } from "react";
import axios from "axios";
import "./UserModal.css";

function Transactions({
  userID,
  username,
  firstname,
  lastname,
  onCloseTransactionModal,
}) {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/transaction/${userID}`
        );
        // Assuming the response contains an array of transactions
        setTransactions(res.data);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }

    fetchTransactions();
  }, []);

  return (
    <div className="user-modal" style={{ width: "33rem", minHeight: "25rem" }}>
      <h4
        style={{
          marginBottom: "1rem",
          color: "black",
          borderBottom: "1px solid #7026b682",
          paddingBottom: "0.5rem",
        }}
      >
        Hi, {username}!
      </h4>
      <div className="transactions">
        {transactions.map((transaction) => (
          <div key={transaction.TransactID} className="transaction">
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>
              Railway:{" "}
              {transaction.RailwayID == 1
                ? "LRT-1"
                : transaction.RailwayID == 2
                ? "LRT-2"
                : transaction.RailwayID == 3
                ? "MRT-3"
                : transaction.RailwayID == 4 && "PNR"}
            </p>
            <p>Origin: {transaction.OriginStation}</p>
            <p>Destination: {transaction.To_Station}</p>
            <p>Fare: {transaction.Fare}</p>
            <p>Discount Type: {transaction.DiscountType}</p>
            <p>Payment Method: {transaction.PaymentMethod}</p>
            <p>Transaction Date: {transaction.TransactDate}</p>
            <p>Transaction ID: {transaction.TransactID}</p>
          </div>
        ))}
      </div>
      <div className="close-btn" onClick={onCloseTransactionModal}>
        &times;
      </div>
    </div>
  );
}

export default Transactions;
