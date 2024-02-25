import React ,{useState} from 'react'
import Counter from './Counter'

const Counters = () => {
    const initialCountersData = [
        {
            id: 1, 
            count: 0
        }
    ]
    const[countersData , setCountersData] = useState(initialCountersData)
    const incHandler = (counter) => {
      const counters = [...countersData];
      let counterIndex = counters.indexOf(counter);
      counters[counterIndex].count++
      setCountersData(counters)
    }
    const decHandler = (counter) => {
      const counters = [...countersData]
      let counterIndex = counters.indexOf(counter)
      counters[counterIndex].count--
      setCountersData(counters)
    }
  return (
    <div>
    {
        countersData.map(item => (
          <Counter key={item.id} counter={item} onInc={incHandler} onDec={decHandler}/>
        ))
      }
    </div>
  )
}

export default Counters
