import axios from "axios";
import React from "react";
import { useState } from 'react';

function Leaderboard() {
  const [state, setState] = useState([])
  return (
    <div>
      <button onClick={() => {
        axios.get("https://reqres.in/api/users").then((response) => {
          console.log(response.data)
          setState(response.data)
        })
      }}>
        Click Me
      </button>
      {state.map((obj, index) => {
        return (
          <div>
            <h1>{index}</h1>
            <h4>{obj.page.id}</h4>
          </div>
        )
      })
      }
    </div>

  )
}

export default Leaderboard