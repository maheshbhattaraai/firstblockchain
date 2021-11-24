var SHA256 = require('crypto-js/sha256');
//First Create Block
class Block {
    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = 0;
        this.previousBlockHash = "";
    }
}

//BlockChain Class
class BlockChain {
    constructor() {
        this.blocks = Array();
        this.addBlock(new Block("First block in the Chain--Genesis Block"))
    }
    addBlock(data) {
        data.height = this.blocks.length;
        data.time = new Date().getTime().toString().slice(0, -3);
        if (this.blocks.length > 0) {
            data.previousBlockHash = this.blocks[this.blocks.length - 1].hash
        }
        data.hash = SHA256(JSON.stringify(data)).toString();
        this.blocks.push(data)
    }
}