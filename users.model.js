<ol> 
        {pokemon.map((pokemon, index) => { 
          return <li key={index}>{capitalize(pokemon.name)}</li>
        })}
      </ol>

