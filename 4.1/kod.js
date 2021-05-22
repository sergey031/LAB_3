function ChangeName()
{
    if(document.getElementById('userSurname').value == '' || document.getElementById('userName').value == '')
    {
        alert("Заполните все поля, пожалуйста!")
        return;
    }
        
    document.getElementById('SurName').innerHTML=document.getElementById('userSurname').value;
    document.getElementById('Name').innerHTML=document.getElementById('userName').value;
}
function ChangeColor()
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) 
    {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("Text1").style.color=color;
}