class NodeIdGenerator {
    constructor() {
        this.counter = 0;
    }

    generate() {
        return `node_${this.counter++}`;
    }

    reset() {
        this.counter = 0;
    }
}

export const nodeIdGenerator = new NodeIdGenerator();