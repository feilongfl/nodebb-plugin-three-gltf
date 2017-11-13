"use strict";

function setGltf(gltfarea) {
	//$(".gltfobj")[0].id.match(/(.*\/)(.*\.gl(?:b|tf))/)
	var rooturl = gltfarea.id.match(/(.*\/)(.*\.gl(?:b|tf))/)[1];
	var gltfname = gltfarea.id.match(/(.*\/)(.*\.gl(?:b|tf))/)[2];
	console.log('root: ' + rooturl + ' ,name: ' + gltfname);

	var canvas = document.createElement("CANVAS");

	gltfarea.appendChild(canvas);

	var createScene = function () {
		// This creates a basic Babylon Scene object (non-mesh)
		var scene = new BABYLON.Scene(engine);
		// glTF Files use right handed system
		scene.useRightHandedSystem = true;

		// Configuring camera
		var camera = new BABYLON.ArcRotateCamera("camera", 1.55, 1.6, 2, BABYLON.Vector3(0, 0, 0), scene);
		camera.attachControl(canvas, true);
		camera.wheelPrecision = 100.0;
		camera.minZ = 0.01;
		camera.maxZ = 1000;

		// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
		var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
		// Default intensity is 1. Let's dim the light a small amount
		light.intensity = 0.7;

		// Append sample glTF model to scene
		BABYLON.SceneLoader.Append("https://raw.githubusercontent.com/feilongfl/pic-bed/master/201711/", "%E6%BB%91%E7%A8%BD.glb", scene, function (scene) {}, null, function (scene) {
			alert("error");
		});

		return scene;
	};
}


// require(['https://cdnjs.cloudflare.com/ajax/libs/babylonjs/2.5.0/babylon.js'], function () {
require(['https://cdnjs.cloudflare.com/ajax/libs/babylonjs/3.0.1-beta/babylon.max.js'], function () {
	for (var i = 0; i < $(".gltfobj").length; i++) {
		setGltf($(".gltfobj")[i]);
		// console.log(i);
	}
});
