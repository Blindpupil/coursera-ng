// **  Prototypal inheritance
// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("walking!");
//   }
// };
//
// var child = Object.create(parent);  //see the syntax for creating child objects
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// child.value = "childValue";             //this will not change the value of the parent
// child.obj.objValue = "childObjValue";   //since here we're referencing directly .obj. this will change the value of the parent
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);  //results true
//
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

// ** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("myDog: ", myDog);

// Not being used as a function constructor
Dog("Max2");
new Dog("Max3");
