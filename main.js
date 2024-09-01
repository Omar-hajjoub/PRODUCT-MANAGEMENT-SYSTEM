
let title,pance,taxes,ads,discount,count,caregory,btncreate,total,search,btnCartegory,btntitle

title =document.getElementById('title');
pance =document.getElementById('pance');
taxes =document.getElementById('taxes');
ads =document.getElementById('ads');
discount =document.getElementById('discount');
count =document.getElementById('count');
caregory =document.getElementById('caregory');
btncreate =document.getElementById('create');
search =document.getElementById('search');
btnCartegory =document.getElementById('btnCartegory');
btntitle =document.getElementById('btntitle');
total =document.getElementById('total');
let totlnum=document.getElementById('totlnum')

function gettotal(){
    if (pance.value !=""){
        let resalt=(Number(pance.value)+Number(taxes.value)+Number(ads.value)
        - Number(discount.value))
        totlnum.innerHTML=resalt;
      total.style.background="#040"

    }else{
        totlnum.innerHTML="";
        total.style.background="red"


    }
}

//----- creait




let  dataPro=[]
if (localStorage.product != null) {
    dataPro=JSON.parse(localStorage.product)
}else{
    dataPro=[]
}

btncreate.onclick = function(){
   
    let nowpro = {
        title:title.value,
        pance:pance.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        totlnum:totlnum.innerHTML,
        count:count.value,
        caregory:caregory.value,
    }
    if (nowpro.count> 1) {
        for (let index = 0; index < nowpro.count; index++) {
            dataPro.push(nowpro)

        }
    }else{
        dataPro.push(nowpro)

    }
    localStorage.setItem('product', JSON.stringify(dataPro))
    SHOWDATA()
    dultvalue()
    
}

function dultvalue(){
    title.value=''
   pance.value= ''
   taxes.value= ''
   ads.value= ''
discount.value=''
count.value=''
caregory.value=''

totlnum.innerHTML= ''


}


function SHOWDATA()
{
    let datatable = ''
    for(let i = 0 ; i<dataPro.length ; i++){
        
        

        datatable +=`
        <tr>
        <td>${i}</td>
        <td>${dataPro[i].title} </td>
        <td>${dataPro[i].pance}</td>
        <td>${dataPro[i].taxes}</td>
        <td> ${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].count}</td>
        <td>${dataPro[i].caregory}</td>
        <td><button class="bg-green-700   rounded-full p-1 hover:scale-105 " id="Update">Update</button></td>
        <td><button class="bg-red-700  rounded-full p-1 hover:scale-105"  onclick=" Update(${i})">Delet</button></td>
    
    </tr>
        `
     
    }
    document.getElementById('todby') .innerHTML=datatable

    if(dataPro.length > 0){
        document.getElementById('deletallo').innerHTML=`
        <button class="w-full bg-red-900 text-3xl text-white shadow-2xl rounded-full  my-2  hover:scale-105"  onclick="deletall()" >
        deletallo (${dataPro.length})
        </button><br>

        `

    }else{
        document.getElementById('deletallo').innerHTML=''


    }

}
SHOWDATA()




function Update(i){
    dataPro.splice(i,1)
    localStorage.product = JSON.stringify(dataPro)
    SHOWDATA()
}


function deletall(){
    localStorage.clear
    dataPro.splice(0)

    SHOWDATA()

}
