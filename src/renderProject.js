/* la idea de esta fn es:
1) seleccionar los datos correctos de storage.js, de acuerdo a los parametros pasados
2) crear el elemento html que contenga las tareas
3) validar si existe ya algun proyecto cargado en el viewer
4) si existe, eliminar dicho proyuecto existente.
5) devolver a index.js  el elemento creado. Ya ese modulo se encarga de mostrar las tareas en pantalla.
*/

import {projects} from './storage.js';
import {deleteActualTask} from './deleteActualTask.js';


let taskTitle;
//let taskDueDate;
let taskContent;
let projectId;


export function renderProject(htmlInfo){   

    for (let val in projects){

        if(typeof projects[val] == 'object'){

            for (let val2 in projects[val]){
                    //valida si el id del botonhtml es igual a algun projID
                if(htmlInfo.id == projects[val].projId){

                    projectId = projects[val].projId;

                    //console.log('hay match ' + projects[val].projId);

                    for (let val3 in projects[val][val2]){

                        taskTitle = projects[val][val2].title;

                        //taskDueDate = projects[val][val2].dueDate

                        taskContent = projects[val][val2].taskContent
                        
                    }

                }                
                
                //console.log(projects[val][val2].title);
            }
        }
        
    } 
    /* hasta acá se hizo:
    -se matcheo, el ID pasado como arg del boton html presionado, con ALGUN id coincidente de   storage.js
    - se capturaron los datos relevantes (id, titulo, contenido) de la tarea que matcheara en ID con el boton*/


    //ojo aca donde se pone el codigo, quizás deba ir dentro del for

    let taskModule = document.createElement('div');

    taskModule.classList.add('task-module');    

    taskModule.innerHTML = 
    `
        <div class="task">

            <div class="task-details">

                <h5> ${taskTitle}</h5>
                <h5> DUEDATE </h5>        

            </div>
            
            
            <div class="task-content">
                <textarea> ${taskContent}</textarea>
            </div>


        </div>
    `

    deleteActualTask();    

    console.log('resultados fuera del for:  tasktitle >' + taskTitle + ' taskContent > ' + taskContent)

    return taskModule; 

}
