const temperature = function() {
    const measurment = {
        type: "temp",
        unit: "celsius",
        value: prompt("Degree celsius"),
    };
    console.log(measurment.value);
    const kelvin = measurment.value + 273;
    return value;
};
console.log(temperature());