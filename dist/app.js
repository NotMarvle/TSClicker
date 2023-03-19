let count = 0;
const out = document.getElementById("count");
out.innerHTML = "Click the Typescsript logo!";
function counter() {
    count++;
    out.innerHTML = count.toString();
}
