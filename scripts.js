const dataArray = [
    { src: 'microphone.jpg' },
    { src: 'spider.jpg' },
    { src: 'rainbow.jpg' },
    { src: 'shoes.jpg' },
    { src: 'owl_paw.jpg' },
    { src: 'fff_scenario.jpg' },
    { src: 'penguin.jpg' },
    { src: 'shovel.jpg' },
    { src: 'robe.jpg' },
    { src: 'bike.jpg' },
    { src: 'feather.jpg' },
    { src: 'wrackspurts.jpg' },
    { src: 'bear.jpg' },
    { src: 'pumpkin.jpg' },
    { src: 'lasso.jpg' },
    { src: 'potion.jpg' },
];

const container = document.getElementById('items');


function createDivBlocks(data) {
    data.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.className = 'dynamic-div';

        const newA = document.createElement('a');
        newA.href = "images/items/" + item.src;
        newA.target = "_blank" 
        newA.rel = "noopener noreferrer"
        const imgPreview = document.createElement('img');
        imgPreview.src = "images/items_preview/" + item.src;
        newA.appendChild(imgPreview);

        newDiv.appendChild(newA);
        container.appendChild(newDiv);
    });
}


createDivBlocks(dataArray);