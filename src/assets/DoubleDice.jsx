export default function DoubleDice() {
    const num1 = Math.floor(Math.random()*3+1);
    const num2 = Math.floor(Math.random()*3+1);
    if (num1 === num2){
        return <div>
        <h2>YOU WIN!!</h2>
        <h4>{num1}</h4>
        <h4>{num2}</h4>
    </div>
    }
    else{
        return <div>
            <h2>YOU LOSE!!</h2>
            <h4>{num1}</h4>
            <h4>{num2}</h4>
        </div>
    }

}