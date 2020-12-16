function setBGimage(){
    const carName=localStorage.getItem("key");
    const imgStr=`url('../images/${carName}Page.jpg)`;
    document.body.style.backgroundImage=imgStr;
}