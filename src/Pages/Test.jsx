import {useEffect} from 'react'
import {useState} from 'react'
import {Button, Card, Container, Form, ProgressBar} from 'react-bootstrap'
import {Variants} from './variants'

export const Test = () => {
  const [progress, setProgress] = useState(0)
  const [answer, setAnswer] = useState('')
  const [currentQ, setCurrentQ] = useState(0)
  const [rightAnswers, setRightAnswers] = useState(0)

  const allQuetions = [
    {quetion: 'some quetion1', variants: [1, 2, 3, 4], success: 1},
    {quetion: 'some quetion2', variants: ['a', 2, 'z', 1], success: 1},
    {quetion: 'some quetion3', variants: [0, 1, 'q', 4], success: 1},
    {quetion: 'some quetion4', variants: [0, 1, 'q', 4], success: 1},
  ]
  const handleNext = () => {
    if (allQuetions[currentQ].success == answer)
      setRightAnswers(rightAnswers + 1)
    if (currentQ < allQuetions.length - 1) {
      setCurrentQ(currentQ + 1)
      return
    }
    setProgress(100)
    console.log('Finish!!')
  }
  useEffect(() => {
    setProgress((currentQ * 100) / allQuetions.length)
  }, [currentQ])

  return (
    <Container>
      <Card style={{padding: '20px', margin: '20px'}}>
        <Card.Title>{allQuetions[currentQ].quetion}</Card.Title>

        <Variants
          allQuetions={allQuetions}
          currentQ={currentQ}
          setAnswer={setAnswer}
        />

        <Button onClick={handleNext} style={{maxWidth: '100px'}}>
          Next
        </Button>

        <ProgressBar style={{margin: '20px'}} now={progress} />
        <Card.Text>
          Right answers:{rightAnswers} from {allQuetions.length}
        </Card.Text>
      </Card>
    </Container>
  )
}
