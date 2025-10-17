let a = {
    name :"BMW",
    cost :75.6,
    mileage :8.6,

    start : function()
    {
        console.log("Car s starting")
    },

    stop : function()
    {
        console.log("Car is stopping")
    },
    Accerlate : function()
    {
        console.log("Car is Accerlating")
    }

};
console.log(a.name);
console.log(a.cost);
console.log(a.mileage);

a.start();
a.stop();
