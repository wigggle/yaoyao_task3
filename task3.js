/**
 * Created by mshuang on 2017/6/13.
 */
//����ѧУ�Ķ�ά���飬˳��ͳ�������ͬ��
var schoolArray = [
    ['������ѧ','�廪��ѧ','�������պ����ѧ','�����ʵ��ѧ'],
    ['�Ϻ���ͨ��ѧ','�Ϻ�����ѧ','�Ϻ�ʦ����ѧ','�Ϻ��ƾ���ѧ',],
    ['��ɽ��ѧ','���ݴ�ѧ','����ʦ����ѧ']
];

//��ȡѧУ��䵽option
function getCity() {
    //��ȡ����������
    var city = document.getElementById('city');
    //��ȡѧУ������
    var school = document.getElementById('school');
    //�õ���Ӧ���е�ѧУ����
    var city_school = schoolArray[city.selectedIndex -1];
    //���ѧУ�����򣬽�����ʾѡ��
    school.length=1;

    //��ѧУ��ά�����е�ֵ��䵽������������
    for(var i=0; i<city_school.length; i++){
        school[i+1] = new Option(city_school[i],city_school[i]);
    }
}

//���������֪��Ϊʲô���ܸı�ѡ�
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