if(localStorage){
      localStorage.getItem('items')
}
let inp=document.querySelector("#inp")
console.log(inp)
let btn=document.querySelector(".btn")
let boxes=document.querySelectorAll(".box")
let drag=null //initial elemnt to hold the item
btn.addEventListener("click",()=>{
      let valueOfInput=inp.value
      console.log(valueOfInput)
      // if(valueOfInput=''){
      if(valueOfInput!=''){  //جمدان 
         
 let p=document.createElement("p")
      p.classList.add("item")
      p.setAttribute('draggable','true')
      let task=document.createTextNode(valueOfInput)
      p.append(task)
      boxes[0].appendChild(p)
      inp.value=''
      }
     
DragItem()
})
function DragItem(){
      let items=document.querySelectorAll(".item") 
      //first step ==>start
      items.forEach(item=>{
            item.addEventListener("dragstart",()=>{
                  console.log('drag started')
                  drag=item //hold the task
                  item.style.opacity='0.5'
            })
            
            //five step==>end
            item.addEventListener("dragend",()=>{
                  console.log('drag end')
                  drag=null //lift the task
                  item.style.opacity='1'
            })
      })

      boxes.forEach(box=>{
            //third step==>over on boxes
            box.addEventListener("dragover",(e)=>{
                  e.preventDefault()
                  console.log('dragover');
                  box.style.background='#090';
                  box.style.color='#fff';
                 
            })
            //fourth step==>get styles on default
            box.addEventListener("dragleave",()=>{
                  console.log('dragleave');
                  box.style.background='#fff';
                  box.style.color='#000';
                 
            })
            //last step==>drop
            box.addEventListener("drop",()=>{
                  box.append(drag)
                box.style.background='#fff';
                  box.style.color='#000';
                  localStorage.setItem("items",boxes)
            })
      })
}

