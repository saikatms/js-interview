let arr = ["saikat", "mondal"];
// arr. how arr access to those methods and property
let object = {
  name: "saikat",
  title: "mondal",
  getIntro: function () {
    console.log(this.name + " " + this.title);
  },
};
function fun(params) {}
// arr.__proto__=arr.prototype                  |
// arr.__proto__.__proto__ = Object.__proto__;  |  This chain is called prototypr chaining
// arr.__proto__.__proto__.__proto__=null;      |

// Object.__proto__==Object.prototype           |
// Object.__proto__.__proto__ == null;          |

// fun.__proto__==fun.prototype                 |
// fun.__proto__.__proto__=Object.prototype     |

// let understand better

//Prototype inheritance
let object2 = {
  name: "saikat2",
};
//Never do this.. couse performance issue
object2.__proto__ = object;
// console.log(object, object2, object2.__proto__);

// console.log(object2.name, object2.title); // First check title is there in object2 , if not present then check
// object.__proto__, if not present then it will check object.__proto__.__proto

object.getIntro();
object2.getIntro();

Function.prototype.myBind = function () {
  console.log("sss");
};
fun.__proto__.myBind();
