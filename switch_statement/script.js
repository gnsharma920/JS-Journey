const day = "monday";

switch (day) {
    case 'monday':
        console.log("Learn 3 modules of JS");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Learn 2 modules of JS");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("write a code");
        break;
    case 'friday':
        console.log("Watch JS videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}


if (day === 'monday') {
    console.log("Learn 3 modules of JS");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log("Learn 2 modules of JS");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("write a code");
} else if (day === 'friday') {
    console.log("Watch JS videos");
} else if (day === 'saturday' && day === 'sunday') {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day");
}