import './index.css'

const DenominationItem = props => {
  const {amount, withDrawAmount} = props
  const {value} = amount
  const onClickButton = () => {
    withDrawAmount(value)
  }
  return (
    <li>
      <button className="amount-button" type="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
