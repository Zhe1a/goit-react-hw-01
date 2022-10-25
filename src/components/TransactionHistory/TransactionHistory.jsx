import PropTypes from "prop-types";
import TransactionHistoryList from "./TransactionHistoryList/TransactionHistoryList"

import s from "./TransactionHistory.module.css"

function TransactionHistory (props){
 const {items} = props
    return <table className={s["transaction-history"]}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
    {items.map(({type,amount,currency,id}) =>{
     return  <TransactionHistoryList key={id} type={type} amount={amount} currency={currency}/>
  })}
    </tbody>
  </table> 
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}

export default TransactionHistory