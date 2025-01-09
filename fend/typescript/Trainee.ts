//only methods are abstract not the members by default and no acess modifiers
interface Trainee{
 id:number;
 name:string;
  show():void;
}

// class TraineeImpl implements Trainee{
//     id: number;
//     name: string;
//     show(): void {
//         throw new Error("Method not implemented.");
//     }

// }

let trainee:Trainee={
    id:1,
    name:"sai",
    show()
    {
        console.log(this.id)
        console.log(this.name)
    }
}
trainee.show();