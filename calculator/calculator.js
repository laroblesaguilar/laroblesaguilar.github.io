var input1 = document.getElementById("firstNum");
var input2 = document.getElementById("secondNum");
var firstNum = [];
var secondNum = [];
var calcOperator = document.getElementById("operator");

function addNum(number) {
    if (calcOperator.value.length === 0) {
        firstNum.push(number);
        input1.value = firstNum.join("");

    }
    if (calcOperator.value.length > 0) {
        secondNum.push(number);
        input2.value = secondNum.join("");
    }
}

function addOperator(operator) {
    if (isNaN(+operator)) {
        calcOperator.value = operator;
    }
}

function equals() {
    if (calcOperator.value === "+") {
        var sum = Number(input1.value.toString()) + Number(input2.value.toString());
        input1.value = sum;
        console.log(sum);
        calcOperator.value = "";
        secondNum = [];
        input2.value = secondNum;
    } else if (calcOperator.value === "-") {
        input1.value = Number(input1.value.toString()) - Number(input2.value.toString());
        calcOperator.value = "";
        secondNum = [];
        input2.value = secondNum;
    } else if (calcOperator.value === "*") {
        input1.value = Number(input1.value.toString()) * Number(input2.value.toString());
        calcOperator.value = "";
        secondNum = [];
        input2.value = secondNum;
    } else if( calcOperator.value === "/") {
        input1.value = Number(input1.value.toString()) / Number(input2.value.toString());
        calcOperator.value = "";
        secondNum = [];
        input2.value = secondNum;

    } else if(calcOperator.value === "^"){
        input1.value = Math.pow(Number(input1.value.toString()), Number(input2.value.toString()));
        calcOperator.value = "";
        secondNum = [];
        input2.value = secondNum;

    }

}

function clears(){
    // input2.value = "";
    // input1.value = "";
location.reload(true);

}



