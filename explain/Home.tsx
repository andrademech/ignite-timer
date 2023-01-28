import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <>
      <h1>NewCycleForm: {activeCycle}</h1>
      <button
        onClick={() => {
          setActiveCycle(new Date().getTime())
        }}
      >
        Mudar id
      </button>
    </>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)
  return (
    <div>
      <h1>Countdown: {activeCycle}</h1>
    </div>
  )
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
