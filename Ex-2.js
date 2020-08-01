var johnTeamScore = 89 + 120 + 103;
var mikeTeamScore = 116 + 94 + 123;
var avgJohnTeam = johnTeamScore / 3;
var avgMikeTeam = mikeTeamScore / 3;
var win = avgJohnTeam > avgMikeTeam ? "John" : "Mike"
console.log(win, "team wins");
if (avgMikeTeam === avgJohnTeam) {
    console.log("Its a draw");
}
var maryTeamScore = 97 + 134 + 105;
var avgMaryTeam = maryTeamScore / 3;
win = avgJohnTeam > avgMaryTeam ? (avgJohnTeam > avgMikeTeam ? "John" : "Mike") : (avgMaryTeam > avgMikeTeam ? "Mary" : "Mike")
console.log(win, "team wins");
if (avgMikeTeam === avgMaryTeam === avgJohnTeam) {
    console.log("Its a draw");
}
