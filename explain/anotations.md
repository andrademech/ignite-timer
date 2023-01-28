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


PropDrilling
quando temos muitas propriedades que precisam ser passadas para um componente filho, podemos utilizar o prop drilling, que é passar as propriedades de um componente pai para um componente filho, e assim sucessivamente, até chegar no componente que precisa da propriedade.

Context API -> Permite compartilharmos informações entre componentes sem precisar passar as propriedades de um componente pai para um componente filho, e assim sucessivamente, até chegar no componente que precisa da propriedade.