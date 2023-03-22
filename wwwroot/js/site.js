// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// range
const temperatureRange = document.getElementById('temperature-range');
const temperatureOutput = document.getElementById('temperature-output');
temperatureOutput.innerHTML = temperatureRange.value;

const waterLevelRange = document.getElementById('water-level-range');
const waterLevelOutput = document.getElementById('water-level-output');
waterLevelOutput.innerHTML = waterLevelRange.value;

temperatureRange.oninput = function() {
  temperatureOutput.innerHTML = this.value;
}

waterLevelRange.oninput = function() {
  waterLevelOutput.innerHTML = this.value;
}

