// Set up scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Bond lengths 
const TeF_bond = 1.9;
const TeBr_bond = 2.4; 
const NF_bond = 1.0;

// Bond angles
const FTeF_angle = 90; 
const BrTeBr_angle = 180;
const HNH_angle = 109.5;

// TeF2Br2
const Te = new THREE.Vector3(0, 0, 0);
const F1 = new THREE.Vector3(0, TeF_bond, 0);
const F2 = new THREE.Vector3(0, -TeF_bond, 0); 
const Br1 = new THREE.Vector3(TeBr_bond*Math.cos(FTeF_angle*Math.PI/180), 0, TeBr_bond*Math.sin(FTeF_angle*Math.PI/180));
const Br2 = new THREE.Vector3(-TeBr_bond*Math.cos(FTeF_angle*Math.PI/180), 0, TeBr_bond*Math.sin(FTeF_angle*Math.PI/180));

// NH4+
const N = new THREE.Vector3(3, 0, 0);
const H1 = new THREE.Vector3(N.x, N.y+NF_bond, N.z);
const H2 = new THREE.Vector3(N.x, N.y-NF_bond*Math.cos(HNH_angle*Math.PI/180), N.z+NF_bond*Math.sin(HNH_angle*Math.PI/180));
const H3 = new THREE.Vector3(N.x, N.y-NF_bond*Math.cos(HNH_angle*Math.PI/180), N.z-NF_bond*Math.sin(HNH_angle*Math.PI/180)); 
const H4 = new THREE.Vector3(N.x, N.y, N.z+NF_bond);

// Add bonds
scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([Te, F1]), new THREE.LineBasicMaterial({color: 0x0088ff}))); 
scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([Te, F2]), new THREE.LineBasicMaterial({color: 0x0088ff})));
scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([Te, Br1]), new THREE.LineBasicMaterial({color: 0xff0000})));
scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([Te, Br2]), new THREE.LineBasicMaterial({color: 0xff0000})));

scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([N, H1]), new THREE.LineBasicMaterial({color: 0x0088ff})));
scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([N, H2]), new THREE.LineBasicMaterial({color: 0x0088ff}))); 
scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([N, H3]), new THREE.LineBasicMaterial({color: 0x0088ff})));
scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([N, H4]), new THREE.LineBasicMaterial({color: 0x0088ff})));

// Render scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();