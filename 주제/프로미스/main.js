const pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("OK")
    },2000)
});

console.log('시작');

pr.then((result)=>{
    console.log(result)
})
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
      console.log('끝')
  })