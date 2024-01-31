export class User{
  name: string;
  status: string;
  score: number;

  constructor(name: string, status: string, score: number){
    this.name = name;
    this.status = status;
    this.score = score;
  }
}
