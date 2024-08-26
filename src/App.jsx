import { useState } from 'react'
import './App.css'
import { Button, Stack, TextField } from '@mui/material';

function App() {
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)
  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)
  const handleCalculate= (e)=>{
    e.preventDefault()
    if (principle&&rate&&year) {
      //calculate
      setInterest(principle*rate*year/100)
    }
    else{
      alert("please Fill the form Completely")
    }
  }
  const validateInput = (inputTag)=>{
    // destructuring: const {key1,key2.....} = objectName
    const {name,value} = inputTag
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/)? setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
    }
    else if (name=="rate") {
      setRate(value)
      !!value.match(/^\d*\.?\d+$/)? setIsRateInvalid(false):setIsRateInvalid(true)
    }
    else if (name=="year") {
      setYear(value)
      !!value.match(/^\d*\.?\d+$/)? setIsYearInvalid(false):setIsYearInvalid(true)
    }
  }
  const resetCalculator = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrincipleInvalid(false)
    setIsRateInvalid(false)
    setIsYearInvalid(false)
  }
  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h1>Simple Interest Calculator</h1>
        <p>Calcullate your simple interest easily</p>
        <div className="d-flex text-success flex-column align-items-center justify-content-center bg-warning shadow p-3 rounded">
          <h1>₹ {interest}</h1>
          <p className="fw-bolder">Total Simple interest</p>
        </div>
        <form className="mt-5">
          <div className="mb-3">
            <TextField value={principle || ""} name='principle' onChange={(e)=>{validateInput(e.target)}} id="outlined-basic1" label="₹ Principle amound" variant="outlined" className='w-100 ' />
          </div>
          {
            isPrincipleInvalid&&
            <div className='text-danger mb-3'>Invalid Principle Amound</div>
          }
          <div className="mb-3">
            <TextField value={rate || ""} name='rate' onChange={(e)=>{validateInput(e.target)}} id="outlined-basic2" label="Rate Of Interest(p.a) %" variant="outlined" className='w-100 ' />
          </div>
          {
            isRateInvalid&&
            <div className="mb-3 text-danger fw-bolder">Invalid rate</div>
          }
          <div className="mb-3">
            <TextField value={year || ""} name='year' onChange={(e)=>{validateInput(e.target)}} id="outlined-basic3" label="Time period" variant="outlined" className='w-100 ' />
          </div>
          {
            isYearInvalid&&
            <div className="mb-3 text-danger fw-bolder">Year Invalid</div>
          }
          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} type='submit' onClick={handleCalculate} style={{width:'50%',height:'70px'}} variant="contained" className='bg-dark'>Calculate</Button>
            <Button onClick={resetCalculator} style={{width:'50%',height:'70px'}} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
