let distance;
function distanceFromHqInBlocks(block){
    if(block>=42){
        distance = (block - 42);
}
    if(block<42){
        distance = (42 - block);
        }
return distance;}

function distanceFromHqInFeet(block){
   return distanceFromHqInBlocks(block) * 264
};

function distanceTravelledInFeet(block1, block2){
    return Math.abs((block1 - block2) * 264);
}
let feet;
function calculatesFarePrice(block1, block2){
    feet = Math.abs((block1 - block2) * 264);
    if(feet<400)
        return 0;
    if (feet<=2000)
        return((feet-400) * .02);
    if (feet<=2500)
        return(25);
    if (feet>2500)
        return `cannot travel that far`;
    }
