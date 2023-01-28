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
