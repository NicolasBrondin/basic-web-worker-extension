function worker_pow_3(nb) {
    let result = 0;
    try {
        for(let i = 0 ; i < nb ; i++) {
            for(let j = 0 ; j < nb ; j++) {
                for(let k = 0 ; k < nb ; k++) {
                    result++;
                }
            }
        }
    } catch(e){
        console.error(e);
    }
    return result;
}

onmessage = function(e) {
    console.log('Message received from main script');
    let workerResult = worker_pow_3(e.data[0])
    console.log('Posting message back to main script');
    postMessage(workerResult);
}