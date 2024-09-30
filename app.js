import { guideData } from "./data.js";

const mainContainer = document.getElementById('container');

function buildGuide(){
    guideData.forEach(guide => {
        let isOpen = false;
        const guideContainer = document.createElement('div');

        // title container
        const dropTitleContainer = document.createElement('div');
        dropTitleContainer.setAttribute('id', 'dropTitle');
        dropTitleContainer.setAttribute('class', 'dropTitleContainer');

        // title
        const dropTitle = document.createElement('h2');
        dropTitle.setAttribute('id', 'drop');
        const dropTitleText = document.createTextNode(guide.title);
        dropTitle.appendChild(dropTitleText);
        dropTitleContainer.appendChild(dropTitle);

        // icon
        const dropIcon = document.createElement('span');
        dropIcon.setAttribute('id', 'drop');
        dropIcon.setAttribute('class', 'material-symbols-outlined');
        const dropIconText = document.createTextNode('keyboard_arrow_down');
        dropIcon.appendChild(dropIconText);
        dropTitleContainer.appendChild(dropIcon);

        // and add the title container to the guide container
        guideContainer.appendChild(dropTitleContainer);

        // create the guide itself
        const dropBox = document.createElement('div');
        dropBox.setAttribute('id', 'dropBox');
        dropBox.setAttribute('class', 'closeGuide');
        
        guide.guide.forEach(step => {
            if(step.type == 'text'){
                const textBlock = document.createElement('span');
                textBlock.setAttribute('class', 'description');
                const text = document.createTextNode(step.data);
                textBlock.append(text);
                dropBox.appendChild(textBlock);
            } else if (step.type == 'img'){
                const img = document.createElement('img');
                img.src = step.data;
                dropBox.appendChild(img);
            }
        });

        // make events for opening and closing the guide
        dropTitleContainer.addEventListener('click', ()=>{
            isOpen = !isOpen;
            if(isOpen){
                // open
                dropBox.classList.replace('closeGuide', 'openGuide')
                dropIcon.style.transform = 'rotate(180deg)';
            } else {
                // close
                dropBox.classList.replace('openGuide', 'closeGuide')
                dropIcon.style.transform = 'rotate(0deg)';
            }
        });

        // and last but not least add the guide to the main container
        guideContainer.appendChild(dropBox);
        mainContainer.appendChild(guideContainer);
    });
}

buildGuide();