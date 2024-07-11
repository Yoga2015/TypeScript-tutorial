var music = ['十七岁', '忘情水', '开心的马骝'];
var Light;
(function (Light) {
    Light["red"] = "Red";
    Light["green"] = "Rreen";
    Light["yellow"] = "Yellow";
})(Light || (Light = {}));
function changeLigt(light) { }
changeLigt(Light.red);
console.log(Light);
