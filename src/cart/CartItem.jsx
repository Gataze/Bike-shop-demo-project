import { useOrderDetails } from "../context/OrderDetails";
import { formatCurrency } from "../utilities";

const CartItem = ({ bike }) => {
  const [, updateItemCount] = useOrderDetails();

  return (
    <div className="cartItem" key={bike.name}>
      <img className="cartItem__itemImg" src={bike.url} alt={`${bike.name} cart`}></img>
      <div className="cartItem__description">
        <div className="cartItem__preview">
          <h2>{bike.name}</h2>
          <button
            onClick={() => updateItemCount(0, bike, bike.name)}
            className="cartItem__delete"
            title={`remove ${bike.name}`}
          >
            Remove
          </button>
        </div>

        <div className="cartItem__price">
          <span className="cartItem__cartDets">
            Price: {formatCurrency(bike.price)}
          </span>
        </div>

        <div className="cartItem__quantity">
          <span className="cartItem__cartDets">
            Count: {`${bike.newCount}`}
          </span>
        </div>

        <div className="cartItem__value">
          {bike?
          <span className="cartItem__cartDets">
            Value: {formatCurrency(bike.price * bike.newCount)}
          </span> : null}
        </div>
      </div>
      <div className="cartItem__description">
        <h2 className="cartItem__detailsSpan">
          Details
        </h2>
        <p className="cartItem__spcs1">
          <b>Type: </b>
          {bike.type}
        </p>
        <p className="cartItem__spcs2">
          <b>Color:</b> {bike.color}
        </p>
        {bike.frame? <p className="cartItem__spcs3">
          <b>Frame:</b> {bike.frame}
        </p> : null}
        <p className="cartItem__spcs4">
          <b>Wheel:</b> {bike.wheel}
        </p>
      </div>
    </div>
    
         
  );
};

export default CartItem;

// const [value, setValue] = useState(bike.counter * bike.price)
// const [counter, setCounter] = useState(bike.counter)

// //pobiera dane z localStorage, aktualizuje je na podstawie zmiennej counter. Jeżeli
// //ta wartość zmienia się to wtedy ustala ilość z produktu który chcemy kupić
// //w 'bike.counter' w localStorage dla tego produktu.
// useEffect(() => {

//     const temp = localStorage.getItem('item')
//     const loadedItem = JSON.parse(temp)

//     const calcItem = loadedItem.map(item => {
//         if(bike.name === item.name){
//             return {
//                 ...item,
//                 counter: counter
//             }
//         }
//         return item
//     })

//     const temp2 = JSON.stringify(calcItem)
//     localStorage.setItem('item', temp2)

// }, [counter, bike.name])

// const plusOne = () => {
//     setCounter(prevState => {
//         return prevState + 1
//     })
// }

// const minusOne = () => {
//     setCounter(prevState => {
//         if(prevState >= 1){
//             return prevState - 1
//         }else{
//             return prevState
//         }
//     })
// }

// const plusValue = (price) => {

//     setValue(prevState =>
//         prevState + price
//     )
//     addTotalValue(price)
// }

// const minusValue = (price) => {
//     if(value > 0){
//         setValue(prevState =>
//             prevState - price

//         )
//         minusTotalValue(price)

//     } else {
//         setValue(prevState =>
//             prevState
//         )
//     }
// }
