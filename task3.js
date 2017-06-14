/**
 * Created by mshuang on 2017/6/13.
 */
//定义学校的二维数组，顺序和城市是相同的
var schoolArray = [
    ['北京大学','清华大学','北京航空航天大学','北京邮电大学'],
    ['上海交通大学','上海理工大学','上海师范大学','上海财经大学',],
    ['中山大学','广州大学','广州师范大学']
];

//获取学校填充到option
function getCity() {
    //获取城市下拉框
    var city = document.getElementById('city');
    //获取学校下拉框
    var school = document.getElementById('school');
    //得到对应城市的学校数组
    var city_school = schoolArray[city.selectedIndex -1];
    //清空学校下拉框，仅留提示选项
    school.length=1;

    //将学校二维数组中的值填充到城市下拉框中
    for(var i=0; i<city_school.length; i++){
        school[i+1] = new Option(city_school[i],city_school[i]);
    }
}

//这个函数不知道为什么不能改变选项卡
/*function radio_change(){
    var student = document.getElementsByName('student');
    for(var i=0; i<student[i].length; i++){
        if(student[i].checked){
            if(student[i].value == '1'){
                document.getElementById('table_in').style.display="block";
                document.getElementById('table_out').style.display="none";
            }else if(student[i].value == '2'){
                document.getElementById('table_in').style.display="none";
                document.getElementById('table_out').style.display="block";
            }
        }
    }
}*/

function in_school_form(){
    document.getElementById('table_in').style.display="block";
    document.getElementById('table_out').style.display="none";
}
function out_school_form(){
    document.getElementById('table_in').style.display="none";
    document.getElementById('table_out').style.display="block";
}