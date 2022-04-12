AFRAME.registerComponent("flying-birds", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            var id = `huidle${i}`;
            var posx = Math.floor(Math.random() * 3000 + -1000);
            var posy = Math.floor(Math.random() * 2 + -1);
            var posz = Math.floor(Math.random() * 3000 + -1000);
            var position = { x: posx, y: posy, z: posz };
            this.flyingBirds(id, position)

        }
    },
    flyingBirds: (id, position) => {
        var birdE1 = document.createElement("a-entity");
        var terrainE1 = document.querySelector("#terrain");
        birdE1.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");
        birdE1.setAttribute("id", id);
        birdE1.setAttribute("position", position);
        birdE1.setAttribute("scale", { x: 500, y: 500, z: 500 });
        birdE1.setAttribute("animation-mixer", {});
        terrainE1.appendchild(birdE1)

    }

})