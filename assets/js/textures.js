// Textures
var loader = new THREE.TextureLoader();
var grassTexture = [
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/side.png")}), // side 4
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/side.png")}), // side 1
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/top.png")}), // top
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/bottom.png")}), // bottom
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/side.png")}), // side 2
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/side.png")}) // side 3
];

var dirtTexture = [
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/bottom.png")}), // side 4
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/bottom.png")}), // side 1
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/bottom.png")}), // top
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/bottom.png")}), // bottom
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/bottom.png")}), // side 2
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/grass/bottom.png")}) // side 3
];

var stoneTexture = [
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/stone/side.png")}),
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/stone/side.png")}),
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/stone/side.png")}),
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/stone/side.png")}),
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/stone/side.png")}),
 	new THREE.MeshBasicMaterial({map : loader.load("assets/images/blocks/stone/side.png")})
];
