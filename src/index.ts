import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HF_TOKEN); 

const output = await hf.featureExtraction({
    model: "intfloat/e5-small-v2",
    inputs: "That is a happy person",
}); 

const [result] = output;

if(Array.isArray(result)) {
    console.log("Case A: ")
    console.log(result.length)
} else {
    console.log("Case B: ")
    console.log(output.length)
}

