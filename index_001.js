let array0 = new Array(1,2,3);
let array1 = new Array('baafe','awb','yagfc', 'Cafgag');
let array2 = new Array({id:'bwj0509',pw:'1234'},{id:'bdj214',pw:'123463'});
let array3 = new Array(2123132132,23, 523, 23, 5, 3, 7, 8,3,1, 1441, 1456, 523626262, 62233);


function serchUser(targetId){
    const userList = [
        {id:1, name:'woojin'},
        {id:2, name:'hanna'}
    ]

    const findUser = userList.find((user)=> user.id === targetId);
    
    if(findUser === undefined){
        return null;
    }

    return findUser.name
}

console.log(serchUser(3))