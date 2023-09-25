import {useEffect} from 'react'
import {Form} from 'react-bootstrap'

export const Variants = ({allQuetions, setAnswer, currentQ}) => {
  useEffect(() => {
    console.log('render')
  }, [])
  return (
    <>
      {allQuetions[currentQ].variants.map((item, index) => (
        <Form.Check
          onClick={() => setAnswer(index)}
          id={index}
          key={index}
          name="group"
          type="radio"
          label={item}
        />
      ))}
    </>
  )
}
