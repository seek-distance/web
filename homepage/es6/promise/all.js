let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(1111)
        resolve(new Date);
    },2000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(2222)
        resolve(new Date);
    },3000)
})
console.log(new Date);
Promise.race([p1,p2]).then((data)=>{
    console.log('race resolve:'+data);  //那个跑的快就返回那个promise
},(data)=>{
    console.log('race reject:'+data);   //如果第二个参数存在这不会走catch
}).catch((error)=>{
    console.log('race error：'+error);   //如果第二个参数不存在reject时走catch，程序出错也是会走catch的。
})

/* Promise.all([p1,p2]).then((data)=>{
    console.log('all resolve:'+data);  //等最慢的跑完执行，返回两个的结果
},(data)=>{
    console.log('all reject:'+data);  //如果第二个参数存在这不会走catch
}).catch((error)=>{
    console.log('all error：'+error);    //如果第二个参数不存在reject时走catch，程序出错也是会走catch的。
}) */