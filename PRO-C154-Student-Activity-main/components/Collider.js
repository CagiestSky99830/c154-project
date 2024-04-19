AFRAME.registerComponent("flying-birds", {
    init:function(){
        for(var i=0; i<=20; i++){
            var id = `hurdles${i}`;
            var posX = Math.floor(Math.random()*3000-1000);
            var posY = Math.floor(Math.random()*2-1);
            var posZ = Math.floor(Math.random()*3000-1000);
            var position = {x:posX, y:posY, z:posZ};
            this.flyingBirds(id, position);
        }
    },
    flyingBirds: (id, position) => {
        var terrainEl = document.querySelector("#terrain");
        var birdEl = document.createElement("a-entity");
        birdEl.setAttribute("id", id);
        birdEl.setAttribute("position", position);
        birdEl.setAttribute("scale", {x:100000, y:100000, z:100000});
        birdEl.setAttribute("gltf-model", "./assets/models/airplane/scene.gltf");
        birdEl.setAttribute("animation-mixer", {});
        terrainEl.appendChild(birdEl)
    }
})