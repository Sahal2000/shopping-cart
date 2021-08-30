//Phone
const addMobile = document.getElementById("plusPhone");

addMobile.addEventListener("click" ,function()
{
    update("mobileCount","pricePhone");
})

const removeMobile = document.getElementById("minusPhone");

removeMobile.addEventListener("click" ,function()
{
    update2("mobileCount","pricePhone");
})


//Phone Case
const addCase = document.getElementById("plusCase");

addCase.addEventListener("click" ,function()
{
    update("caseCount","priceCase");
})

const removeCase = document.getElementById("minusCase");

removeCase.addEventListener("click" ,function()
{
    update2("caseCount","priceCase");
})


function update(id1 , id2)
{
    const curSubTotal = document.getElementById("subTotal").innerText;
    let curSubTotalNumber = parseFloat(curSubTotal);

    const curTotal = document.getElementById("Total").innerText;
    let curTotalNumber = parseFloat(curTotal);
    
    const phoneCount = document.getElementById(id1).value;
    let x = parseFloat(phoneCount);
    const y = document.getElementById(id2).innerText;
    const z = parseFloat(y);
    let r = z/x;

    curSubTotalNumber = curSubTotalNumber - z;
    curTotalNumber = curTotalNumber - z;

    x++;
    document.getElementById(id1).value = x;
    const totalPhonePrice = x * r;
    document.getElementById(id2).innerText = totalPhonePrice;

    curSubTotalNumber = curSubTotalNumber + totalPhonePrice;
    document.getElementById("subTotal").innerText = curSubTotalNumber;

    curTotalNumber = curTotalNumber + totalPhonePrice;
    document.getElementById("Total").innerText = curTotalNumber;
}

function update2(id1 , id2)
{
    const curSubTotal = document.getElementById("subTotal").innerText;
    let curSubTotalNumber = parseFloat(curSubTotal);

    const curTotal = document.getElementById("Total").innerText;
    let curTotalNumber = parseFloat(curTotal);

    const phoneCount = document.getElementById(id1).value;
    let x = parseFloat(phoneCount);
    const y = document.getElementById(id2).innerText;
    const z = parseFloat(y);
    let r = z/x;

    curSubTotalNumber = curSubTotalNumber - z;
    curTotalNumber = curTotalNumber - z;

    if(x>1)x--;
    document.getElementById(id1).value = x;
    const totalPhonePrice = x * r;
    document.getElementById(id2).innerText = totalPhonePrice;

    curSubTotalNumber = curSubTotalNumber + totalPhonePrice;
    document.getElementById("subTotal").innerText = curSubTotalNumber;

    curTotalNumber = curTotalNumber + totalPhonePrice;
    document.getElementById("Total").innerText = curTotalNumber;
}


