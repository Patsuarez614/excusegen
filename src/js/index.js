import $ from "jquery";
import 'bootstrap'; //breathecode dom for more explicit errors
// import 'breathecode-dom'; //DOM override to make JS easier to use
import '../style/index.scss';

window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () => { 
        document.querySelector('#the-excuse').innerHTML = generateExcuse();
    var randomNumber = Math.random() * 10;
    });
    console.log('hello');
};    


var generateExcuse = () => {
    
    var pronoun = ['A', 'The'];
    var subject = [' teacher', ' student' ,' kid', ' kanye'];
    var action = [' lost my',' ate my', ' hid my', ' stole my'];
    var position = [' homework', '  boat', '  keys', ' food'];
    var where = [' on the floor', ' in the fridge', ' on the roof'];

    
    var pronounIndex = Math.floor(Math.random() * pronoun.length); 
    var subjectIndex = Math.floor(Math.random() * subject.length); 
    var actionIndex = Math.floor(Math.random() * action.length); 
    var positionIndex = Math.floor(Math.random() * position.length); 
    var whereIndex = Math.floor(Math.random() * where.length); 
    
    
    return pronoun[pronounIndex] + '' + subject[subjectIndex] + '' + action[subjectIndex] + '' + position[positionIndex] + '' + where[whereIndex];
};