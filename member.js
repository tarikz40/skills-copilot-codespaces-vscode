function skillsMember()
{
    var skills = ["HTML", "CSS", "JavaScript"];
    var skillsString = skills.join(", ");
    var skillsElement = document.getElementById("skills");
    skillsElement.innerHTML = skillsString;
}