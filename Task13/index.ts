let guestList: string[] = ["Maleeha", "Albash", "Haider", "usman", "Haseeb bhai"];
let guestWhoCantMakeIt = "Maleeha";

// Send dinner invitations to each guest
for (let i = 0; i < guestList.length; i++) {
  if (guestList[i] === guestWhoCantMakeIt) {
    console.log(guestWhoCantMakeIt + " can't make it to the dinner.");
    // Replace the guest who can't make it with the new person you are inviting
    guestList[i] = "Riffa";
  }
  console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nPlease let me know if you can attend.\n\nBest regards,\n[MAlik Huzaifa Arif]");
}
