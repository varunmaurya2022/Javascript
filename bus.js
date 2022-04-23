const measurekelvin = function() {
    const measurement = {
        type: "temp",
        unit: "celsius",
        //Fix
        value: Number(prompt("Degree Celsius")),
    };

    console.log(measurement);
    console.table(measurement);
    console.log(measurement.value);
    // console.warm(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
};
console.log(measurekelvin());