let id_ = 0;
let container_id = 0;
// Function to insert the Clock content into the HTML file
function makeContainer(container_class_name) {
    for (let i = 0; i < 24; i++) {
        id_++;
        let id_str = "c" + id_;
        const div_element = document.createElement("div");
        div_element.setAttribute("class", container_class_name + " clock");
        div_element.setAttribute("id", id_str);

        const min_arrow = document.createElement("div");
        min_arrow.setAttribute("class", "arrow");
        min_arrow.setAttribute("id", "two");

        const hrs_arrow = document.createElement("div");
        hrs_arrow.setAttribute("class", "arrow");
        hrs_arrow.setAttribute("id", "one");

        div_element.appendChild(hrs_arrow);
        div_element.appendChild(min_arrow);

        document.getElementsByClassName("container")[container_id].appendChild(div_element);

    }
    id_ = 0;
    container_id++;
}

//inserting dynamically content to the HTML
makeContainer("hrs_first");
makeContainer("hrs_second");
makeContainer("min_first");
makeContainer("min_second");


//declaring Angles of the arrows
let a90 = "rotate(90deg)";
let a180 = "rotate(180deg)";
let a270 = "rotate(270deg)";
let a0 = "rotate(0deg)";


// setAng method to make angles of the clock arrows at the given degree
function setAng(class_name, i, x, y) {
    const container = document.getElementsByClassName(class_name);
    const child = container[i].children;
    child[0].style.transform = x;
    child[1].style.transform = y;
}

// set method to set angles at the all corners
function set(class_name, i, v) {
    const container = document.getElementsByClassName(class_name);
    const child = container[i].children;

    switch (v) {
        case "vertical":
            child[0].style.transform = a0;
            child[1].style.transform = a180;
            break;
        case "horizontal":
            child[0].style.transform = a90;
            child[1].style.transform = a270;
            break;
        case "rightBottom":
            child[0].style.transform = a270;
            child[1].style.transform = a0;
            break;
        case "rightTop":
            child[0].style.transform = a180;
            child[1].style.transform = a270;
            break;
        case "leftTop":
            child[0].style.transform = a180;
            child[1].style.transform = a90;
            break;
        case "leftBottom":
            child[0].style.transform = a90;
            child[1].style.transform = a0;
            break;
        default:
            child[0].style.transform = a0;
            // child[0].style.boxShadow="none";
            // to change the color of the arrows which have no use in the digit making
            child[1].style.transform = a0;
            // child[1].style.boxShadow="none";
    }


}
//* To check the digit and call the set method to set the angle
function digit(val, class_name) {
    switch (val) {
        case 1:
            setAng(class_name, 0, a0, a270);
            setAng(class_name, 1, a90, a270);
            setAng(class_name, 2, a90, a0);
            setAng(class_name, 3, a0, a0);

            setAng(class_name, 4, a180, a270);
            setAng(class_name, 5, a90, a0);
            setAng(class_name, 6, a0, a180);
            setAng(class_name, 7, a0, a0);

            setAng(class_name, 8, a0, a0);
            setAng(class_name, 9, a180, a0);
            setAng(class_name, 10, a0, a180);
            setAng(class_name, 11, a0, a0);

            setAng(class_name, 12, a0, a0);
            setAng(class_name, 13, a180, a0);
            setAng(class_name, 14, a0, a180);
            setAng(class_name, 15, a0, a0);

            setAng(class_name, 16, a0, a270);
            setAng(class_name, 17, a90, a180);
            setAng(class_name, 18, a180, a270);
            setAng(class_name, 19, a90, a0);

            setAng(class_name, 20, a180, a270);
            setAng(class_name, 21, a90, a270);
            setAng(class_name, 22, a90, a270);
            setAng(class_name, 23, a90, a180);
            break;
        case 0:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "vertical");
            set(class_name, 5, "rightBottom");
            set(class_name, 6, "leftBottom");
            set(class_name, 7, "vertical");

            set(class_name, 8, "vertical");
            set(class_name, 9, "vertical");
            set(class_name, 10, "vertical");
            set(class_name, 11, "vertical");

            set(class_name, 12, "vertical");
            set(class_name, 13, "vertical");
            set(class_name, 14, "vertical");
            set(class_name, 15, "vertical");

            set(class_name, 16, "vertical");
            set(class_name, 17, "rightTop");
            set(class_name, 18, "leftTop");
            set(class_name, 19, "vertical");

            set(class_name, 20, "rightTop");
            set(class_name, 21, "horizontal");
            set(class_name, 22, "horizontal");
            set(class_name, 23, "leftTop");
            break;
        case 2:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "rightTop");
            set(class_name, 5, "horizontal");
            set(class_name, 6, "leftBottom");
            set(class_name, 7, "vertical");

            set(class_name, 8, "rightBottom");
            set(class_name, 9, "horizontal");
            set(class_name, 10, "leftTop");
            set(class_name, 11, "vertical");

            set(class_name, 12, "vertical");
            set(class_name, 13, "rightBottom");
            set(class_name, 14, "horizontal");
            set(class_name, 15, "leftTop");

            set(class_name, 16, "vertical");
            set(class_name, 17, "rightTop");
            set(class_name, 18, "horizontal");
            set(class_name, 19, "leftBottom");

            set(class_name, 20, "rightTop");
            set(class_name, 21, "horizontal");
            set(class_name, 22, "horizontal");
            set(class_name, 23, "leftTop");
            break;
        case 3:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "rightTop");
            set(class_name, 5, "horizontal");
            set(class_name, 6, "leftBottom");
            set(class_name, 7, "vertical");

            set(class_name, 8, "n");
            set(class_name, 9, "rightBottom");
            set(class_name, 10, "leftTop");
            set(class_name, 11, "vertical");

            set(class_name, 12, "n");
            set(class_name, 13, "rightTop");
            set(class_name, 14, "leftBottom");
            set(class_name, 15, "vertical");

            set(class_name, 16, "rightBottom");
            set(class_name, 17, "horizontal");
            set(class_name, 18, "leftTop");
            set(class_name, 19, "vertical");

            set(class_name, 20, "rightTop");
            set(class_name, 21, "horizontal");
            set(class_name, 22, "horizontal");
            set(class_name, 23, "leftTop");
            break;
        case 4:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "leftBottom");
            set(class_name, 2, "rightBottom");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "vertical");
            set(class_name, 5, "vertical");
            set(class_name, 6, "vertical");
            set(class_name, 7, "vertical");

            set(class_name, 8, "vertical");
            set(class_name, 9, "rightTop");
            set(class_name, 10, "leftTop");
            set(class_name, 11, "vertical");

            set(class_name, 12, "rightTop");
            set(class_name, 13, "horizontal");
            set(class_name, 14, "leftBottom");
            set(class_name, 15, "vertical");

            set(class_name, 16, "n");
            set(class_name, 17, "n");
            set(class_name, 18, "vertical");
            set(class_name, 19, "vertical");

            set(class_name, 20, "n");
            set(class_name, 21, "n");
            set(class_name, 22, "rightTop");
            set(class_name, 23, "leftTop");
            break;
        case 5:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "vertical");
            set(class_name, 5, "rightBottom");
            set(class_name, 6, "horizontal");
            set(class_name, 7, "leftTop");

            set(class_name, 8, "vertical");
            set(class_name, 9, "rightTop");
            set(class_name, 10, "horizontal");
            set(class_name, 11, "leftBottom");

            set(class_name, 12, "rightTop");
            set(class_name, 13, "horizontal");
            set(class_name, 14, "leftBottom");
            set(class_name, 15, "vertical");

            set(class_name, 16, "rightBottom");
            set(class_name, 17, "horizontal");
            set(class_name, 18, "leftTop");
            set(class_name, 19, "vertical");

            set(class_name, 20, "rightTop");
            set(class_name, 21, "horizontal");
            set(class_name, 22, "horizontal");
            set(class_name, 23, "leftTop");
            break;
        case 6:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "vertical");
            set(class_name, 5, "rightBottom");
            set(class_name, 6, "horizontal");
            set(class_name, 7, "leftTop");

            set(class_name, 8, "vertical");
            set(class_name, 9, "rightTop");
            set(class_name, 10, "horizontal");
            set(class_name, 11, "leftBottom");

            set(class_name, 12, "vertical");
            set(class_name, 13, "rightBottom");
            set(class_name, 14, "leftBottom");
            set(class_name, 15, "vertical");

            set(class_name, 16, "vertical");
            set(class_name, 17, "rightTop");
            set(class_name, 18, "leftTop");
            set(class_name, 19, "vertical");

            set(class_name, 20, "rightTop");
            set(class_name, 21, "horizontal");
            set(class_name, 22, "horizontal");
            set(class_name, 23, "leftTop");
            break;
        case 7:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "rightTop");
            set(class_name, 5, "horizontal");
            set(class_name, 6, "leftBottom");
            set(class_name, 7, "vertical");

            set(class_name, 8, "n");
            set(class_name, 9, "n");
            set(class_name, 10, "vertical");
            set(class_name, 11, "vertical");

            set(class_name, 12, "n");
            set(class_name, 13, "n");
            set(class_name, 14, "vertical");
            set(class_name, 15, "vertical");

            set(class_name, 16, "n");
            set(class_name, 17, "n");
            set(class_name, 18, "vertical");
            set(class_name, 19, "vertical");

            set(class_name, 20, "n");
            set(class_name, 21, "n");
            set(class_name, 22, "rightTop");
            set(class_name, 23, "leftTop");

            break;
        case 8:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "vertical");
            set(class_name, 5, "rightBottom");
            set(class_name, 6, "leftBottom");
            set(class_name, 7, "vertical");

            setAng(class_name, 8, "rotate(180deg)", "rotate(315deg)");
            set(class_name, 9, "rightTop");
            set(class_name, 10, "leftTop");
            setAng(class_name, 11, "rotate(180deg)", "rotate(45deg)");

            setAng(class_name, 12, "rotate(0deg)", "rotate(225deg)");
            set(class_name, 13, "rightBottom");
            set(class_name, 14, "leftBottom");
            setAng(class_name, 15, "rotate(0deg)", "rotate(135deg)");

            set(class_name, 16, "vertical");
            set(class_name, 17, "rightTop");
            set(class_name, 18, "leftTop");
            set(class_name, 19, "vertical");

            set(class_name, 20, "rightTop");
            set(class_name, 21, "horizontal");
            set(class_name, 22, "horizontal");
            set(class_name, 23, "leftTop");
            break;
        case 9:
            set(class_name, 0, "rightBottom");
            set(class_name, 1, "horizontal");
            set(class_name, 2, "horizontal");
            set(class_name, 3, "leftBottom");

            set(class_name, 4, "vertical");
            set(class_name, 5, "rightBottom");
            set(class_name, 6, "leftBottom");
            set(class_name, 7, "vertical");

            set(class_name, 8, "vertical");
            set(class_name, 9, "rightTop");
            set(class_name, 10, "leftTop");
            set(class_name, 11, "vertical");

            set(class_name, 12, "rightTop");
            set(class_name, 13, "horizontal");
            set(class_name, 14, "leftBottom");
            set(class_name, 15, "vertical");

            set(class_name, 16, "rightBottom");
            set(class_name, 17, "horizontal");
            set(class_name, 18, "leftTop");
            set(class_name, 19, "vertical");

            set(class_name, 20, "rightTop");
            set(class_name, 21, "horizontal");
            set(class_name, 22, "horizontal");
            set(class_name, 23, "leftTop");
            break;
        default:
            for (let i = 0; i < 24; i++) {
                setAng(class_name, i, "rotate(360deg)", "rotate(0deg)");
            }
    }

}

setTimeout(() => {
    setdigit();
}, 1000);

let mins = new Date().getMinutes();
const min_changed = setInterval(() => {
    let minsnow = new Date().getMinutes();
    if (mins != minsnow) {
        setInterval(setdigit, 60000);
        setdigit();
        clearInterval(min_changed);
    }
}, 250);



function setdigit() {
    digit(-1,"min_second");
    digit(-1,"min_first");
    digit(-1,"hrs_first");
    digit(-1,"hrs_second");

    setTimeout(() => {
        let date = new Date();
        let hrs = date.getHours();
        let min = date.getMinutes();

        //* Uncomment If you want to make the Clock 12 Hrs

        // if (hrs > 13) {
        //     hrs = hrs % 12;
        // }

        let hrs_first_digit = Math.floor(hrs / 10);
        let hrs_second_digit = Math.floor(hrs % 10);
        let min_first_digit = Math.floor(min / 10);
        let min_second_digit = Math.floor(min % 10);

        digit(hrs_first_digit, "hrs_first");
        digit(hrs_second_digit, "hrs_second");

        digit(min_first_digit, "min_first");
        digit(min_second_digit, "min_second");
    }, 5000);
}


// function removered() {
//     const allredborder=document.querySelectorAll('.arrow');
    
//     allredborder.forEach(element => {
//         let degree=getComputedStyle(element)
//         let s=degree.getPropertyValue("transform")
//         console.log(s);
//     });

// }
// removered()