/* * * * *
 * UPPGIFT
 * -------
 * 
 * När man klickar på en cell skall dess bakgrundsfärg ändras från vit till svart.
 * Om man klickar igen ska färgen ändras från svart till röd, osv.. enligt följande:
 * 
 * vit -> svart
 * svart -> röd
 * röd -> grön
 * grön -> blå
 * blå -> vit
 * 
 * Obs! Kom ihåg att bara den cell man klickar på skall ändra färg.
 * 
 * * * * */ const container = document.querySelector("#canvas");
if (!container) throw new Error("No container found with selector: #canvas");
createGrid(10, 10, container);
function createGrid(rows, columns, parent) {
    for(let r = 0; r < rows; r++){
        const row = createElementWithClasses("div", "row");
        for(let c = 0; c < columns; c++){
            const cell = createElementWithClasses("div", "cell");
            row.append(cell);
            let bgColorArray = [
                "white",
                "black",
                "red",
                "green",
                "blue", 
            ];
            let colorOfArray = 0;
            cell.addEventListener("click", colorClick);
            function colorClick() {
                console.log("clicked");
                colorOfArray++;
                if (colorOfArray >= bgColorArray.length) colorOfArray = 0;
                cell.style.background = bgColorArray[colorOfArray];
            }
        }
        parent.append(row);
    }
}
function createElementWithClasses(tagName, ...classes) {
    const element = document.createElement(tagName);
    element.classList.add(...classes);
    return element;
}

//# sourceMappingURL=index.6b86260e.js.map
