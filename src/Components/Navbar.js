import React, { Component } from "react";

export default class Navigation extends Component {
        constructor() {
                super();
                this.render = this.render.bind(this);
                this.swap = this.swap.bind(this);
                this.timeout = this.timeout.bind(this);
                this.check = this.check.bind(this);

                // Sorting Algos
                this.PreProcess = this.PreProcess.bind(this);
                this.bubbleSort = this.bubbleSort.bind(this);

                this.heapify = this.heapify.bind(this);
                this.heapSort = this.heapSort.bind(this);

                this.quickSort = this.quickSort.bind(this);
                this.partition = this.partition.bind(this);
                this.PreQuickSort = this.PreQuickSort.bind(this);

                this.gnomeSort = this.gnomeSort.bind(this);
        }
        async swap(a, b, A, B) {
                document.getElementById("" + b).style.height = A + "px";
                document.getElementById("" + a).style.height = B + "px";
        }

        timeout() {
                return new Promise((resolve) => setTimeout(resolve, 0.25));
        }
        timeout(cnt) {
                return new Promise((resolve) => setTimeout(resolve, cnt));
        }
        async check(arr) {
                for (var i = 0; i < arr.length - 1; i++) {
                        await this.timeout();
                        if (arr[i] < arr[i + 1]) {
                                document.getElementById("" + i).className +=
                                        " good";
                        }
                }
                document.getElementById("" + 127).className += " good";
        }
        PreProcess() {
                let arr = [];
                for (var i = 0; i < 128; i++) {
                        let val = document.getElementById("" + i).style.height;
                        val = parseInt(val.substring(0, val.indexOf("px")));
                        arr.push(val);
                }
                return arr;
        }

        async bubbleSort() {
                let arr = this.PreProcess();
                var n = arr.length;
                for (var i = 0; i < n - 1; i++) {
                        await this.timeout();
                        for (var j = 0; j < n - i - 1; j++) {
                                await this.timeout();
                                if (arr[j] > arr[j + 1]) {
                                        this.swap(j, j + 1, arr[j], arr[j + 1]);

                                        var tmp = arr[j];
                                        arr[j] = arr[j + 1];
                                        arr[j + 1] = tmp;
                                }
                        }
                }
                this.check(arr);
        }

        async heapify(arr, n, i) {
                var largest = i; // Initialize largest as root
                var l = 2 * i + 1; // left = 2*i + 1
                var r = 2 * i + 2; // right = 2*i + 2

                // If left child is larger than root
                if (l < n && arr[l] > arr[largest]) largest = l;

                // If right child is larger than largest so far
                if (r < n && arr[r] > arr[largest]) largest = r;

                // If largest is not root
                if (largest != i) {
                        this.swap(largest, i, arr[largest], arr[i]);
                        var swap = arr[i];
                        arr[i] = arr[largest];
                        arr[largest] = swap;

                        // Recursively heapify the affected sub-tree
                        this.heapify(arr, n, largest);
                }
        }

        async heapSort() {
                var arr = this.PreProcess();
                var n = arr.length;

                // Build heap (rearrange array)
                for (var i = n / 2 - 1; i >= 0; i--) {
                        this.heapify(arr, n, i);
                }

                // One by one extract an element from heap
                for (var i = n - 1; i > 0; i--) {
                        // Move current root to end
                        await this.timeout(50);

                        this.swap(0, i, arr[0], arr[i]);
                        var temp = arr[0];
                        arr[0] = arr[i];
                        arr[i] = temp;

                        // call max heapify on the reduced heap
                        this.heapify(arr, i, 0);
                }
                this.check(arr);
        }
        partition(arr, low, high) {
                var pivot = arr[high];
                var i = low - 1; // index of smaller element
                for (var j = low; j < high; j++) {
                        // If current element is smaller than the pivot
                        if (arr[j] < pivot) {
                                i++;

                                // swap arr[i] and arr[j]
                                this.swap(j, i, arr[j], arr[i]);

                                // await this.timeout();
                                var temp = arr[i];
                                arr[i] = arr[j];
                                arr[j] = temp;
                        }
                }

                // swap arr[i+1] and arr[high] (or pivot)

                this.swap(high, i + 1, arr[high], arr[i + 1]);
                // await this.timeout();
                var temp = arr[i + 1];
                arr[i + 1] = arr[high];
                arr[high] = temp;

                return i + 1;
        }

        async quickSort(arr, low, high) {
                if (low < high) {
                        /* pi is partitioning index, arr[pi] is  
                      now at right place */
                        await this.timeout(500);
                        var pi = this.partition(arr, low, high);

                        // Recursively sort elements before
                        // partition and after partition
                        this.quickSort(arr, low, pi - 1);
                        this.quickSort(arr, pi + 1, high);
                }
                console.log(arr);
        }

        PreQuickSort() {
                var arr = this.PreProcess();
                this.quickSort(arr, 0, arr.length - 1);
                console.log("Done!");
                setTimeout(this.check, 10000, arr);
        }

        async gnomeSort() {
                var arr = this.PreProcess();
                var n = arr.length;
                var index = 0;
                while (index < n) {
                        if (index == 0) {
                                index++;
                        }
                        if (arr[index] >= arr[index - 1]) {
                                index++;
                        } else {
                                await this.timeout();
                                this.swap(
                                        index,
                                        index - 1,
                                        arr[index],
                                        arr[index - 1]
                                );
                                var temp = arr[index];
                                arr[index] = arr[index - 1];
                                arr[index - 1] = temp;
                                index--;
                        }
                }
                this.check(arr)
        }
        render() {
                return (
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="#">
                                        Sorting Visualizer
                                </a>
                                <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                >
                                        <span className="navbar-toggler-icon"></span>
                                </button>

                                <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                >
                                        <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                        <a
                                                                className="nav-link"
                                                                href="#"
                                                                onClick={
                                                                        this
                                                                                .heapSort
                                                                }
                                                        >
                                                                Heap Sort{" "}
                                                                <span className="sr-only">
                                                                        (current)
                                                                </span>
                                                        </a>
                                                </li>
                                                <li className="nav-item active">
                                                        <a
                                                                className="nav-link"
                                                                href="#"
                                                                onClick={
                                                                        this
                                                                                .bubbleSort
                                                                }
                                                        >
                                                                Bubble Sort{" "}
                                                                <span className="sr-only">
                                                                        (current)
                                                                </span>
                                                        </a>
                                                </li>
                                                <li className="nav-item active">
                                                        <a
                                                                className="nav-link"
                                                                href="#"
                                                                onClick={
                                                                        this
                                                                                .PreQuickSort
                                                                }
                                                        >
                                                                Quick Sort{" "}
                                                                <span className="sr-only">
                                                                        (current)
                                                                </span>
                                                        </a>
                                                </li>
                                                <li className="nav-item active">
                                                        <a
                                                                className="nav-link"
                                                                href="#"
                                                                onClick={
                                                                        this
                                                                                .gnomeSort
                                                                }
                                                        >
                                                                Gnome Sort{" "}
                                                                <span className="sr-only">
                                                                        (current)
                                                                </span>
                                                        </a>
                                                </li>
                                        </ul>
                                </div>
                        </nav>
                );
        }
}
