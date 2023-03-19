let count: number = 0;
const out = document.getElementById("count") as HTMLBodyElement;
out.innerHTML = "Click the Typescsript logo!";

function counter() {
    count++;
    out.innerHTML = count.toString();
}