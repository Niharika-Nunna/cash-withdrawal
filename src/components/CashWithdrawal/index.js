import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withDrawAmount = value => {
    const {balance} = this.state
    if(balance - value >= 0){
      this.setState(prevState => ({balance: prevState.balance - value}))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="logo">S</div>
            <h1 className="name">Sarah Willliams</h1>
          </div>

          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="balance-amt-container">
              <p className="value">{balance}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>

          <p className="withdraw-text">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="value-container">
            {denominationsList.map(item => (
              <DenominationItem amount={item}
              withDrawAmount={this.withDrawAmount} 
              key={item.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
