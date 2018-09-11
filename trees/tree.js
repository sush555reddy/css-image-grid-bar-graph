var str;
axios.get('http://127.0.0.1:5500/trees/data.json').then((data)=>{
  console.log(data);
  var x = data.data;
  str = `<ul>
  <li id="root">
    <span class="label">${x.name}</span>`;
  iterate(x.children);
  str += '<li></ul>';
  document.getElementById("tree").innerHTML=str;
})



//var x = JSON.parse()
function getSpan(child) {
  str += `<li class="child"><span class="label">${child.name}</span>`;
  if (child.children) {
    iterate(child.children);
  }
  str+='</li>'
}
function iterate(children) {
    str += `<ul class="next">`;
    if(children.length==1){
      str+=`<li class="child one"><span class="label">${children[0].name}</span>`;
      if (children[0].children) {
    iterate(children[0].children);
  }
    }
    else{
    children.forEach(child => {
        getSpan(child);
    });
  }
    str += '</ul>'
}


