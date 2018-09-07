var data = {
    items : ["a","b","c","d","e","f","p","u"],
    values : [10,25,30,12,15,18,45,56]
  }
  
  function createBar(data){
    var str = `<div id="data"><ul class="bargraph">`;
    for(var i=0; i<data.values.length; i++){
      str+=`<li style="width:${data.values[i]*3}%;background-color:red;"<span>${data.items[i]}</span><span>${data.values[i]*3}%</span></li>`;
    }
    str+="</ul></div>"
    
   document.getElementById("container").insertAdjacentHTML('beforeend', str);
    
    console.log(str);
  }
    document.getElementById("container").insertAdjacentHTML('afterbegin', 
    `<div style="width:3px;height:${data.items.length * 30}px;background-color:black;margin:10px 0px 10px 10px;}" id="vl" class="vl"> 
  </div>`); 
  createBar(data);