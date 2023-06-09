import { range } from "../util/array"
import { Keyboard } from "./keyboard"
import { useState } from "react"

const WORD_LENGTH = 5
const ROWS = 6 

type CellState = {
    letter: string,
    variant?: "correct" | "semi-correct" | "incorrect"
}
type Board = CellState[][]

const deepCopyBoard = (board: Board): Board => JSON.parse(JSON.stringify(board));

const getEmptyCell = () => ({
  letter: '',
});

const getEmptyBoard = () => range(ROWS).map(()=>
range(WORD_LENGTH).map(getEmptyCell))



export const Field = () => {
    const [board, setBoard] = useState<Board>(getEmptyBoard())

    const handleBackspace = () => {
    console.log('bks')
    }

    const handlePressed = (letter) => {
    setBoard((prev) =>{
        const nextState = deepCopyBoard(prev);
        nextState[0][0].letter;
        return nextState;

    })
    }

    console.log(board);
    return <>
    <div className="board">
    {board.map((row,rowIndex)=>(
        <div key={rowIndex} className="board-row">
            {row.map((cell,index)=>(
                <div className={`cell ${cell.variant}`} key={index}>
                {cell.letter}
                </div>
            ))}

        </div>
    ))}
    </div>
    <Keyboard onPressed={handlePressed} onBackspace={handleBackspace}/>
    
    </>
    
}