let leftCol = document.querySelector(".left_col");
let topRow = document.querySelector(".top_row");
let grid = document.querySelector(".grid");
let addressInput = document.querySelector(".address-input");
let boldBtn = document.querySelector(".bold");
let rows = 100;
let cols = 26;
// left_col
for (let i = 0; i < rows; i++) {
    let colBox = document.createElement("div");
    colBox.innerText = i + 1;
    colBox.setAttribute("class", "box");
    leftCol.appendChild(colBox);
}
// top_row
for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = String.fromCharCode(65 + i);
    // setAttribute
    cell.setAttribute("class", "cell");
    topRow.appendChild(cell);
}
// grid
for (let i = 0; i < rows; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        // cell.innerText=`${String.fromCharCode(65 + j)}  ${i+1}`
        cell.setAttribute("class", "cell");
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        cell.setAttribute("contenteditable","true");
        row.appendChild(cell);

    }
    grid.appendChild(row);
}

let sheetDB = [];
for(let i=0;i<rows;i++)
{
    let row =[];
    for(let j=0;j<cols;j++)
    {
        let cell ={
            bold:"normal",
            italic:"normal",
            underline: "none",hAlign:"center",
            fontFamily:"sans-serif",
            fontSize:"16",
            color:"black",
            bColor:"none"
        }
        row.push(cell);
    }
    sheetDB.push(row);
}
// event listener add click;
let allCells = document.querySelectorAll(".grid .cell");
for (let i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("click", function () {
        // address get current cell
        let rid = allCells[i].getAttribute("rid");
        let cid = allCells[i].getAttribute("cid");
        rid = Number(rid);
        cid = Number(cid);
        let address = `${String.fromCharCode(65 + cid)}${rid + 1}`;
        // alert(address);
        addressInput.value = address;
        let cellObject= sheetDB[rid][cid];
        //toolbar cell sync
        if(cellObject.bold==true)
        {
            boldBtn.classList.add("active-btn");
        }
        else
        {
            boldBtn.classList.remove("active-btn");
        }
    })
}
boldBtn.addEventListener("click",function(){
    let address = addressInput.value;
    let ricidobj = getRIDCIDfromAdress(address);
    let rid = ricidobj.rid;
    let cid = ricidobj.cid;
    let uiCellElement = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`)
    uiCellElement.style.fontWeight = "bold";
})
function getRIDCIDfromAdress(address){
    let cid = Number(address.charCodeAt(0))-65;
    let rid = Number(address.slice(1))  - 1;
    return {"rid":rid , "cid":cid};
}




boldBtn.addEventListener("change",function(){
    let val = fontSizeElem.value;
    let uiCellElement = findUICellElement();
    uiCellElement.style.fontSize-val+"px";
})
allCells[0].click();