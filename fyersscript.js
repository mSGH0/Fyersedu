//import {data} from "./data.js";
let levelbtns = Array.from(document.querySelectorAll(".ed-item"));
let contentCon = document.getElementById("content");
let menuIcons = Array.from(document.querySelectorAll(".menu-con > img"));
let navigationRoute = [];
let header = "<section id = 'icon_con' class='fi-flex fi-alignvc fi-hcenter'><div id='icon'>someimage</div></section>";
let footer = "<section id = 'footer' class='fi-flex fi-alignvc fi-hcenter'><div id='footer_icon'>footericon</div></section>";
let elClickedName = [];
let counter = 0;
let activeElIndex = 0;

let count = 0;







menuIcons[2].addEventListener('click', ()=>{
    console.log(navigationRoute);
});

// let bsArr = 
// let secArr = ;
// let tCourseArr = ;
// let crech = [];
// let kg = ;
// let basic = ;
// let jhs = ;

/*let business = [
"Business",
["Secretariat", "Accounting"], 
["Typewriting", "Clerical Office Duties", "English Language", "Mathematics", "Integrated Science", "Social Studies", "Business Management", "Economics"],
["Cost Accounting", "Elective Mathematics"],
["English Language", "Mathematics", "Integrated Science", "Social Studies", "Financial Accounting", "Cost Accounting", "Economics", "Business Management"], 
["English Language", "Mathematics","Social Studies","Integrated Science","Financial Accounting", "Elective Mathematics" ,"Economics", "Business Managements"]
];*/
// let business = [coresubjs.join(["Business Management", "Economics"]), ["Typewriting", "Clerical Office Duties"], "Financial Accounting", "Cost Accounting", "Elective Mathematics"];


function createElCon(arr){
    counter ++;
    // console.log("counter 1st"+ counter);
    contentCon.innerHTML = "";
    contentCon.style.gridTemplatesColumns = `repeat(${arr.length}, 1fr)`;
    function createEls(text){
        let pel = document.createElement("div");
        pel.setAttribute('class', "fi-flexAlVHC");
        let childEl = document.createElement("div");
        childEl.setAttribute("class", "ed-item");
        childEl.innerHTML = text;
        pel.appendChild(childEl);
        contentCon.appendChild(pel);
    }
    
    function createCourseCon(arr){
        let articleContent = "";
        for(let t = 0; t < arr.length; t ++){
            if(elClickedName[0] == arr[t][2]){
                articleContent = arr[t];
            }
        }
        let aside = document.createElement("div");
        aside.classList = "aside fi-w30 fi-h100";
        let article = document.createElement("div");
        article.classList = "arti fi-w70 fi-h100";
        let head = document.createElement("h1");
        head.classList = "artihead fi-w100 fi-flex fi-alignvc"
        head.innerHTML = articleContent[0][0];
        article.appendChild(head);
        let articleBody = document.createElement("div");
        articleBody.classList = "artibody fi-w100";
        articleBody.innerHTML = articleContent[1][0];
        article.appendChild(articleBody);
        
        
        //console.log("elname from create course content"+ elClickedName);
        contentCon.classList  = "fi-flex fi-w100";
        contentCon.style.background = "white";
        let kelArr = [];
        for(let i = 0; i < articleContent[0].length; i++){
            let kel = document.createElement("div");
            if(i == 0){
                kel.classList = 'active fi-w100';
            }else{
                kel.classList = "fi-w100";
            }
            kel.style.padding = "5px"
            kel.innerHTML =  articleContent[0][i];
            aside.appendChild(kel);
            kelArr.push(kel);
        }
        
        contentCon.appendChild(aside);
        contentCon.appendChild(article);
        menuIcons[1].addEventListener('click', ()=>{
            if(aside.classList == "aside fi-w30 fi-h100"){
                aside.classList = "fi-none";
                article.classList = "arti fi-w100 fi-h100";
            }else{
                aside.classList = "aside fi-w30 fi-h100";
                article.classList = "arti fi-w70 fi-h100";
            }
        });
        
        kelArr.forEach((el)=>{
            el.addEventListener('click', ()=>{
                let elIndex = kelArr.indexOf(el);
                kelArr[activeElIndex].classList.remove("active");
                kelArr[elIndex].classList.add("active");
                head.innerHTML = kelArr[elIndex].textContent;
                articleBody.innerHTML = articleContent[1][elIndex];
                activeElIndex = elIndex;
            });
        });
        
    }
    
    if(counter == 3){
        createCourseCon(arr);
    }else{
        for(let i = 0; i < arr.length; i ++){
            if(typeof arr[i] == "string"){
                createEls(arr[i]);
            }else{
                for(let j = 0; j < arr[i].length; j++){
                    createEls(arr[i][j]);
                }
            }
        }
    }
    
    levelbtns = Array.from(document.querySelectorAll(".ed-item"));
    levelbtns.forEach(el=>{
        // going to change the nature of data
        el.addEventListener("click", ()=>{
            let elName = el.textContent;
            elClickedName.push(elName);
            navigationRoute.push(elName);
            console.log(elName+"elName second click");
            
            // createElCon(data[counter-1][0]);
            // console.log("counter 2nd"+counter);
            // console.log(data[counter][0]);
            
            function checkElNameForCla(arr){
                for(let i = 0; i < arr.length; i++){
                    if(elName == arr[i]){
                        return true;
                    }
                }
                return false;
            }
            
            for(let j = 0; j < data[counter].length; j++){
                let classData = data[0][1];
                if(checkElNameForCla(classData[1])){
                    elName = "kg";
                }else if(checkElNameForCla(classData[2])){
                    elName = "primary";
                }else if(checkElNameForCla(classData[3])){
                    elName = "jhs"
                }
                let arrdata = data[counter][j];
                for(let k = 0; k < arrdata.length; k ++){
                    if(elName == arrdata[k]){
                        arrdata.splice(0, 1);
                        createElCon(arrdata);
                    }
                }
                
            }
        });
        //console.log(el.textContent);
    })
}
/*
setInterval(()=>{
    levelbtns.forEach((el)=>{
        console.log(el.textContent);
    })
    
}, 1000);
*/

levelbtns.forEach(el=>{
    el.addEventListener("click",()=>{
    let elName = el.textContent;
        console.log(elName+"first click");
        navigationRoute.push(elName);
        if(elName == "Basic Education"){
        createElCon(data[counter][1]);
    }else if(elName == "Secondary Education"){
        createElCon(data[counter][2]);
        //console.log(levelbtns);
    }else if(elName == "T - Courses"){
        createElCon(data[counter][3]);
    }   else if(elName == "Religion"){
        createElCon(data[counter][4]);
    }   
    });
});

menuIcons[0].addEventListener('click', ()=>{
    count++;
    //console.log("back icon");
    let lastPos = navigationRoute.length - 1;
    let lastItem = navigationRoute[lastPos];
    //console.log(navigationRoute);
    
    if(lastItem != undefined){
        //console.log("naviroute="+navigationRoute);
         console.log("LastItem = " + lastItem);
        //console.log("not undefined last item");
        for(let i = 0; i < data.length; i++){
            for(let j = 0; j < data[i].length; j++){
                for(let k = 0; k < data[i][j].length; k++){
                    if(lastItem == data[i][j][k]){
                        console.log(data[i][j][k], " = true");
                        console.log(data[i][j]);
                        createElCon(data[i][j]);
                        counter--;
                        elClickedName.splice(lastPos, 1);
                    }
                }
            }
        }
    }/*else{
        count = 0;
        lastItem = navigationRoute[count];
    }*/
    
})