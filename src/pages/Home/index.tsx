// Libs
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

// Styles
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

// Controlled component versus uncontrolled component

export function Home() {
  // controlled components

  /**
   const [task, setTask] = useState('')
   * onChange={(e: any) => setTask(e.target.value)}
   * value={task}
   *
   * function resetForm () {
   *  setTask('')
   * }
   *
   * Pontos positivos: monitoramento em tempo real
   * Pontos negativos: toda vez que atualiza o estado, acontece
   * uma nova renderização do componente inteiro
   */

  // uncontrolled components

  /**
   *
   * Busca a informação do input somente quando atualizada
   * Pontos positivos: não acontece renderização toda vez que o estado é atualizado
   * Pontos negativos: não é possível monitorar em tempo real
   *
   * const [task, setTask] = useState('')
   */

  // useForm()
  /**
   * function register(name: string) {
   *  return {
   *    onChange: () => void,
   *    onBlur: () => void,
   *    onfocus: () => void,
   * }
   */
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  // PAROU EM 'VALIDANDO FORMULÁRIOS'

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Insira sua task..."
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Estudar React" />
            <option value="Estudar Node" />
            <option value="Estudar Typescript" />
            <option value="Estudar .NET" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            max={60}
            min={5}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
