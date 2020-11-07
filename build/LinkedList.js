"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (this.head == null) {
            this.head = node;
            return;
        }
        var tempNode = this.head;
        while (tempNode.next) {
            tempNode = tempNode.next;
        }
        tempNode.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (this.head == null) {
                return 0;
            }
            var cnt = 1;
            var tempNode = this.head;
            while (tempNode.next) {
                cnt++;
                tempNode = tempNode.next;
            }
            return cnt;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (this.head == null) {
            throw new Error('List is Empty');
        }
        var tempNode = this.head;
        var cnt = 0;
        while (tempNode != null) {
            if (cnt === index) {
                return tempNode;
            }
            cnt++;
            tempNode = tempNode.next;
        }
        throw new Error('Index out of bound');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (this.head == null) {
            throw new Error('List is Empty!!');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var tempData = this.at(leftIndex).data;
        this.at(leftIndex).data = this.at(rightIndex).data;
        this.at(rightIndex).data = tempData;
    };
    LinkedList.prototype.print = function () {
        if (this.head == null) {
            throw new Error('List is Empty!!');
        }
        var tempNode = this.head;
        while (tempNode != null) {
            console.log(tempNode.data);
            tempNode = tempNode.next;
        }
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
