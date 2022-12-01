
import React from 'react'
import useHighscoreQuery from '../_client/queries/useHighscoreQuery'

const highscores = () => {

  const { data, isLoading } = useHighscoreQuery();

  if(isLoading) {
    return (
      <div>
        Loading Highscores...
      </div>
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          { data.map((row: any, i: number) => (
            <tr key={row.id}>
              <td>{ i+1 }</td>
            <td>{ row.name }</td>
            <td>{ row.score }</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default highscores