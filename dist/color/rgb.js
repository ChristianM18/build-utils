function nameToRgb(name) {
    switch (name) {
        case "red":
            return [255, 0, 0];
        default:
            throw new Error(`Color not supported: '${name}'`);
    }
}

export { nameToRgb };
//# sourceMappingURL=rgb.js.map
