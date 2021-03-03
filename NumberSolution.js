const number = prompt("Enter Your Positive Or Negative Number: ");

if (number >= 0) {
    if (number == 0) {
        document.write("This is Zero");
    } else {
        document.write("This is a Positive Number");
    }
} else {
    document.write("This is a Negative Number");
}
