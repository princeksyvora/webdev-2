let tasks=[];
function addTask(event){
    event.preventDefault();
    const input=document.getElementById("taskname");
    if(input.value !== ""){
        const newtask = {
            text: input.value,
            tskStatus: "Just Added"
        };
        tasks.push(newtask);
        input.value="";
    }
    else{
        alert("Enter a task before submitting");
    }
}
function updateStatus(newsts, index){
     tasks[index].tskStatus= newsts;
}
function removeTask(index){
    tasks.splice(index,1);
    ListTask();
}
function ListTask(){
    const tasklist= document.getElementById("tasklist");
    tasklist.innerHTML="";
    tasks.forEach((task, index) => {
        const listItem=document.createElement("li");
        const text= document.createElement("span");
        text.textContent=`${task.text}`;

        const setStatus= document.createElement("select");
        const statuses=["Just Added", "Pending", "In Progress", "Completed"];
        statuses.forEach(sts => {
            const opt = document.createElement("option");
            opt.value=sts;
            opt.textContent=sts;
            setStatus.appendChild(opt);
        });
        setStatus.value= task.tskStatus;
        // const changbtn= document.createElement("button");
        // changbtn.textContent="Change Status";
        // changbtn.onclick =()=> updateStatus(setStatus.value, index);
        setStatus.onchange =()=> updateStatus(setStatus.value, index)
        
        const removebtn= document.createElement("button");
        removebtn.textContent="Remove";
        removebtn.onclick = () => removeTask(index); 
        removebtn.style.margin="7px";

        listItem.appendChild(text);
        listItem.appendChild(setStatus);
        listItem.appendChild(removebtn);
        tasklist.appendChild(listItem);

    });
}