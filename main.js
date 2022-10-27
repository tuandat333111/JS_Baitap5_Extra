/**
 * Bài tập 1: 
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập họ và tên, tổng thu nhập năm, tổng số người phụ thuộc.
 * + Xử lí:
 * Tính thuế thu nhập cá nhân theo công thức sau:
 * - Nếu thu nhập <=60 triệu: thuế= thu nhập * 5%;
 * - Nếu 60triệu < thu nhập <= 120 triệu: thuế= 60triệu * 5% + (thu nhập-60triệu) * 10%; 
 * - Nếu 120triệu < thu nhập <= 210 triệu: thuế= 60triệu * 5% + 60triệu * 10% + (thu nhập-120triệu) * 15%;  
 * - Nếu 210triệu < thu nhập <= 384 triệu: thuế= 60triệu * 5% + 60triệu * 10% + 90triệu * 15% + (thu nhập-210triệu)*20%;
 * - Nếu 384triệu < thu nhập <= 624 triệu: thuế= 60triệu * 5% + 60triệu * 10% + 90triệu * 15% + 174triệu * 20% + (thu nhập-384triệu)*25%;  
 * - Nếu 624triệu < thu nhập <= 960 triệu: thuế= 60triệu * 5% + 60triệu * 10% + 90triệu * 15% + 174triệu * 20% + 240triệu * 25% + (thu nhập-624triệu)*30%;
 * - Nếu 960triệu < thu nhập: thuế= 60triệu * 5% + 60triệu * 10% + 90triệu * 15% + 174triệu * 20% + 240triệu * 25% + 336triệu * 30% + (thu nhập-960triệu)*35%;   
 * + Đầu ra:
 * Xuất ra màn hình kết quả thuế thu nhập.
 */
 const numberFormat = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

document.getElementById("btnCalPI").onclick=function(){
    var fullname=document.getElementById("fullname").value;
    var income=document.getElementById("yearIncome").value*1;
    var familyamount=document.getElementById("familyAmount").value*1;
    var incomeBeforeTax=income-4000000-familyamount*1600000;
    var taxAmount=0;
    var resultCalPI="";
    if (incomeBeforeTax<=60000000){
        taxAmount=incomeBeforeTax*5/100;
    }
    else if(60000000<incomeBeforeTax<=120000000){
        taxAmount=60000000 * 5/100 + (incomeBeforeTax-60000000) * 10/100;
    }
    else if(120000000<incomeBeforeTax<=210000000){
        taxAmount=60000000 * 5/100 + 60000000 * 10/100 + (incomeBeforeTax-120000000) * 15/100;  
    }
    else if(210000000<incomeBeforeTax<=384000000){
        taxAmount=60000000 * 5/100 + 60000000 * 10/100 + 90000000 * 15/100 + (incomeBeforeTax-210000000) * 20/100;  
    }
    else if(384000000<incomeBeforeTax<=624000000){
        taxAmount=60000000 * 5/100 + 60000000 * 10/100 + 90000000 * 15/100 + 174000000 * 20/100+ (incomeBeforeTax-384000000) * 25/100;  
    }
    else if(624000000<incomeBeforeTax<=960000000){
        taxAmount=60000000 * 5/100 + 60000000 * 10/100 + 90000000 * 15/100 + 174000000 * 20/100+ 240000000 * 25/100 + (incomeBeforeTax-624000000) * 30/100;  
    }
    else if(960000000<incomeBeforeTax){
        taxAmount=60000000 * 5/100 + 60000000 * 10/100 + 90000000 * 15/100 + 174000000 * 20/100+ 240000000 * 25/100 + 336000000 * 30/100 + (incomeBeforeTax-960000000) * 35/100;  
    }
    resultCalPI="<p>Thuế của "+fullname+" phải đóng là: "+numberFormat.format(taxAmount)+"</p>";
    document.getElementById("resultCalPI").innerHTML=resultCalPI;
}
/**
 * Bài tập 2:
 * Mô hình 3 khối:
 * + Đầu vào:
 * Nhập mã khách hàng, chọn loại khách hàng, nhập số kết nối, nhập số kênh cao cấp.
 * + Xử lí:
 * Nếu khách hàng là nhà dân - > ô nhập số kết nối bị disabled và công thức tính như sau:
 * total =4.5$ + 20.5$ + 7.5$* số kênh cao cấp;
 * Nếu khách hàng là doanh nghiệp -> ô nhập số kết nối enabled và có công thức như sau:
 * - Nếu số kết nối <=10: total= 15$+75$+50$*số kênh cao cấp;
 * - Nếu số kết nối >10: total=15$+75$+(số kết nối-10)*5$+50$* số kênh cao cấp;
 * + Đầu ra:
 * Xuất kế quả ra màn hình
 */
document.getElementById("customerType").oninput=function(){
    var customerType=document.getElementById("customerType").value;
    if(customerType=="Nhà dân"){
       document.getElementById("connectionQuantity").setAttribute("disabled","");
    }
    else{
        document.getElementById("connectionQuantity").removeAttribute("disabled","");
    }
}
document.getElementById("btnCalTotal").onclick=function(){
    var id=document.getElementById("customerID").value;
    var customerType=document.getElementById("customerType").value;
    var connectionQuantity=document.getElementById("connectionQuantity").value*1;
    var highClassChannel=document.getElementById("highClassChannel").value*1;
    var total=0;
    console.log(id,customerType,connectionQuantity,highClassChannel);
    if(customerType==="Nhà dân"){
        total=4.5 + 20.5 + 7.5* highClassChannel;
    }
    else {
        if(connectionQuantity<=10){
            total=15+75+50*highClassChannel;
        }
        else{
            total=15+75+(connectionQuantity-10)*5+50* highClassChannel;
        }
    }
    var resultCalTotal="";
    resultCalTotal+="<p>Mã khách hàng: "+id+"</p>";
    resultCalTotal+="<p>Loại khách hàng: "+customerType+"</p>";
    resultCalTotal+="<p>Tổng số tiền cáp là: "+total+"$</p>";
    document.getElementById("resultCalTotal").innerHTML=resultCalTotal;
}