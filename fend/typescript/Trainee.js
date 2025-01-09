// class TraineeImpl implements Trainee{
//     id: number;
//     name: string;
//     show(): void {
//         throw new Error("Method not implemented.");
//     }
// }
var trainee = {
    id: 1,
    name: "sai",
    show: function () {
        console.log(this.id);
        console.log(this.name);
    }
};
trainee.show();
