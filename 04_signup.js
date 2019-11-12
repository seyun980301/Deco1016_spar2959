
var checkbox = $("input:checkbox[name='checkbox']").is(":checked");
    
if(!checkbox){
    alert("계절의 종류를 한개 이상 선택해주세요.");
    return false;
}
