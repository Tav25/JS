function change(user){
    // полная переустановка объекта
    user= {
        name:"Tom"
    };
}
 
var bob ={ 
    name: "Bob"
};
console.log("before change:", bob.name);    // Bob
change(bob);
// console.log("after change:", bob.name);465464646
console.log("after change:", bob.name);     // Bob