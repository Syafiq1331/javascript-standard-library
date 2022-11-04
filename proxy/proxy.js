const target = {};

const handler = {
    get: function (target, property) {
        return target[property];
    },
    set: function (target, property, value) {
        if(value == null) {
            target[property] = "";
        }else {
            target[property] = value;
        }
    }
}

const proxy = new Proxy(target, handler);
proxy.firstName = "Syafiq";
proxy.lastName = "Rizky";

console.log(proxy.firstName);
console.log(proxy.lastName);
console.log(target);