import user from "../../data/user.json"
import data from "../../data/data.json"
import transactions from "../../data/transactions.json"

import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics"
import FriendList from "../FriendList/FriendList"
import TransactionHistory from "../TransactionHistory/TransactionHistory"

function Main() {
    return ( <> <section>
     <Profile  
    username={user.username}
   tag={user.tag}
   location={user.location}
   avatar={user.avatar}
   stats={user.stats} />
  <Statistics  title="Upload stats" stats={data}/>
  <FriendList/>
  </section>
  <section>
      <TransactionHistory items={transactions}/>
  </section>
  </>
  )
}

export default Main