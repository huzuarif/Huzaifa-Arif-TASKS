var guestList = ["Maleeha", "Albash", "Haider", "usman", "Haseeb bhai"];
var guestWhoCantMakeIt = "Maleeha";
var additionalguest = ["Ali", "usman", "zainab"];
var maxGuests = 2;
// Inform that only two people can be invited
console.log("Important Update: Due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (guestList.length > maxGuests) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we won't be able to invite you to the dinner."));
}
// Add new guests to the guest list
guestList.unshift(additionalguest[0]); // Add at the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, additionalguest[1]); // Add in the middle
guestList.push(additionalguest[2]); // Add at the end
// Send dinner invitations to each guest
for (var i = 0; i < guestList.length; i++) {
    if (guestList[i] === guestWhoCantMakeIt) {
        console.log(guestWhoCantMakeIt + " can't make it to the dinner.");
        // Replace the guest who can't make it with the new person you are inviting
        guestList[i] = "Riffa";
    }
    console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can attend.\n\nBest regards,\n[Riffa]");
}
// Empty the guest list
guestList = [];
// Print the empty guest list
console.log("Guest List:", guestList);
