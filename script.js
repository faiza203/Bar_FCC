fetch(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
).then(data  => {
    if(data.status === 200){
        console.log(data);
    }
})
