class Entity {
    constructor(name, type, data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getData() {
        return this.data;
    }
}