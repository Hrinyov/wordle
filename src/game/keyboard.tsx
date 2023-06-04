const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

const buttons = rows.map(row => row.split(''));

export const Keyboard = ({onBackspace, onPressed}) => (<div className="keyboard">
<div>
{buttons.map((row, index)  => (
    <div key={index}>
        {row.map(letter => ( 
            <button onClick={()=>onPressed(letter)} key={letter}>{letter}</button>))}
    </div>))}
</div>
<button onClick={()=> onBackspace()}>Backspace</button>
</div>);
