import Markdown from 'react-markdown' // --> package to format markdown formatted data

export default function ClaudeRecipe(props){

    return (
        <section className="suggested-recipe-container" aria-live='polite'>
            <h2>Chef Claude Recommends:</h2>
            <Markdown>{props.generatedRecipe}</Markdown>
      </section>

      //aria-live='polite' makes those who are using assistant technologies for accessibility knows when this section is generated it alerts the user and reads it. 
     )
}