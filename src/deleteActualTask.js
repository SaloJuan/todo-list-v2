export function deleteActualTask(){

    let actualTaskModule = document.querySelector('.task-module');


    if(actualTaskModule != null){

        console.log('entra en if task-module');
    
        actualTaskModule.remove();
    }
    else 
        //la primera vez siempre fallara ya que no deberia existir tarea cargada en el viewer
    console.log('no funcó el if de validar task-module');

}


