import './styles.css'
import './aside.css'
import {renderProject} from './renderProject'

let taskViewer = document.querySelector('.tasks-viewer');

let lastProjectId = 1;


let projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach((elem) =>{

    elem.addEventListener('click', (ev) =>{        
        
        let newTaskModule = renderProject(elem);        

        taskViewer.appendChild(newTaskModule);
    })

})



























/**
 
 

let matchProj = (idToSearch) => {

    for (let val in Projects){

        if(idToSearch == Projects[val].projId){

            console.log('match ' + idToSearch + ' ' + Projects[val].projId);

            projToShow = Projects[val];

            console.log(projToShow.tasks[val].taskInfo);

            return Projects[val].projId;

        }


 */