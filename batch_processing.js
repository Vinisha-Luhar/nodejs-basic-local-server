function processItem(item){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(`Processed ${item}`);
            resolve(`Done ${item}`);
        },1000);
    });
}

async function processInBatches(items,batchSize){
    for(let i=0;i < items.length; i+= batchSize){
        
        const batch = items.slice(i,i+batchSize);
        
        console.log(`Starting batch ${i/batchSize+1}`);

        const result = await Promise.all(
            batch.map((item)=>processItem(item))
        );

        console.log(`Batch ${i/batchSize+1} completed`);
        console.log(result);
    }
}

const items = Array.from({length:100},(_,i)=>i+1);

processInBatches(items,10);