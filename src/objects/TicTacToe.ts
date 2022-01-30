import { Sign } from "./Sign";

export class TicTacToe {
    private _field: Sign[] = [];
    private _playerOneTurn = true;
    private _winnerFound = false;
    private _message = "";

    public get message(): string {
        return this._message;
    }

    public get currentChar(): string {
        return this._playerOneTurn ? Sign.Cross : Sign.Circle; 
    }

    public get winnerFound(): boolean {
        return this._winnerFound;
    }

    public get field(): Sign[] {
        return this._field;
    }

    constructor() {
        this.initializeField();
    }

    public initializeField(): void {
        for(let i = 0; i < 9; i++) 
            this._field[i] = Sign.None;
    }

    public setField(position: number): void {
        if(this._winnerFound)
            return;

        if(position < 0 || position >= 9) 
            console.log(`Something went wrong, position is: ${position}`);

        const sign = this._playerOneTurn ? Sign.Cross : Sign.Circle;
       
        if(this._field[position] != Sign.None)
            return;
        
        this._field[position] = sign;
        this._playerOneTurn = !this._playerOneTurn;

        this.checkForWinner(sign);
    }

    private checkForWinner(sign: Sign): void {
        let didWon = false;

        for(let i = 0; i < 3; i += 3) {
            if(this.field[i] == sign && this.field[i + 1] == sign && this.field[i + 2] == sign) {
                didWon = true;
                break;
            }
        }

        for(let i = 0; i < 3; i++) {
            if(this.field[i] == sign && this.field[i + 3] == sign && this.field[i + 6] == sign) {
                didWon = true;
                break;
            }
        }

        if(this.field[0] == sign && this.field[4] == sign && this.field[8] == sign)
            didWon = true;

        if(this.field[2] == sign && this.field[4] == sign && this.field[6] == sign)
            didWon = true;

        if(didWon) {
            this.setMessage(`Player ${sign} won`);
            return;
        }

        let isDraw = true;
        for(const sign of this.field) {
            if(sign == Sign.None) {
                isDraw = false;
                break;
            }
        }

        if(isDraw)
            this.setMessage("It's a draw :(");
    }

    private setMessage(message: string): void {
        this._message = message;
        this._winnerFound = true;
    }

    public newGame(): void {
        this.initializeField();
        this._playerOneTurn = true;
        this._winnerFound = false;
        this._message = "";
    }
}