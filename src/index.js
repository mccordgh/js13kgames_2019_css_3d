var main = document.querySelector('#main');

function makeDiv(index, type) {
    var el = document.createElement('div');

    el.id = `cube-${type}-${index}`;

    return el;
}

function makeSide(parent, index, type) {
    var el = makeDiv(index, type);
    var button = makeButton(index, type)

    el.appendChild(button);
    parent.appendChild(el);

    return el;
}

function makeButton(index, type) {
    var button = document.createElement('button');

    button.id = `button-${type}-${index}`;
    button.innerHTML = index + 1;

    return button;
}

function makeCubes(num) {
    var cubes = [];

    for (i = 0; i < num; i++) {
        var parent = makeDiv(i, 'parent');
        parent.rotations = {
            x: 30,
            y: 0,
            z: 45,
        };

        parent.style.transform = `rotateX(${parent.rotations.x}deg) rotateY(${parent.rotations.y}deg) rotateZ(${parent.rotations.z}deg)`;

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

    cubes.forEach(cube => {
        main.appendChild(cube.parent);
    });

    return cubes;
}

function handleKeyUp(event) {
    // W = 87
    // A = 65
    // S = 83
    // D = 68
    // Right Arrow = 39
    // Left Arrow = 37

    // Z = 90
    // X = 88
    // C = 67

    // console.log(event.keyCode);

    var parent = cubes[0].parent;

    // var amt = 10;

    var codes = {
        // 90() { parent.rotations.z -= amt; },
        // 88() { parent.rotations.x -= amt; },
        // 67() { parent.rotations.y -= amt; },
        // 65() { parent.rotations.z += amt; },
        // 83() { parent.rotations.x += amt; },
        // 68() { parent.rotations.y += amt; },
        39() {
            // Rotate right

            parent.rotations.x -= 90;
            parent.rotations.y -= 45;
            parent.rotations.z += 45;
            parent.style.transform = `rotateX(${parent.rotations.x}deg) rotateY(${parent.rotations.y}deg) rotateZ(${parent.rotations.z}deg)`;
        },
        37() {
            // Rotate left

            parent.rotations.x += 90;
            parent.rotations.y += 45;
            parent.rotations.z -= 45;
            parent.style.transform = `rotateX(${parent.rotations.x}deg) rotateY(${parent.rotations.y}deg) rotateZ(${parent.rotations.z}deg)`;
        }
    }

    if (codes[event.keyCode]) {
        codes[event.keyCode]();
    }

    parent.style.transform = `rotateX(${parent.rotations.x}deg) rotateY(${parent.rotations.y}deg) rotateZ(${parent.rotations.z}deg)`;

    // console.log(`X(${parent.rotations.x}) Y(${parent.rotations.y}) Z(${parent.rotations.z})`)
}

function setupListeners() {
    document.addEventListener('keyup', handleKeyUp);
}

setupListeners();
var cubes = makeCubes(1);
