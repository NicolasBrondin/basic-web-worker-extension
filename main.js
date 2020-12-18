if (window.Worker) {

    let myWorker = new Worker('worker.js');
    let webWorker = document.querySelector("#webWorker");
    let first = document.querySelector("#input-1");
    let result = document.querySelector("#result");

    function main_pow_3(nb) {
        let result = 0;
        for(let i = 0 ; i < nb ; i++) {
            for(let j = 0 ; j < nb ; j++) {
                for(let k = 0 ; k < nb ; k++) {
                    result++;
                }
            }
        }
        return result;
    }

    button.onclick = function() {
        result.value = "Wait...";
        if(webWorker.checked){
            console.log("Computing with web workers");
            myWorker.postMessage([first.value]);
            console.log('Message posted to worker');
        } else {
            console.log("Computing without web workers");
            setTimeout(function(){
                result.value = main_pow_3(first.value);
            },0);
        }
    }

    myWorker.onmessage = function(e) {
        result.value = e.data;
        console.log('Message received from worker');
      }

} else {
    alert("Web Worker not available");
}