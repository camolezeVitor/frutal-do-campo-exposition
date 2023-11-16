import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))

let light = new THREE.DirectionalLight(0xFFFFFF, 1.0);
light.position.set(2, 10, 1);
light.target.position.set(0, 0, 0);

scene.add(light);
scene.add(light.target);

let light2 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
light2.position.set(-5, 5, -1);
light2.target.position.set(0, 0, 0);

scene.add(light2);
scene.add(light2.target);

var objeto1Centro;
var cuboDoCentro = new THREE.BoxGeometry( 600, 400, 800 );
var CUBEmaterial = new THREE.MeshBasicMaterial( {color: 0xf0ff0a, transparent: true, opacity: 0} );
var cube = new THREE.Mesh( cuboDoCentro, CUBEmaterial );
cube.rotateY(9.8)
cube.position.set(-50, 0, -200)
cube.name = 'centro'
scene.add( cube );

var objeto2Oeste;
var cuboDoLeste = new THREE.BoxGeometry( 600, 400, 800 );
var CUBEmaterial2 = new THREE.MeshBasicMaterial( {color: 0x00ff00, transparent: true, opacity: 0} ); 
var cubeLeste = new THREE.Mesh( cuboDoLeste, CUBEmaterial2 );
cubeLeste.rotateY(9.8)
cubeLeste.position.set(-650, 0, 100)
cubeLeste.name = 'leste'
scene.add( cubeLeste );

var objeto3Leste;
var cuboDoOeste = new THREE.BoxGeometry( 600, 400, 800 );
var CUBEmaterial3 = new THREE.MeshBasicMaterial( {color: 0x00ff00, transparent: true, opacity: 0} ); 
var cubeOeste = new THREE.Mesh( cuboDoOeste, CUBEmaterial3 );
cubeOeste.rotateY(9.8)
cubeOeste.position.set(600, 0, -400)
cubeOeste.name = 'oeste'
scene.add( cubeOeste );

function abrirLink(link) {
    window.open(link)
}

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;

    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    document.body.removeEventListener('click', () => {
        window.open('teste')
    })

    if (intersects.length > 0 && (intersects[0].object.name == 'centro' || intersects[0].object.name == 'leste' || intersects[0].object.name == 'oeste')) {
        if (intersects[0].object.name == 'centro') {
            document.body.style.cursor = 'pointer';
            document.body.addEventListener('click', () => {
                window.open('http://localhost:4200/1/menuprincipal', '_self')
            })

            objeto1Centro.children[1].material.color.set(0xFFA722)

            houseMaterial1Oeste = material;
            houseMaterial3Leste = material

            objeto3Leste.children[0].material = houseMaterial3Leste
            objeto2Oeste.children[1].material = houseMaterial1Oeste

        } else {
            document.body.removeEventListener('click', () => {
                window.open('teste')
            })
            if (intersects[0].object.name == 'leste') {
                document.body.addEventListener('click', () => {
                    window.open('http://localhost:4200/0/menuprincipal', '_self')
                })
                document.body.style.cursor = 'pointer';
    
                objeto3Leste.children[0].material.color.set(0xFFA722)
    
                houseMaterial1Oeste = material;
                houseMaterial2Centro = material
    
                objeto1Centro.children[1].material = houseMaterial2Centro
                objeto2Oeste.children[1].material = houseMaterial1Oeste
    
            } else {
                document.body.removeEventListener('click', () => {
                    window.open('teste')
                })
                if (intersects[0].object.name == 'oeste') {
                    document.body.addEventListener('click', () => {
                        window.open('http://localhost:4200/2/menuprincipal', '_self')
                    })
                    document.body.style.cursor = 'pointer';
        
                    objeto2Oeste.children[1].material.color.set(0xFFA722)
        
                    houseMaterial2Centro = material;
                    houseMaterial3Leste = material
        
                    objeto3Leste.children[0].material = houseMaterial3Leste
                    objeto1Centro.children[1].material = houseMaterial2Centro
        
                }
            }
        }
    } else {
        document.body.removeEventListener('click', () => {
            window.open('teste')
        })

        houseMaterial2Centro = material;
        houseMaterial1Oeste = material;
        houseMaterial3Leste = material;

        objeto3Leste.children[0].material = houseMaterial3Leste
        objeto1Centro.children[1].material = houseMaterial2Centro
        objeto2Oeste.children[1].material = houseMaterial1Oeste

        document.body.style.cursor = 'initial';
    }
}




scene.background = new THREE.Color(0xA8DCC4)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
)
camera.position.set(0, 900, 0)
camera.rotateZ(90)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.addEventListener( 'change', render );
controls.minPolarAngle = 0
controls.maxPolarAngle = Math.PI/2.5

let material = new THREE.MeshLambertMaterial()
let groundMaterial = new THREE.MeshNormalMaterial()
let houseMaterial1Oeste = new THREE.MeshLambertMaterial()
let houseMaterial2Centro = new THREE.MeshLambertMaterial()
let houseMaterial3Leste = new THREE.MeshLambertMaterial()

const loader = new THREE.TextureLoader();

const fbxLoader = new FBXLoader()
const fbxLoader2 = new FBXLoader()
const fbxLoader3 = new FBXLoader()

loader.load(
    './imgs/backgroundFrutalDoCampo.png',
    (texture) => {
        const material2 = new THREE.MeshBasicMaterial({
            map: texture
        })
        groundMaterial = material2;
    }
)
loader.load(
    './imgs/corVerdePaia.png',
    (texture) => {
        const material2 = new THREE.MeshLambertMaterial({
            map: texture,
            name: 'tu'
        })
        const material3 = new THREE.MeshLambertMaterial({
            map: texture,
            name: 'AAAAAA'
        })
        const material4 = new THREE.MeshLambertMaterial({
            map: texture,
            name: 'uahuahuaauauh'
        })
        houseMaterial1Oeste = material2;
        houseMaterial2Centro = material3;
        houseMaterial3Leste = material4;
    }
)
function carregarTexturas() {
    loader.load(
        './imgs/corVerdePaia.png',
        (texture) => {
            const material2 = new THREE.MeshLambertMaterial({
                map: texture,
                name: 'tu'
            })
            const material3 = new THREE.MeshLambertMaterial({
                map: texture,
                name: 'AAAAAA'
            })
            const material4 = new THREE.MeshLambertMaterial({
                map: texture,
                name: 'uahuahuaauauh'
            })
            const materialReserva = new THREE.MeshLambertMaterial({
                map: texture,
                name: 'atizap'
            })
            
            material = materialReserva
            houseMaterial1Oeste = material2;
            houseMaterial2Centro = material3;
            houseMaterial3Leste = material4;
        }
    )
}



//PARTE CENTRAL DE FRUTAL
fbxLoader.load(
    './models/frutalCentro.fbx',
    (object) => {
        object.name = "frutalDoCampoCentro"
        object.traverse((child) => {
            if ((child).isMesh) {
                (child).material = houseMaterial2Centro;
                if ((child).material) {
                    ((child).material).transparent = false
                }
            }
        })
        scene.add(object)
        objeto1Centro = object
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)
//PARTE OESTE DE FRUTAL
fbxLoader.load(
    './models/frutalOeste.fbx',
    (object) => {
        object.name = "frutalDoCampoOeste"
        object.traverse((child) => {
            if ((child).isMesh) {
                (child).material = houseMaterial1Oeste;
                if ((child).material) {
                    ((child).material).transparent = false
                }
            }
        })
        scene.add(object);
        objeto2Oeste = object;
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

//PARTE LESTE DE FRUTAL
fbxLoader2.load(
    './models/frutalLeste.fbx',
    (object) => {
        object.name = "frutalDoCampoLeste"
        object.traverse((child) => {
            if ((child).isMesh) {
                (child).material = houseMaterial3Leste;
                if ((child).material) {
                    ((child).material).transparent = false
                }
            }
        })
        scene.add(object);
        objeto3Leste = object;
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)
//PARTE LESTE DE FRUTAL
fbxLoader3.load(
    './models/frutalChao.fbx',
    (object) => {
        object.name = "frutalDoCampoChao"
        object.traverse((child) => {
            if ((child).isMesh) {
                (child).material = groundMaterial;
                if ((child).material) {
                    ((child).material).transparent = false
                }
            }
        })
        scene.add(object);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)
    carregarTexturas();

    controls.update()

    render()

}

function render() {
    renderer.render(scene, camera)
}

window.addEventListener('mousemove', onPointerMove);
window.requestAnimationFrame(render);

animate()