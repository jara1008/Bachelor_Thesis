const predefinedSetsA1 = {
    easy: [
        [
            { left: 1, right: 2 }, { left: 3, right: 4 }, { left: 2, right: 5 },
            { left: 6, right: 4 }, { left: 3, right: 5 }, { left: 7, right: 6 }
        ],
        [
            { left: 4, right: 5 }, { left: 6, right: 3 }, { left: 1, right: 3 },
            { left: 7, right: 5 }, { left: 2, right: 4 }, { left: 6, right: 2 }
        ],
        [
            { left: 3, right: 2 }, { left: 5, right: 6 }, { left: 4, right: 1 },
            { left: 7, right: 6 }, { left: 3, right: 7 }, { left: 2, right: 5 }
        ],
        [
            { left: 2, right: 4 }, { left: 1, right: 3 }, { left: 6, right: 5 },
            { left: 3, right: 7 }, { left: 5, right: 6 }, { left: 4, right: 7 }
        ],
        [
            { left: 7, right: 4 }, { left: 3, right: 5 }, { left: 2, right: 6 },
            { left: 5, right: 7 }, { left: 1, right: 4 }, { left: 6, right: 3 }
        ],
        [
            { left: 4, right: 1 }, { left: 5, right: 3 }, { left: 6, right: 2 },
            { left: 7, right: 5 }, { left: 2, right: 3 }, { left: 3, right: 6 }
        ],
        [
            { left: 6, right: 4 }, { left: 5, right: 2 }, { left: 3, right: 7 },
            { left: 4, right: 1 }, { left: 7, right: 3 }, { left: 2, right: 6 }
        ],
        [
            { left: 2, right: 5 }, { left: 4, right: 6 }, { left: 3, right: 7 },
            { left: 5, right: 1 }, { left: 7, right: 2 }, { left: 6, right: 3 }
        ],
        [
            { left: 3, right: 6 }, { left: 4, right: 7 }, { left: 1, right: 2 },
            { left: 6, right: 5 }, { left: 5, right: 4 }, { left: 2, right: 3 }
        ],
        [
            { left: 5, right: 7 }, { left: 2, right: 1 }, { left: 3, right: 6 },
            { left: 4, right: 3 }, { left: 1, right: 5 }, { left: 7, right: 2 }
        ]
    ],
    hard: [
        [
            { left: 5, right: 4 }, { left: 3, right: 3 }, { left: 4, right: 6 },
            { left: 2, right: 2 }, { left: 6, right: 6 }, { left: 7, right: 6 }
        ],
        [
            { left: 4, right: 5 }, { left: 4, right: 4 }, { left: 3, right: 2 },
            { left: 7, right: 7 }, { left: 2, right: 2 }, { left: 5, right: 6 }
        ],
        [
            { left: 5, right: 3 }, { left: 2, right: 2 }, { left: 3, right: 6 },
            { left: 7, right: 5 }, { left: 6, right: 6 }, { left: 4, right: 4 }
        ],
        [
            { left: 2, right: 1 }, { left: 6, right: 6 }, { left: 5, right: 7 },
            { left: 3, right: 3 }, { left: 4, right: 4 }, { left: 7, right: 6 }
        ],
        [
            { left: 5, right: 5 }, { left: 6, right: 7 }, { left: 2, right: 2 },
            { left: 3, right: 2 }, { left: 4, right: 4 }, { left: 7, right: 5 }
        ],
        [
            { left: 5, right: 3 }, { left: 7, right: 7 }, { left: 4, right: 6 },
            { left: 6, right: 6 }, { left: 2, right: 2 }, { left: 3, right: 7 }
        ],
        [
            { left: 4, right: 2 }, { left: 3, right: 3 }, { left: 6, right: 5 },
            { left: 2, right: 2 }, { left: 7, right: 7 }, { left: 5, right: 6 }
        ],
        [
            { left: 6, right: 5 }, { left: 7, right: 7 }, { left: 4, right: 3 },
            { left: 2, right: 2 }, { left: 5, right: 6 }, { left: 3, right: 3 }
        ],
        [
            { left: 4, right: 4 }, { left: 6, right: 7 }, { left: 5, right: 3 },
            { left: 3, right: 3 }, { left: 2, right: 2 }, { left: 7, right: 6 }
        ],
        [
            { left: 2, right: 1 }, { left: 6, right: 7 }, { left: 5, right: 5 },
            { left: 3, right: 3 }, { left: 4, right: 4 }, { left: 7, right: 6 }
        ]
    ]
};

const predefinedSetsA2 = {
    easy: [
        [
            { first: 1, second: 2 }, { first: 3, second: 5 }, { first: 4, second: 4 },
            { first: 6, second: 6 }, { first: 7, second: 3 }, { first: 2, second: 8 },
            { first: 9, second: 7 }, { first: 4, second: 5 }
        ],
        [
            { first: 4, second: 5 }, { first: 6, second: 6 }, { first: 1, second: 3 },
            { first: 7, second: 5 }, { first: 2, second: 2 }, { first: 9, second: 4 },
            { first: 8, second: 10 }, { first: 6, second: 6 }
        ],
        [
            { first: 3, second: 3 }, { first: 5, second: 6 }, { first: 4, second: 1 },
            { first: 7, second: 8 }, { first: 6, second: 6 }, { first: 2, second: 5 },
            { first: 10, second: 9 }, { first: 6, second: 6 }
        ],
        [
            { first: 2, second: 4 }, { first: 1, second: 1 }, { first: 6, second: 7 },
            { first: 3, second: 5 }, { first: 5, second: 5 }, { first: 4, second: 9 },
            { first: 8, second: 7 }, { first: 6, second: 6 }
        ],
        [
            { first: 7, second: 4 }, { first: 3, second: 3 }, { first: 2, second: 6 },
            { first: 5, second: 8 }, { first: 1, second: 4 }, { first: 6, second: 2 },
            { first: 9, second: 7 }, { first: 6, second: 6 }
        ],
        [
            { first: 4, second: 1 }, { first: 5, second: 5 }, { first: 6, second: 3 },
            { first: 7, second: 6 }, { first: 2, second: 2 }, { first: 3, second: 9 },
            { first: 10, second: 8 }, { first: 6, second: 6 }
        ],
        [
            { first: 6, second: 4 }, { first: 5, second: 2 }, { first: 3, second: 7 },
            { first: 4, second: 1 }, { first: 7, second: 3 }, { first: 2, second: 6 },
            { first: 8, second: 10 }, { first: 6, second: 6 }
        ],
        [
            { first: 2, second: 5 }, { first: 4, second: 4 }, { first: 3, second: 7 },
            { first: 5, second: 1 }, { first: 7, second: 2 }, { first: 6, second: 3 },
            { first: 9, second: 8 }, { first: 6, second: 6 }
        ],
        [
            { first: 3, second: 6 }, { first: 4, second: 4 }, { first: 1, second: 6 },
            { first: 6, second: 5 }, { first: 7, second: 7 }, { first: 2, second: 3 },
            { first: 10, second: 9 }, { first: 6, second: 6 }
        ],
        [
            { first: 5, second: 7 }, { first: 2, second: 2 }, { first: 3, second: 6 },
            { first: 4, second: 4 }, { first: 1, second: 5 }, { first: 8, second: 3 },
            { first: 9, second: 10 }, { first: 6, second: 6 }
        ]
    ],
    hard: [
        [
            { first: 5, second: 4 }, { first: 8, second: 3 }, { first: 4, second: 6 },
            { first: 2, second: 2 }, { first: 6, second: 6 }, { first: 7, second: 6 },
            { first: 1, second: 3 }, { first: 2, second: 9 }
        ],
        [
            { first: 4, second: 8 }, { first: 4, second: 4 }, { first: 3, second: 2 },
            { first: 7, second: 7 }, { first: 2, second: 9 }, { first: 3, second: 6 },
            { first: 4, second: 3 }, { first: 5, second: 4 }
        ],
        [
            { first: 5, second: 3 }, { first: 2, second: 2 }, { first: 3, second: 6 },
            { first: 7, second: 5 }, { first: 6, second: 9 }, { first: 4, second: 4 },
            { first: 3, second: 4 }, { first: 5, second: 4 }
        ],
        [
            { first: 2, second: 1 }, { first: 9, second: 6 }, { first: 5, second: 7 },
            { first: 3, second: 3 }, { first: 4, second: 4 }, { first: 7, second: 6 },
            { first: 2, second: 5 }, { first: 5, second: 4 }
        ],
        [
            { first: 5, second: 1 }, { first: 6, second: 7 }, { first: 2, second: 2 },
            { first: 3, second: 8 }, { first: 4, second: 4 }, { first: 7, second: 5 },
            { first: 1, second: 8 }, { first: 5, second: 4 }
        ],
        [
            { first: 5, second: 3 }, { first: 7, second: 7 }, { first: 1, second: 6 },
            { first: 6, second: 6 }, { first: 2, second: 6 }, { first: 3, second: 7 },
            { first: 1, second: 4 }, { first: 5, second: 4 }
        ],
        [
            { first: 4, second: 2 }, { first: 3, second: 3 }, { first: 6, second: 5 },
            { first: 2, second: 2 }, { first: 7, second: 7 }, { first: 5, second: 6 },
            { first: 3, second: 4 }, { first: 5, second: 4 }
        ],
        [
            { first: 6, second: 5 }, { first: 7, second: 7 }, { first: 4, second: 3 },
            { first: 2, second: 2 }, { first: 5, second: 6 }, { first: 3, second: 3 },
            { first: 4, second: 7 }, { first: 5, second: 4 }
        ],
        [
            { first: 4, second: 4 }, { first: 6, second: 7 }, { first: 5, second: 3 },
            { first: 6, second: 3 }, { first: 2, second: 2 }, { first: 7, second: 6 },
            { first: 1, second: 4 }, { first: 5, second: 4 }
        ],
        [
            { first: 2, second: 1 }, { first: 6, second: 7 }, { first: 5, second: 5 },
            { first: 3, second: 3 }, { first: 8, second: 2 }, { first: 7, second: 6 },
            { first: 2, second: 5 }, { first: 5, second: 4 }
        ]
    ]
};

const predefinedSetsA3 = {
    easy: [
        [
            { left: 1, right: 2 }, { left: 25, right: 28 }, { left: 3, right: 9 },
            { left: 17, right: 14 }, { left: 12, right: 12 }, { left: 3, right: 3 },
            { left: 6, right: 2 }, { left: 11, right: 18 }
        ],
        [
            { left: 9, right: 1 }, { left: 19, right: 10 }, { left: 23, right: 23 },
            { left: 16, right: 19 }, { left: 11, right: 18 }, { left: 24, right: 21 },
            { left: 27, right: 21 }, { left: 3, right: 9 }
        ],
        [
            { left: 4, right: 6 }, { left: 10, right: 16 }, { left: 19, right: 20 },
            { left: 12, right: 14 }, { left: 25, right: 23 }, { left: 29, right: 29 },
            { left: 21, right: 22 }, { left: 3, right: 9 }
        ],
        [
            { left: 7, right: 7 }, { left: 10, right: 16 }, { left: 13, right: 11 },
            { left: 14, right: 15 }, { left: 26, right: 24 }, { left: 1, right: 3 },
            { left: 27, right: 27 }, { left: 3, right: 9 }
        ],
        [
            { left: 5, right: 9 }, { left: 14, right: 10 }, { left: 29, right: 22 },
            { left: 18, right: 18 }, { left: 22, right: 24 }, { left: 20, right: 25 },
            { left: 27, right: 28 }, { left: 3, right: 9 }
        ],
        [
            { left: 2, right: 4 }, { left: 11, right: 10 }, { left: 13, right: 18 },
            { left: 15, right: 12 }, { left: 20, right: 21 }, { left: 26, right: 26 },
            { left: 21, right: 28 }, { left: 3, right: 9 }
        ],
        [
            { left: 3, right: 6 }, { left: 20, right: 21 }, { left: 13, right: 13 },
            { left: 17, right: 19 }, { left: 22, right: 27 }, { left: 27, right: 28 },
            { left: 14, right: 13 }, { left: 3, right: 9 }
        ],
        [
            { left: 4, right: 7 }, { left: 24, right: 20 }, { left: 24, right: 23 },
            { left: 12, right: 12 }, { left: 5, right: 8 }, { left: 15, right: 19 },
            { left: 13, right: 11 }, { left: 3, right: 9 }
        ],
        [
            { left: 6, right: 8 }, { left: 11, right: 11 }, { left: 20, right: 24 },
            { left: 27, right: 23 }, { left: 26, right: 29 }, { left: 16, right: 17 },
            { left: 17, right: 16 }, { left: 3, right: 9 }
        ],
        [
            { left: 7, right: 9 }, { left: 15, right: 10 }, { left: 4, right: 4 },
            { left: 20, right: 22 }, { left: 28, right: 26 }, { left: 13, right: 13 },
            { left: 12, right: 17 }, { left: 3, right: 9 }
        ]
    ],
    hard: [
        [
            { left: 1, right: 3 }, { left: 10, right: 2 }, { left: 20, right: 17 },
            { left: 16, right: 19 }, { left: 9, right: 12 }, { left: 18, right: 26 },
            { left: 18, right: 18 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 6 }, { left: 7, right: 20 }, { left: 29, right: 27 },
            { left: 14, right: 22 }, { left: 21, right: 19 }, { left: 23, right: 23 },
            { left: 1, right: 19 }, { left: 3, right: 9 }
        ],
        [
            { left: 8, right: 5 }, { left: 10, right: 8 }, { left: 21, right: 12 },
            { left: 23, right: 25 }, { left: 12, right: 12 }, { left: 19, right: 21 },
            { left: 25, right: 17 }, { left: 3, right: 9 }
        ],
        [
            { left: 7, right: 9 }, { left: 18, right: 29 }, { left: 6, right: 6 },
            { left: 14, right: 23 }, { left: 25, right: 18 }, { left: 11, right: 2 },
            { left: 19, right: 20 }, { left: 3, right: 9 }
        ],
        [
            { left: 5, right: 8 }, { left: 12, right: 4 }, { left: 12, right: 17 },
            { left: 21, right: 19 }, { left: 27, right: 19 }, { left: 24, right: 18 },
            { left: 17, right: 17 }, { left: 3, right: 9 }
        ],
        [
            { left: 4, right: 3 }, { left: 4, right: 20 }, { left: 14, right: 22 },
            { left: 16, right: 16 }, { left: 16, right: 21 }, { left: 8, right: 18 },
            { left: 9, right: 28 }, { left: 3, right: 9 }
        ],
        [
            { left: 6, right: 7 }, { left: 20, right: 11 }, { left: 24, right: 26 },
            { left: 27, right: 27 }, { left: 8, right: 15 }, { left: 2, right: 24 },
            { left: 4, right: 13 }, { left: 3, right: 9 }
        ],
        [
            { left: 5, right: 4 }, { left: 8, right: 10 }, { left: 15, right: 23 },
            { left: 22, right: 24 }, { left: 26, right: 26 }, { left: 9, right: 17 },
            { left: 1, right: 20 }, { left: 3, right: 9 }
        ],
        [
            { left: 2, right: 1 }, { left: 20, right: 2 }, { left: 3, right: 21 },
            { left: 22, right: 24 }, { left: 9, right: 27 }, { left: 15, right: 6 },
            { left: 19, right: 19 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 8 }, { left: 10, right: 9 }, { left: 7, right: 25 },
            { left: 11, right: 8 }, { left: 21, right: 21 }, { left: 4, right: 12 },
            { left: 20, right: 7 }, { left: 3, right: 9 }
        ]
    ]
};

const predefinedSetsA5 = {
    easy: [
        [
            { smallNum: 10, largeNum: 20 }, { smallNum: 4, largeNum: 9 }, { smallNum: 6, largeNum: 18 },
            { smallNum: 3, largeNum: 16 }, { smallNum: 6, largeNum: 20 }
        ],
        [
            { smallNum: 7, largeNum: 10 }, { smallNum: 10, largeNum: 20 }, { smallNum: 2, largeNum: 15 },
            { smallNum: 7, largeNum: 19 }, { smallNum: 3, largeNum: 20 }
        ],
        [
            { smallNum: 5, largeNum: 10 }, { smallNum: 10, largeNum: 20 }, { smallNum: 3, largeNum: 14 },
            { smallNum: 11, largeNum: 20 }, { smallNum: 6, largeNum: 19 }
        ],
        [
            { smallNum: 2, largeNum: 10 }, { smallNum: 15, largeNum: 20 }, { smallNum: 10, largeNum: 20 },
            { smallNum: 12, largeNum: 18 }, { smallNum: 2, largeNum: 17 }
        ],
        [
            { smallNum: 10, largeNum: 20 }, { smallNum: 7, largeNum: 10 }, { smallNum: 1, largeNum: 20 },
            { smallNum: 2, largeNum: 13 }, { smallNum: 12, largeNum: 20 }
        ],
        [
            { smallNum: 10, largeNum: 20 }, { smallNum: 7, largeNum: 10 }, { smallNum: 17, largeNum: 20 },
            { smallNum: 2, largeNum: 15 }, { smallNum: 5, largeNum: 20 }
        ],
        [
            { smallNum: 7, largeNum: 10 }, { smallNum: 10, largeNum: 20 }, { smallNum: 12, largeNum: 16 },
            { smallNum: 3, largeNum: 18 }, { smallNum: 8, largeNum: 19 }
        ],
        [
            { smallNum: 3, largeNum: 10 }, { smallNum: 10, largeNum: 20 }, { smallNum: 9, largeNum: 20 },
            { smallNum: 11, largeNum: 16 }, { smallNum: 2, largeNum: 19 }
        ],
        [
            { smallNum: 8, largeNum: 10 }, { smallNum: 10, largeNum: 20 }, { smallNum: 17, largeNum: 20 },
            { smallNum: 4, largeNum: 19 }, { smallNum: 14, largeNum: 18 }
        ],
        [
            { smallNum: 10, largeNum: 20 }, { smallNum: 6, largeNum: 10 }, { smallNum: 12, largeNum: 20 },
            { smallNum: 12, largeNum: 17 }, { smallNum: 3, largeNum: 14 }
        ]
    ],
    hard: [
        [
            { smallNum: 20, largeNum: 50 }, { smallNum: 40, largeNum: 57 }, { smallNum: 51, largeNum: 78 },
            { smallNum: 14, largeNum: 22 }, { smallNum: 67, largeNum: 83 }
        ],
        [
            { smallNum: 20, largeNum: 70 }, { smallNum: 60, largeNum: 75 }, { smallNum: 65, largeNum: 97 },
            { smallNum: 15, largeNum: 21 }, { smallNum: 65, largeNum: 81 }
        ],
        [
            { smallNum: 40, largeNum: 80 }, { smallNum: 40, largeNum: 55 }, { smallNum: 43, largeNum: 75 },
            { smallNum: 12, largeNum: 21 }, { smallNum: 47, largeNum: 64 }
        ],
        [
            { smallNum: 60, largeNum: 90 }, { smallNum: 80, largeNum: 92 }, { smallNum: 32, largeNum: 54 },
            { smallNum: 16, largeNum: 24 }, { smallNum: 48, largeNum: 65 }
        ],
        [
            { smallNum: 80, largeNum: 90 }, { smallNum: 80, largeNum: 95 }, { smallNum: 36, largeNum: 67 },
            { smallNum: 18, largeNum: 27 }, { smallNum: 76, largeNum: 92 }
        ],
        [
            { smallNum: 30, largeNum: 90 }, { smallNum: 70, largeNum: 86 }, { smallNum: 33, largeNum: 65 },
            { smallNum: 13, largeNum: 22 }, { smallNum: 74, largeNum: 92 }
        ],
        [
            { smallNum: 20, largeNum: 80 }, { smallNum: 50, largeNum: 63 }, { smallNum: 78, largeNum: 99 },
            { smallNum: 17, largeNum: 24 }, { smallNum: 65, largeNum: 82 }
        ],
        [
            { smallNum: 40, largeNum: 70 }, { smallNum: 40, largeNum: 58 }, { smallNum: 64, largeNum: 97 },
            { smallNum: 16, largeNum: 25 }, { smallNum: 53, sallNum: 71 }
        ],
        [
            { smallNum: 30, largeNum: 40 }, { smallNum: 60, largeNum: 74 }, { smallNum: 32, largeNum: 59 },
            { smallNum: 19, largeNum: 27 }, { smallNum: 56, largeNum: 73 }
        ],
        [
            { smallNum: 40, largeNum: 80 }, { smallNum: 30, largeNum: 43 }, { smallNum: 43, largeNum: 76 },
            { smallNum: 16, largeNum: 23 }, { smallNum: 67, largeNum: 95 }
        ]
    ]
};

const predefinedSetsA6 = {
    easy: [
        [
            { left: 3, right: 1 }, { left: 28, right: 25 }, { left: 9, right: 3 },
            { left: 17, right: 14 }, { left: 23, right: 12 }, { left: 6, right: 2 },
            { left: 16, right: 4 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 1 }, { left: 16, right: 10 }, { left: 22, right: 12 },
            { left: 19, right: 16 }, { left: 18, right: 11 }, { left: 24, right: 12 },
            { left: 27, right: 21 }, { left: 9, right: 3 }
        ],
        [
            { left: 6, right: 4 }, { left: 14, right: 10 }, { left: 24, right: 14 },
            { left: 19, right: 12 }, { left: 25, right: 23 }, { left: 9, right: 5 },
            { left: 21, right: 10 }, { left: 9, right: 3 }
        ],
        [
            { left: 9, right: 2 }, { left: 11, right: 10 }, { left: 17, right: 11 },
            { left: 25, right: 24 }, { left: 26, right: 14 }, { left: 3, right: 1 },
            { left: 27, right: 15 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 5 }, { left: 14, right: 10 }, { left: 29, right: 22 },
            { left: 28, right: 8 }, { left: 14, right: 12 }, { left: 25, right: 14 },
            { left: 18, right: 7 }, { left: 3, right: 9 }
        ],
        [
            { left: 4, right: 2 }, { left: 12, right: 10 }, { left: 18, right: 13 },
            { left: 25, right: 22 }, { left: 25, right: 13 }, { left: 8, right: 5 },
            { left: 25, right: 13 }, { left: 3, right: 9 }
        ],
        [
            { left: 6, right: 3 }, { left: 21, right: 20 }, { left: 19, right: 13 },
            { left: 26, right: 25 }, { left: 28, right: 15 }, { left: 17, right: 14 },
            { left: 27, right: 2 }, { left: 3, right: 9 }
        ],
        [
            { left: 7, right: 4 }, { left: 24, right: 20 }, { left: 23, right: 22 },
            { left: 17, right: 11 }, { left: 8, right: 5 }, { left: 19, right: 3 },
            { left: 27, right: 11 }, { left: 3, right: 9 }
        ],
        [
            { left: 8, right: 6 }, { left: 22, right: 20 }, { left: 24, right: 21 },
            { left: 17, right: 13 }, { left: 29, right: 18 }, { left: 27, right: 20 },
            { left: 18, right: 4 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 7 }, { left: 15, right: 10 }, { left: 16, right: 14 },
            { left: 28, right: 24 }, { left: 28, right: 15 }, { left: 17, right: 13 },
            { left: 19, right: 3 }, { left: 3, right: 9 }
        ]
    ],
    hard: [
        [
            { left: 9, right: 3 }, { left: 10, right: 2 }, { left: 21, right: 7 },
            { left: 19, right: 6 }, { left: 12, right: 9 }, { left: 26, right: 8 },
            { left: 28, right: 9 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 6 }, { left: 20, right: 17 }, { left: 23, right: 17 },
            { left: 22, right: 1 }, { left: 21, right: 19 }, { left: 23, right: 7 },
            { left: 18, right: 9 }, { left: 3, right: 9 }
        ],
        [
            { left: 8, right: 5 }, { left: 10, right: 8 }, { left: 21, right: 12 },
            { left: 25, right: 3 }, { left: 14, right: 7 }, { left: 21, right: 9 },
            { left: 25, right: 17 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 7 }, { left: 20, right: 18 }, { left: 16, right: 8 },
            { left: 25, right: 4 }, { left: 25, right: 18 }, { left: 11, right: 2 },
            { left: 20, right: 19 }, { left: 3, right: 9 }
        ],
        [
            { left: 7, right: 5 }, { left: 10, right: 4 }, { left: 17, right: 8 },
            { left: 29, right: 14 }, { left: 27, right: 19 }, { left: 24, right: 18 },
            { left: 20, right: 15 }, { left: 3, right: 9 }
        ],
        [
            { left: 4, right: 3 }, { left: 20, right: 14 }, { left: 22, right: 14 },
            { left: 29, right: 1 }, { left: 21, right: 16 }, { left: 22, right: 8 },
            { left: 28, right: 9 }, { left: 3, right: 9 }
        ],
        [
            { left: 7, right: 1 }, { left: 20, right: 11 }, { left: 26, right: 14 },
            { left: 27, right: 3 }, { left: 15, right: 8 }, { left: 21, right: 2 },
            { left: 13, right: 4 }, { left: 3, right: 9 }
        ],
        [
            { left: 5, right: 2 }, { left: 10, right: 1 }, { left: 23, right: 15 },
            { left: 24, right: 3 }, { left: 26, right: 19 }, { left: 17, right: 9 },
            { left: 20, right: 1 }, { left: 3, right: 9 }
        ],
        [
            { left: 2, right: 1 }, { left: 20, right: 17 }, { left: 21, right: 3 },
            { left: 28, right: 1 }, { left: 17, right: 9 }, { left: 15, right: 6 },
            { left: 20, right: 19 }, { left: 3, right: 9 }
        ],
        [
            { left: 9, right: 1 }, { left: 10, right: 9 }, { left: 25, right: 7 },
            { left: 27, right: 5 }, { left: 21, right: 13 }, { left: 22, right: 15 },
            { left: 10, right: 3 }, { left: 3, right: 9 }
        ]
    ]
};

const predefinedSetsA7 = {
    easy: [
        [
            { large: 428, small: 123 },
            { large: 673, small: 289 },
            { large: 564, small: 375 },
            { large: 842, small: 831 },
            { large: 922, small: 729 },
            { large: 356, small: 145 }
        ],
        [
            { large: 356, small: 145 },
            { large: 682, small: 274 },
            { large: 511, small: 382 },
            { large: 714, small: 707 },
            { large: 835, small: 536 },
            { large: 356, small: 145 }
        ],
        [
            { large: 459, small: 238 },
            { large: 682, small: 345 },
            { large: 574, small: 487 },
            { large: 802, small: 791 },
            { large: 813, small: 616 },
            { large: 356, small: 145 }
        ],
        [
            { large: 479, small: 259 },
            { large: 639, small: 348 },
            { large: 857, small: 376 },
            { large: 894, small: 815 },
            { large: 791, small: 593 },
            { large: 356, small: 145 }
        ],
        [
            { large: 989, small: 264 },
            { large: 653, small: 344 },
            { large: 131, small: 89 },
            { large: 274, small: 239 },
            { large: 213, small: 117 },
            { large: 356, small: 145 }
        ],
        [
            { large: 737, small: 117 },
            { large: 691, small: 354 },
            { large: 523, small: 99 },
            { large: 818, small: 799 },
            { large: 780, small: 281 },
            { large: 356, small: 145 },
            { large: 356, small: 145 }
        ],
        [
            { large: 465, small: 223 },
            { large: 783, small: 379 },
            { large: 943, small: 857 },
            { large: 432, small: 389 },
            { large: 610, small: 517 },
            { large: 356, small: 145 }
        ],
        [
            { large: 856, small: 754 },
            { large: 514, small: 362 },
            { large: 533, small: 56 },
            { large: 807, small: 719 },
            { large: 991, small: 393 },
            { large: 356, small: 145 }
        ],
        [
            { large: 419, small: 402 },
            { large: 642, small: 318 },
            { large: 567, small: 289 },
            { large: 913, small: 756 },
            { large: 720, small: 125 },
            { large: 356, small: 145 }
        ],
        [
            { large: 448, small: 231 },
            { large: 991, small: 349 },
            { large: 633, small: 174 },
            { large: 804, small: 617 },
            { large: 844, small: 645 },
            { large: 356, small: 145 }
        ]
    ],
    hard: [
        [
            { large: 8824, small: 1234 },
            { large: 6731, small: 2890 },
            { large: 5600, small: 3499 },
            { large: 8425, small: 7524 },
            { large: 7085, small: 5094 },
            { large: 5296, small: 2147 }
        ],
        [
            { large: 5296, small: 2147 },
            { large: 6487, small: 3749 },
            { large: 9812, small: 4578 },
            { large: 8901, small: 7910 },
            { large: 9642, small: 9463 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 4931, small: 3341 },
            { large: 9784, small: 4827 },
            { large: 5400, small: 4218 },
            { large: 3564, small: 2582 },
            { large: 7300, small: 6199 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 7570, small: 1432 },
            { large: 4359, small: 2881 },
            { large: 9900, small: 4789 },
            { large: 4430, small: 1701 },
            { large: 7524, small: 5591 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 9128, small: 8163 },
            { large: 6982, small: 5499 },
            { large: 4713, small: 4528 },
            { large: 9734, small: 7929 },
            { large: 1218, small: 223 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 5281, small: 2105 },
            { large: 7547, small: 3992 },
            { large: 5913, small: 4876 },
            { large: 8329, small: 1394 },
            { large: 7640, small: 7378 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 7382, small: 4190 },
            { large: 6712, small: 3487 },
            { large: 7710, small: 6693 },
            { large: 3237, small: 2956 },
            { large: 9500, small: 6457 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 5345, small: 3306 },
            { large: 6529, small: 4734 },
            { large: 5706, small: 4619 },
            { large: 1051, small: 344 },
            { large: 7225, small: 6282 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 4976, small: 2195 },
            { large: 8913, small: 3587 },
            { large: 7817, small: 6099 },
            { large: 9507, small: 1552 },
            { large: 7214, small: 6809 },
            { large: 8824, small: 1234 }
        ],
        [
            { large: 3223, small: 1106 },
            { large: 5640, small: 2721 },
            { large: 5503, small: 4495 },
            { large: 9301, small: 8310 },
            { large: 2009, small: 747 },
            { large: 8824, small: 1234 }
        ]
    ]
};

const predefinedSetsA8 = {
    easy: [
        [{ number: -3 }, { number: 2 }, { number: 7 }, { number: 5 }, { number: -2 }, { number: 3 }, { number: -4 }, { number: -1 }],
        [{ number: -3 }, { number: 3 }, { number: -5 }, { number: -7 }, { number: -1 }, { number: 2 }, { number: -6 }, { number: -1 }],
        [{ number: 1 }, { number: -4 }, { number: 3 }, { number: -2 }, { number: -7 }, { number: -3 }, { number: 2 }, { number: -1 }],
        [{ number: -1 }, { number: 4 }, { number: -3 }, { number: 3 }, { number: -2 }, { number: -7 }, { number: -5 }, { number: -1 }],
        [{ number: -6 }, { number: 1 }, { number: -4 }, { number: 3 }, { number: 7 }, { number: 2 }, { number: -2 }, { number: -1 }],
        [{ number: 2 }, { number: -1 }, { number: 4 }, { number: -5 }, { number: 3 }, { number: -4 }, { number: -7 }, { number: -1 }],
        [{ number: -4 }, { number: 5 }, { number: 7 }, { number: 4 }, { number: -1 }, { number: 2 }, { number: -6 }, { number: -1 }],
        [{ number: 3 }, { number: -4 }, { number: -7 }, { number: -1 }, { number: 4 }, { number: -3 }, { number: 1 }, { number: -1 }],
        [{ number: -1 }, { number: 3 }, { number: 7 }, { number: 2 }, { number: -2 }, { number: 4 }, { number: -3 }, { number: -1 }],
        [{ number: -5 }, { number: 2 }, { number: -1 }, { number: -7 }, { number: -4 }, { number: 1 }, { number: -6 }, { number: -1 }]
    ],
    hard: [
        [{ x: 3, y: 4 }, { x: -2, y: -3 }, { x: -1, y: 5 }, { x: 4, y: -2 }, { x: -5, y: 3 }, { x: -1, y: -4 }, { x: 3, y: -1 }, { x: -2, y: 4 }],
        [{ x: 2, y: 4 }, { x: -3, y: -5 }, { x: 4, y: -2 }, { x: -1, y: 3 }, { x: 5, y: 4 }, { x: -2, y: 4 }, { x: 3, y: -5 }, { x: -2, y: 4 }],
        [{ x: 4, y: 3 }, { x: -1, y: -5 }, { x: -2, y: 4 }, { x: 3, y: -1 }, { x: -3, y: 5 }, { x: -2, y: -4 }, { x: -1, y: 4 }, { x: -2, y: 4 }],
        [{ x: 5, y: 2 }, { x: -3, y: -4 }, { x: 1, y: -4 }, { x: -5, y: 2 }, { x: 4, y: 1 }, { x: -2, y: -3 }, { x: 3, y: -5 }, { x: -2, y: 4 }],
        [{ x: 1, y: 3 }, { x: -4, y: -2 }, { x: -3, y: 5 }, { x: 2, y: 4 }, { x: -5, y: 1 }, { x: 3, y: -2 }, { x: -2, y: 4 }, { x: 2, y: -4 }],
        [{ x: 3, y: 4 }, { x: -1, y: -5 }, { x: -4, y: -2 }, { x: -2, y: 3 }, { x: 5, y: 1 }, { x: -4, y: -2 }, { x: 1, y: -5 }, { x: -2, y: 4 }],
        [{ x: 3, y: 5 }, { x: -2, y: -4 }, { x: -1, y: 4 }, { x: 3, y: -5 }, { x: -2, y: 3 }, { x: 4, y: -1 }, { x: -4, y: 1 }, { x: -2, y: 4 }],
        [{ x: 1, y: 4 }, { x: -5, y: -2 }, { x: 4, y: -3 }, { x: 2, y: 5 }, { x: 3, y: 1 }, { x: -4, y: -2 }, { x: 5, y: -3 }, { x: -2, y: 4 }],
        [{ x: 1, y: 4 }, { x: -3, y: -5 }, { x: -2, y: 4 }, { x: 5, y: -3 }, { x: -4, y: 1 }, { x: -2, y: -3 }, { x: -3, y: 5 }, { x: -2, y: 4 }],
        [{ x: 2, y: 5 }, { x: -1, y: -3 }, { x: 4, y: -2 }, { x: -3, y: 5 }, { x: 1, y: 4 }, { x: -5, y: -2 }, { x: 3, y: -1 }, { x: -2, y: 4 }]
    ]
};

const predefinedSetsA9 = {
    easy: [
        [
            { leftValue: 2, rightValue: 5 },
            { leftValue: 15, rightValue: 22 },
            { leftValue: 17, rightValue: 29 },
            { leftValue: 21, rightValue: 22 },
            { leftValue: 11, rightValue: 26 },
            { leftValue: 8, rightValue: 29 },
            { leftValue: 13, rightValue: 28 },
            { leftValue: 2, rightValue: 8 }
        ],
        [
            { leftValue: 2, rightValue: 8 },
            { leftValue: 14, rightValue: 28 },
            { leftValue: 10, rightValue: 20 },
            { leftValue: 6, rightValue: 28 },
            { leftValue: 10, rightValue: 21 },
            { leftValue: 2, rightValue: 24 },
            { leftValue: 8, rightValue: 19 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 4, rightValue: 5 },
            { leftValue: 13, rightValue: 25 },
            { leftValue: 4, rightValue: 28 },
            { leftValue: 5, rightValue: 17 },
            { leftValue: 21, rightValue: 26 },
            { leftValue: 10, rightValue: 20 },
            { leftValue: 1, rightValue: 21 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 6, rightValue: 9 },
            { leftValue: 3, rightValue: 19 },
            { leftValue: 4, rightValue: 24 },
            { leftValue: 14, rightValue: 25 },
            { leftValue: 12, rightValue: 27 },
            { leftValue: 10, rightValue: 22 },
            { leftValue: 5, rightValue: 18 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 1, rightValue: 3 },
            { leftValue: 11, rightValue: 25 },
            { leftValue: 8, rightValue: 28 },
            { leftValue: 3, rightValue: 26 },
            { leftValue: 13, rightValue: 28 },
            { leftValue: 10, rightValue: 17 },
            { leftValue: 2, rightValue: 24 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 1, rightValue: 9 },
            { leftValue: 5, rightValue: 15 },
            { leftValue: 10, rightValue: 21 },
            { leftValue: 7, rightValue: 29 },
            { leftValue: 11, rightValue: 27 },
            { leftValue: 8, rightValue: 19 },
            { leftValue: 2, rightValue: 26 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 1, rightValue: 2 },
            { leftValue: 6, rightValue: 17 },
            { leftValue: 13, rightValue: 23 },
            { leftValue: 4, rightValue: 19 },
            { leftValue: 11, rightValue: 23 },
            { leftValue: 13, rightValue: 24 },
            { leftValue: 4, rightValue: 19 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 2, rightValue: 5 },
            { leftValue: 5, rightValue: 15 },
            { leftValue: 10, rightValue: 22 },
            { leftValue: 6, rightValue: 27 },
            { leftValue: 11, rightValue: 24 },
            { leftValue: 1, rightValue: 22 },
            { leftValue: 3, rightValue: 28 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 4, rightValue: 6 },
            { leftValue: 9, rightValue: 29 },
            { leftValue: 12, rightValue: 26 },
            { leftValue: 2, rightValue: 22 },
            { leftValue: 5, rightValue: 17 },
            { leftValue: 11, rightValue: 25 },
            { leftValue: 7, rightValue: 19 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 1, rightValue: 7 },
            { leftValue: 6, rightValue: 26 },
            { leftValue: 13, rightValue: 25 },
            { leftValue: 8, rightValue: 29 },
            { leftValue: 13, rightValue: 24 },
            { leftValue: 8, rightValue: 29 },
            { leftValue: 12, rightValue: 27 },
            { leftValue: 13, rightValue: 28 }
        ]
    ],
    hard: [
        [
            { leftValue: 15, rightValue: 34 },
            { leftValue: 12, rightValue: 20 },
            { leftValue: 21, rightValue: 36 },
            { leftValue: 11, rightValue: 30 },
            { leftValue: 4, rightValue: 33 },
            { leftValue: 17, rightValue: 35 },
            { leftValue: 10, rightValue: 32 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 16, rightValue: 34 },
            { leftValue: 1, rightValue: 30 },
            { leftValue: 29, rightValue: 37 },
            { leftValue: 3, rightValue: 31 },
            { leftValue: 12, rightValue: 20 },
            { leftValue: 17, rightValue: 35 },
            { leftValue: 5, rightValue: 32 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 8, rightValue: 36 },
            { leftValue: 28, rightValue: 31 },
            { leftValue: 7, rightValue: 20 },
            { leftValue: 12, rightValue: 30 },
            { leftValue: 19, rightValue: 35 },
            { leftValue: 14, rightValue: 32 },
            { leftValue: 6, rightValue: 34 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 14, rightValue: 33 },
            { leftValue: 11, rightValue: 29 },
            { leftValue: 18, rightValue: 30 },
            { leftValue: 15, rightValue: 32 },
            { leftValue: 25, rightValue: 31 },
            { leftValue: 11, rightValue: 20 },
            { leftValue: 12, rightValue: 31 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 12, rightValue: 37 },
            { leftValue: 16, rightValue: 30 },
            { leftValue: 24, rightValue: 31 },
            { leftValue: 17, rightValue: 25 },
            { leftValue: 13, rightValue: 30 },
            { leftValue: 8, rightValue: 36 },
            { leftValue: 16, rightValue: 23 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 13, rightValue: 32 },
            { leftValue: 12, rightValue: 20 },
            { leftValue: 27, rightValue: 35 },
            { leftValue: 4, rightValue: 30 },
            { leftValue: 18, rightValue: 33 },
            { leftValue: 5, rightValue: 21 },
            { leftValue: 9, rightValue: 20 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 16, rightValue: 31 },
            { leftValue: 13, rightValue: 30 },
            { leftValue: 19, rightValue: 26 },
            { leftValue: 3, rightValue: 20 },
            { leftValue: 15, rightValue: 33 },
            { leftValue: 17, rightValue: 37 },
            { leftValue: 29, rightValue: 32 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 7, rightValue: 35 },
            { leftValue: 12, rightValue: 30 },
            { leftValue: 29, rightValue: 36 },
            { leftValue: 5, rightValue: 32 },
            { leftValue: 14, rightValue: 23 },
            { leftValue: 19, rightValue: 37 },
            { leftValue: 13, rightValue: 20 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 14, rightValue: 33 },
            { leftValue: 11, rightValue: 28 },
            { leftValue: 16, rightValue: 30 },
            { leftValue: 19, rightValue: 22 },
            { leftValue: 7, rightValue: 36 },
            { leftValue: 23, rightValue: 30 },
            { leftValue: 5, rightValue: 32 },
            { leftValue: 13, rightValue: 28 }
        ],
        [
            { leftValue: 18, rightValue: 31 },
            { leftValue: 13, rightValue: 30 },
            { leftValue: 9, rightValue: 37 },
            { leftValue: 15, rightValue: 32 },
            { leftValue: 13, rightValue: 20 },
            { leftValue: 24, rightValue: 33 },
            { leftValue: 7, rightValue: 23 },
            { leftValue: 13, rightValue: 28 }
        ]
    ]
};

const predefinedSetsA10 = {
    easy: [
        [
            { numberLarge: 2453, numberSmall: 1232 },
            { numberLarge: 3411, numberSmall: 2476 },
            { numberLarge: 4678, numberSmall: 3699 },
            { numberLarge: 5231, numberSmall: 3383 },
            { numberLarge: 6781, numberSmall: 5898 },
            { numberLarge: 5678, numberSmall: 4769 }
        ],
        [
            { numberLarge: 2345, numberSmall: 1231 },
            { numberLarge: 5321, numberSmall: 2398 },
            { numberLarge: 7523, numberSmall: 3456 },
            { numberLarge: 5678, numberSmall: 4769 },
            { numberLarge: 9780, numberSmall: 7898 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 9832, numberSmall: 1720 },
            { numberLarge: 8855, numberSmall: 1889 },
            { numberLarge: 8376, numberSmall: 2457 },
            { numberLarge: 9380, numberSmall: 7801 },
            { numberLarge: 5231, numberSmall: 4576 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 7943, numberSmall: 6830 },
            { numberLarge: 2621, numberSmall: 1645 },
            { numberLarge: 3765, numberSmall: 3499 },
            { numberLarge: 1876, numberSmall: 1599 },
            { numberLarge: 8533, numberSmall: 6657 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 5649, numberSmall: 1431 },
            { numberLarge: 2797, numberSmall: 1989 },
            { numberLarge: 4864, numberSmall: 3963 },
            { numberLarge: 5125, numberSmall: 4764 },
            { numberLarge: 3769, numberSmall: 7876 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 7754, numberSmall: 4511 },
            { numberLarge: 2865, numberSmall: 2689 },
            { numberLarge: 3920, numberSmall: 3765 },
            { numberLarge: 2523, numberSmall: 1665 },
            { numberLarge: 7341, numberSmall: 1586 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 3564, numberSmall: 1152 },
            { numberLarge: 7574, numberSmall: 4868 },
            { numberLarge: 7810, numberSmall: 3474 },
            { numberLarge: 4245, numberSmall: 2586 },
            { numberLarge: 5023, numberSmall: 2696 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 6575, numberSmall: 4351 },
            { numberLarge: 9381, numberSmall: 6472 },
            { numberLarge: 8312, numberSmall: 3583 },
            { numberLarge: 9105, numberSmall: 4696 },
            { numberLarge: 6016, numberSmall: 5927 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 2681, numberSmall: 1470 },
            { numberLarge: 3492, numberSmall: 2285 },
            { numberLarge: 1803, numberSmall: 3992 },
            { numberLarge: 8814, numberSmall: 4933 },
            { numberLarge: 5025, numberSmall: 4937 },
            { numberLarge: 5231, numberSmall: 3383 }
        ],
        [
            { numberLarge: 8790, numberSmall: 2570 },
            { numberLarge: 4627, numberSmall: 2593 },
            { numberLarge: 6901, numberSmall: 5767 },
            { numberLarge: 4001, numberSmall: 3912 },
            { numberLarge: 8134, numberSmall: 5295 },
            { numberLarge: 5231, numberSmall: 3383 }
        ]
    ],
    hard: [
        [
            { numberLarge: 2245, numberSmall: 3256 },
            { numberLarge: 4367, numberSmall: 2458 },
            { numberLarge: 3478, numberSmall: 5459 },
            { numberLarge: 4173, numberSmall: 6234 },
            { numberLarge: 5789, numberSmall: 9678 },
            { numberLarge: 7456, numberSmall: 2557 }
        ],
        [
            { numberLarge: 5012, numberSmall: 7234 },
            { numberLarge: 7456, numberSmall: 2557 },
            { numberLarge: 7567, numberSmall: 9457 },
            { numberLarge: 4967, numberSmall: 6678 },
            { numberLarge: 1278, numberSmall: 5698 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 2454, numberSmall: 8867 },
            { numberLarge: 8365, numberSmall: 1975 },
            { numberLarge: 4216, numberSmall: 2396 },
            { numberLarge: 3795, numberSmall: 5587 },
            { numberLarge: 4698, numberSmall: 6576 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 2543, numberSmall: 1223 },
            { numberLarge: 3613, numberSmall: 2845 },
            { numberLarge: 2765, numberSmall: 9466 },
            { numberLarge: 5871, numberSmall: 9180 },
            { numberLarge: 9487, numberSmall: 6678 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 6642, numberSmall: 9782 },
            { numberLarge: 6751, numberSmall: 2802 },
            { numberLarge: 8864, numberSmall: 3898 },
            { numberLarge: 1975, numberSmall: 4768 },
            { numberLarge: 6086, numberSmall: 3875 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 2444, numberSmall: 4549 },
            { numberLarge: 8225, numberSmall: 7654 },
            { numberLarge: 2976, numberSmall: 6795 },
            { numberLarge: 5387, numberSmall: 7310 },
            { numberLarge: 1698, numberSmall: 2586 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 2411, numberSmall: 8952 },
            { numberLarge: 3574, numberSmall: 1874 },
            { numberLarge: 2685, numberSmall: 8476 },
            { numberLarge: 1796, numberSmall: 6587 },
            { numberLarge: 3267, numberSmall: 5656 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 1122, numberSmall: 2368 },
            { numberLarge: 9643, numberSmall: 2778 },
            { numberLarge: 8794, numberSmall: 3986 },
            { numberLarge: 1905, numberSmall: 4694 },
            { numberLarge: 2016, numberSmall: 5905 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 3683, numberSmall: 4699 },
            { numberLarge: 5591, numberSmall: 2782 },
            { numberLarge: 1803, numberSmall: 7692 },
            { numberLarge: 5914, numberSmall: 9713 },
            { numberLarge: 6025, numberSmall: 7914 },
            { numberLarge: 4173, numberSmall: 6234 }
        ],
        [
            { numberLarge: 2050, numberSmall: 7579 },
            { numberLarge: 6800, numberSmall: 1591 },
            { numberLarge: 4912, numberSmall: 3763 },
            { numberLarge: 5023, numberSmall: 6912 },
            { numberLarge: 8134, numberSmall: 9023 },
            { numberLarge: 4173, numberSmall: 6234 }
        ]
    ]
};

export { predefinedSetsA1, predefinedSetsA2, predefinedSetsA3, predefinedSetsA5, predefinedSetsA6, predefinedSetsA7, predefinedSetsA8, predefinedSetsA9, predefinedSetsA10 };