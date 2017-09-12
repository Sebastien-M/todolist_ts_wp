import * as $ from 'jquery';
import {TodoAjax} from "./todo-ajax";

let ajax = new TodoAjax();
let todo = <HTMLInputElement>document.querySelector("#todo");

ajax.getList();

document.querySelector("#send").addEventListener("click",()=>{
    console.log(todo.value);
    ajax.addList(todo.value);
    ajax.getList();
});
