import { useEffect, useState } from 'react'

function avisarAPi() {
  console.log('Lista enviada!')
}

export function UseEffect() {
  const [list, setList] = useState<string[]>([])

  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    avisarAPi()
  }, [list])

  useEffect(() => {
    fetch('https://api.github.com/users/diego3g/repos')
      .then((response) => response.json())
      .then((data) => {
        setList(data.map((item: any) => item.full_name))
      })
  }, [])

  function handleAddToList() {
    setList((state) => [...state, 'Item'])
    avisarAPi()
  }

  const filteredList = list.filter((item) => item.includes(filter))

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <button onClick={handleAddToList}>Add to list</button>
      <div>
        <ul>
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <ul>
          {filteredList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// useEffect => Side effect => Efeito colateral
// useEffect permite motirar mudança em variáveis e executar uma função
// sempre que elas mudarem
// useEffect sempre executa assim que o componente é exibido em tela
// pode colcoar um if dentro do useEffect para que ele só execute
// quando uma variável mudar
// o useState é uma função que retorna um array com 2 posições
// a primeira posição é o valor da variável
// a segunda posição é uma função que atualiza o valor da variável
// o useState recebe como parâmetro o valor inicial da variável
// o useState com a dependência vazia executa apenas uma vez
