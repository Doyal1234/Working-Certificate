name=localStorage.getItem("name");
document.getElementById("name").innerHTML=name;

grade=localStorage.getItem("grade");
document.getElementById("grade").innerHTML=grade;

sec=localStorage.getItem("sec");
document.getElementById("sec").innerHTML=sec;

roll=localStorage.getItem("roll");
document.getElementById("roll").innerHTML=roll;

eng=localStorage.getItem("eng");
document.getElementById("english").innerHTML=eng +"  Marks";

hin=localStorage.getItem("hin");
document.getElementById("hin").innerHTML=hin +"  Marks";

math=localStorage.getItem("math");
document.getElementById("math").innerHTML=math +"  Marks";

if (eng>33) {
    document.getElementById("marks1").innerHTML="Pass";


}
else{
    document.getElementById("marks1").innerHTML="Fail";
}

if (hin>33) {
    document.getElementById("marks2").innerHTML="Pass";


}
else{
    document.getElementById("marks2").innerHTML="Fail";
}

if (math>33) {
    document.getElementById("marks3").innerHTML="Pass";


}
else{
    document.getElementById("marks3").innerHTML="Fail";
}
if (eng>=90) {
    document.getElementById("grade1").innerHTML="A1";

}
else if(eng>=80&&eng<90) {
    document.getElementById("grade1").innerHTML="A2";

}
else if(eng>=70&&eng<80) {
    document.getElementById("grade1").innerHTML="B1";

}
else if(eng>=60&&eng<70) {
    document.getElementById("grade1").innerHTML="B2";

}
else if(eng>=50&&eng<60) {
    document.getElementById("grade1").innerHTML="C1";

}
else if(eng>=40&&eng<50) {
    document.getElementById("grade1").innerHTML="C2";

}
else if(eng>=30&&eng<40) {
    document.getElementById("grade1").innerHTML="D";

}
else if(eng<30) {
    document.getElementById("grade1").innerHTML="E (Needs Improvement)";

}

if (hin>=90) {
    document.getElementById("grade2").innerHTML="A1";

}
else if(hin>=80&&hin<90) {
    document.getElementById("grade2").innerHTML="A2";

}
else if(hin>=70&&hin<80) {
    document.getElementById("grade2").innerHTML="B1";

}
else if(hin>=60&&hin<70) {
    document.getElementById("grade2").innerHTML="B2";

}
else if(hin>=50&&hin<60) {
    document.getElementById("grade2").innerHTML="C1";

}
else if(hin>=40&&hin<50) {
    document.getElementById("grade2").innerHTML="C2";

}
else if(hin>=30&&hin<40) {
    document.getElementById("grade2").innerHTML="D";

}
else if(hin<30) {
    document.getElementById("grade2").innerHTML="E (Needs Improvement)";

}

if (math>=90) {
    document.getElementById("grade3").innerHTML="A1";

}
else if(math>=80&&math<90) {
    document.getElementById("grade3").innerHTML="A2";

}
else if(math>=70&&math<80) {
    document.getElementById("grade3").innerHTML="B1";

}
else if(math>=60&&math<70) {
    document.getElementById("grade3").innerHTML="B2";

}
else if(math>=50&&math<60) {
    document.getElementById("grade3").innerHTML="C1";

}
else if(math>=40&&math<50) {
    document.getElementById("grade3").innerHTML="C2";

}
else if(math>=30&&math<40) {
    document.getElementById("grade3").innerHTML="D";

}
else if(math<30) {
    document.getElementById("grade3").innerHTML="E (Needs Improvement)";

}