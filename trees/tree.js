var x = {
  name: "parent",
  children: [
    {
      name: "child 1",
      children: [
        {
          name: "grad-child 1-1",
        },
        {
          name: "grad-child 1 - 2"
        }
      ]
    },
    {
      name: "child 2",
      children: [
        {
          name: "grad-child 2-1",children: [
            {
              name: "grad-child 2-1-1"
            },
            {
              name: "grad-child  2-2-2"
            },
            {
              name: "grad-child  2-3-3"
            }
          ]
        },
        {
          name: " grad-child 2-2"
        }
      ]
    },
    {
      name: "child 3",
      children: [
        {
          name: "grad-child 3-1"
        }
      ]
    }
  ]
};

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
var str = `<ul>
      <li id="root">
        <span class="label">${x.name}</span>`;

iterate(x.children);

str += '<li></ul>';

document.getElementById("tree").innerHTML=str;

