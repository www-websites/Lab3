(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const input = document.querySelector(".task__input");
    input.addEventListener("change", sortInput);
    function sortInput(e) {
        const str = input.value;
        if (str) {
            let arr = str.split(", ");
            let arrNum = [];
            arr.forEach((element => {
                element = Number(element);
                arrNum.push(element);
            }));
            arr = arrNum;
            bblSort(arr);
            function bblSort(arr) {
                for (let i = 0; i < arr.length; i++) for (let j = 0; j < arr.length - i - 1; j++) if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
                let arrReady = arr.join(", ");
                const showPlace = document.querySelector(".task__show");
                showPlace.textContent = arrReady;
                console.log(arr);
            }
        }
    }
    window["FLS"] = true;
    isWebp();
})();