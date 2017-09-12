import * as $ from 'jquery';

export class TodoAjax {

    getList(){
        $.ajax({
            url : 'http://localhost:3000/todo',
            type : 'GET',
            success: (code_html, statut)=>{
                console.log(code_html);
            }
         });
    }

    addList(data){
        $.ajax({
            url : 'http://localhost:3000/todo',
            type : 'POST',
            data:"nouveau="+data,
            success: (code_html, statut)=>{
                console.log(code_html);
            }
         });
    }

}