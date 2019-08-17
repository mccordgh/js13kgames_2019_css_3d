var main = document.querySelector('#main');

var makeDiv = (index, type) => {
    var el = document.createElement('div');

    el.id = `cube-${type}-${index}`;

    return el;
}

var makeSide = (parent, index, type) => {
    var el = makeDiv(index, type);
    var button = makeButton(index, type)

    el.appendChild(button);
    parent.appendChild(el);

    return el;
}

var makeButton = (index, type) => {
    var button = document.createElement('button');

    button.id = `button-${type}-${index}`;
    button.innerHTML = index + 1;

    return button;
}

var makeCubes = (num) => {
    var cubes = [];

    for (i = 0; i < num; i++) {
        var parent = makeDiv(i, 'parent');

        var cube = {
            parent,
            front: makeSide(parent, i, 'front'),
            back: makeSide(parent, i, 'back'),
            top: makeSide(parent, i, 'top'),
            bottom: makeSide(parent, i, 'bottom'),
            left: makeSide(parent, i, 'left'),
            right: makeSide(parent, i, 'right'),
        };

        cubes.push(cube);
    }

    return cubes;
}

var cubes = makeCubes(1);

cubes.forEach(cube => {
    main.appendChild(cube.parent);
});
