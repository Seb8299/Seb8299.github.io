const Block = {
    WATER: 0,
    SAND: 1,
    GRASS: 2,
    STONE: 3,
}

let imgs = {};





class Map{

    constructor() {

        this.size = 1000;

        this.overworld = [this.size];

        let noice_scale = 0.02;

        for(let i = 0; i<this.size; i++) {
            this.overworld[i] = [this.size];

            for(let j = 0; j<this.size; j++) {
                let n = noise(i*noice_scale, j*noice_scale);

                if (0 <= n < .2) {
                    this.overworld[i][j] = Block.WATER;
                } else if (.2 <= n < .4) {
                    this.overworld[i][j] = Block.SAND;
                } else if (.4 <= n < .6) {
                    this.overworld[i][j] = Block.GRASS;
                } else if (.6 <= n < 1) {
                    this.overworld[i][j] = Block.STONE;
                }
            }
        }
    }

    update() {

    }

    draw() {
        let block_size = 50;

        for(let i = 0; i<this.size; i++) {
            this.overworld[i] = [this.size];

            for(let j = 0; j<this.size; j++) {

                if (this.overworld[i, j] == Block.WATER) {
                    image(imgs["water"], i*block_size, j*block_size);
                } else if (this.overworld[i, j] == Block.SAND) {
                    image(imgs["sand"], i*block_size, j*block_size);
                } else if (this.overworld[i, j] == Block.GRASS) {
                    image(imgs["grass"], i*block_size, j*block_size);
                } else if (this.overworld[i, j] == Block.STONE) {
                    image(imgs["stone"], i*block_size, j*block_size);
                }
            }
        }
    }

}