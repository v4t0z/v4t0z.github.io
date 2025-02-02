function addSkill() {
    let newSkill = prompt("Yeni beceri ekleyin:");
    if (newSkill) {
        let li = document.createElement("li");
        li.textContent = newSkill;
        document.getElementById("skills-list").appendChild(li);
    }
}
