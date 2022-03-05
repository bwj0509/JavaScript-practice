const user = {
    name:"WOOJIN",
    showName: function(){
        console.log(`hello ${this.name}`)
    }
}

user.showName();

let fn = user.showName;

fn.call(user);
fn.apply(user);

let boundFn = fn.bind(user);

boundFn()