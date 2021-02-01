function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed){
    let activity =  (`Leash ${dogName} the ${dogBreed}`)
    console.log(`Leash ${dogName} the ${dogBreed}`)
    return activity
}

function walkToPark(dogName, dogBreed){
    let activity =  (`Walk to the park with ${dogName} the ${dogBreed}`)
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
    return activity
}

function throwFrisbee(dogName, dogBreed){
    let activity =  (`Throw the frisbee for ${dogName} the ${dogBreed}`)
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
    return activity
}

function walkHome(dogName, dogBreed){
    let activity =  (`Walk home with ${dogName} the ${dogBreed}`)
    console.log(`Walk home with ${dogName} the ${dogBreed}`)
    return activity
}

function unleashDog(dogName, dogBreed){
    let activity =  (`Unleash ${dogName} the ${dogBreed}`)
    console.log(`Unleash ${dogName} the ${dogBreed}`)
    return activity
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed){
    return routine.map(x => x(dogName,dogBreed))
}
