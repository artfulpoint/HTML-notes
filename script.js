
// function pageload(){
//     var pageNumber=document.getElementById("pNumber");
// let previousPage = document.getElementById("prev");
// let nextPage = document.getElementById("next");
// if(pageNumber!=='1'){
//     previousPage.setAttribute("style","display:inline");
// }else{
// previousPage.setAttribute("style","display:none");
// }
// if(pageNumber!=='4'){
//     nextPage.setAttribute("style","display:inline");
// }else{
// nextPage.setAttribute("style","display:none");
// }
// }

function currentlocation(){
        let href= window.location.href;
        let base="http://127.0.0.1:5500/projects/education-website/";
    href= href.replace(base,"");
    href=href.replace("index","");
    href=href.replaceAll("html","");
    href=href.replace(".","");
    return href;
}

function backward(e){
    let base="http://127.0.0.1:5500/projects/education-website/";
    let page=currentlocation();
    page=parseInt(page)-1;
    if(page!==0)
    {
        page="html"+page;
    }
    else{
        page="index"
    }
    window.location.href=base+page+".html";
}
function forward(e){
    let base="http://127.0.0.1:5500/projects/education-website/";
    let page=currentlocation();
    if(page ==="")
    {
        page=0;
    }
page=parseInt(page)+ 1;
page="html"+page;
    window.location.href=base+page+".html";
}

function dropdownOpen(e){
    let sibling= e.nextElementSibling;
    let child = e.querySelector(".arrow");
    if(sibling.classList.contains('no-show')){
        sibling.setAttribute("class","show");
        child.setAttribute("src","images/up-arrow.png");
    }else{
        sibling.setAttribute("class","no-show");
        child.setAttribute("src","images/down-arrow.png");

    }
}

function search(e){
    let List=document.getElementById('original');
    if(e!==""){
        let index=0;
        let size=0;
        let duplicate=new Array(size);
        let row=List.querySelectorAll('tr');
        for( i of row)
            {
                index++;
                let a = i.querySelectorAll('td')[1].innerText.toLowerCase().includes(e);
        if(a=== true){
            // let b=i;
            duplicate[size]=i.cloneNode(true);
            size++;
            // cloneNode(true);

        }
    }
        if(document.getElementById("duplicate")){
            document.getElementById("duplicate").remove();
        }
        document.getElementById("original").setAttribute("style","display:none;");
        let temp=document.createElement("tbody");
        temp.setAttribute("id","duplicate");
        for(i of duplicate)
            {
                temp.append(i);
            }
        document.querySelector('table').appendChild(temp);
}else{
    
    document.getElementById("duplicate").setAttribute("style","display:none;");
    document.getElementById("original").setAttribute("style","display: table-row-group;");
    let x= List;
    }
}