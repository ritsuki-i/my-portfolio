let scene, camera,cube;
const width = window.innerWidth;
const height = window.innerHeight-200;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        100,
        width / height,
        0.1,
        1000
    );

    document.body.appendChild(renderer.domElement);

    /* ボックスのサイズ決定、メッシュ、追加 */
    const geometry1 = new THREE.BoxGeometry(5, 5, 5);
    const geometry2 = new THREE.BoxGeometry(5, 5, 5);
    const geometry3 = new THREE.BoxGeometry(5, 5, 5);
    const geometry4 = new THREE.BoxGeometry(5, 5, 5);
    const geometry5 = new THREE.BoxGeometry(5, 5, 5);
    const geometry6 = new THREE.BoxGeometry(5, 5, 5);
    const geometry7 = new THREE.BoxGeometry(5, 5, 5);
    const geometry8 = new THREE.BoxGeometry(5, 5, 5);

    const loadPic = new THREE.TextureLoader();
    let material1 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/python-logo.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/python-logo.png') })
    ];
    let material2 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/flask.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/flask.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
    ];
    let material3 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/github.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/github.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
    ];
    let material4 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/html.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/html.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
    ];
    let material5 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/css.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/css.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
    ];
    let material6 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/vscode.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/vscode.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
    ];
    let material7 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/Three.js.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/Three.js.png') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
    ];
    let material8 = [
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/unity.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/unity.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') }),
        new THREE.MeshBasicMaterial({ map: loadPic.load('textures/side.jpeg') })
    ];

    cube1 = new THREE.Mesh(geometry1, material1);
    cube2 = new THREE.Mesh(geometry2, material2);
    cube3 = new THREE.Mesh(geometry3, material3);
    cube4 = new THREE.Mesh(geometry4, material4);
    cube5 = new THREE.Mesh(geometry5, material5);
    cube6 = new THREE.Mesh(geometry6, material6);
    cube7 = new THREE.Mesh(geometry7, material7);
    cube8 = new THREE.Mesh(geometry8, material8);

    cube1.position.set(0, 0, 0);
    cube2.position.set(-10, 6, -5);
    cube3.position.set(15, -10, -10);
    cube4.position.set(-45, -5, -20);
    cube5.position.set(20, 10, -20);
    cube6.position.set(-10, -20, -25);
    cube7.position.set(40, 30, -25);
    cube8.position.set(-40, -30, -30);

    scene.add(cube1);
    scene.add(cube2);
    scene.add(cube3);
    scene.add(cube4);
    scene.add(cube5);
    scene.add(cube6);
    scene.add(cube7);
    scene.add(cube8);
     /* カメラの位置を手前に変更 */
    camera.position.set(0, 0, +10);
}

const canvasElement = document.querySelector('#canvas') //HTMLのcanvasのid
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: true, //追加 背景を透明にする
    antialias: true, //追加 アンチエイリアス
});

let mouseX = 0 // マウス座標
const radian = rot * Math.PI / 180;
let rot = 0; // 角度

document.addEventListener("mousemove", (event) => {
    mouseX = event.pageX;
});
let windowHalfX = window.innerWidth / 2;
let windowHalfY = 200;
/* アニメーション制御 */
function animate() {
    requestAnimationFrame(animate);

    cube1.rotation.x += 0.001;
    cube1.rotation.y += 0.001;
    cube1.rotation.z -= 0.001;

    cube2.rotation.x += 0.001;
    cube2.rotation.y += 0.001;
    cube2.rotation.z += 0.001;

    cube3.rotation.x -= 0.001;
    cube3.rotation.y += 0.001;
    cube3.rotation.z += 0.001;

    cube4.rotation.x += 0.001;
    cube4.rotation.y -= 0.001;
    cube4.rotation.z += 0.001;

    cube5.rotation.x -= 0.001;
    cube5.rotation.y += 0.001;
    cube5.rotation.z -= 0.001;

    cube6.rotation.x -= 0.001;
    cube6.rotation.y -= 0.001;
    cube6.rotation.z += 0.001;

    cube7.rotation.x -= 0.001;
    cube7.rotation.y -= 0.001;
    cube7.rotation.z -= 0.001;

    cube8.rotation.x -= 0.001;
    cube8.rotation.y -= 0.001;
    cube8.rotation.z -= 0.001;

    const targetRot = (mouseX / window.innerWidth) * 360;
    rot += (targetRot - rot) * 0.02;
    const radian = rot * Math.PI / 180;
    camera.position.x = 10 * Math.sin(radian);
    camera.position.z = 10 * Math.cos(radian);

    camera.lookAt(new THREE.Vector3(0, 0, 0));

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}



function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
}
document.addEventListener('mousemove', onDocumentMouseMove);

window.addEventListener("resize", onWindowResize)

init();
animate();