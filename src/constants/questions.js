// Paper Folding Test – VZ-2
// Copyright © 1962 by Educational Testing Service. All rights reserved.

// Init paper state (no folding, no holes)
const FRAME_0 = {
    polygons: [
        {
            pts: [[0,0],[0,24],[24,24],[24,0]],
            fVal: 1,
            sVal: 1,
        },       
]};

const PART_1 = [
    { //-------------------------------------------- Q.1
        partLabel: 1,
        questionLabel: 1,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12],[12,24],[24,24],[24,0]],
                        fVal: 1,
                        sVal: 1,                        },
                    {
                        pts: [[0,12],[12,24],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12],[12,24],[24,24],[24,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[12,24],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
                hole: [[9,15]],
            },
        ],
        answerOptions: [
            [[9,15], [3,21]], 
            [[9,15], [15,15]], 
            [[9,15],[15,9]], 
            [[9,15],[9,9]], 
            [[9,15]],
        ],
        answerKeyNum: 0,
    },
    { //-------------------------------------------- Q.2
        partLabel: 1,
        questionLabel: 2,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,12],[0,24],[24,24],[24,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[12,12],[12,24],[24,24],[24,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,12],[12,24],[24,24],[24,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[21,15]],
            },
        ],
        answerOptions: [
            [[3,3], [21,3], [3,21], [21,21]], 
            [[3,15], [21,15]], 
            [[9,9], [9,15], [15,9], [15,15]], 
            [[3,9], [3,15], [21,9], [21,15]], 
            [[9,3], [9,21], [15,3], [15,21]],
        ],
        answerKeyNum: 3,
    },
    { //-------------------------------------------- Q.3
        partLabel: 1,
        questionLabel: 3,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,8],[24,8],[24,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[0,8],[0,16],[24,16],[24,8]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[12,0],[12,8],[24,8],[24,0]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,8],[12,16],[24,16],[24,8]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,16],[24,16],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,0],[12,8],[24,8],[24,0]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,8],[12,16],[24,16],[24,8]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,16],[24,16],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
                hole: [[21,3]],
            },
        ],
        answerOptions: [
            [[21,3],[21,21]], 
            [[3,3],[21,3]], 
            [[3,3],[21,3],[21,12]], 
            [[21,3],[21,12],[21,21]], 
            [[3,3],[21,3],[21,21]], 
        ],
        answerKeyNum: 1,
    },
    { //-------------------------------------------- Q.4
        partLabel: 1,
        questionLabel: 4,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[24,24]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,24],[24,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,24],[24,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[15,21]],
            },
        ],
        answerOptions: [
            [[9,3],[15,21]], 
            [[3,3],[3,21],[21,3],[21,21]], 
            [[9,3],[9,21],[15,3],[15,21]], 
            [[9,3],[3,9],[15,21],[21,15]],  
            [[9,3],[3,9],[3,15],[9,21],[15,21],[21,15]],
        ],
        answerKeyNum: 3,
    },
    { //-------------------------------------------- Q.5
        partLabel: 1,
        questionLabel: 5,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[24,12],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12],[12,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12],[12,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[15,9]],
            },
        ],
        answerOptions: [
            [[21,3],[15,9]], 
            [[21,3],[15,9],[15,15],[21,21]], 
            [[15,9],[15,15],[21,21]], 
            [[15,9],[15,15]],  
            [[15,15],[21,21]], 
        ],
        answerKeyNum: 1,
    },
    { //-------------------------------------------- Q.6
        partLabel: 1,
        questionLabel: 6,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[24,24],[24,12],[12,12],[12,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,12],[0,24],[24,24],[24,12]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,12],[12,24],[24,24], [24,12]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,24],[24,24],[24,12]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
            },
            // Frame.4
            {
                polygons: [
                    {
                        pts: [[12,12],[12,24],[24,24], [24,12]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,24],[24,24],[24,12]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
                hole: [[18,18]],
            },
        ],
        answerOptions: [
            [[3,3],[9,9],[15,9],[21,3]], 
            [[6,6],[6,18]], 
            [[18,6],[18,18]],  
            [[6,6],[18,18]],   
            [[6,18],[18,18]],  
        ],
        answerKeyNum: 4,
    },
    { //-------------------------------------------- Q.7
        partLabel: 1,
        questionLabel: 7,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[24,24]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[12,12],[0,24],[24,24]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[0,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,12],[0,24],[24,24]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[0,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[3,15]],
            },
        ],
        answerOptions: [
            [[3,9],[3,15],[9,3],[15,3]], 
            [[3,9],[3,15]], 
            [[3,15],[15,3]],  
            [[3,9],[3,15],[15,3]],    
            [[9,3],[3,9],[3,15]],   
        ],
        answerKeyNum: 0,
    },
    { //-------------------------------------------- Q.8
        partLabel: 1,
        questionLabel: 8,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[0,12],[0,24],[24,24],[24,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,12],[12,24],[24,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[0,24],[12,24],[12,12]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12],[24,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,12],[0,24],[12,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[24,12],[24,0]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[12,24],[24,12]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[0,24],[12,24],[24,12],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
            },
            // Frame.4
            {
                polygons: [
                    {
                        pts: [[12,12],[0,24],[12,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[24,12],[24,0]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[12,24],[24,12]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[0,24],[12,24],[24,12],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
                hole: [[15,15]],
            },
        ],
        answerOptions: [
            [[9,9],[15,15]], 
            [[3,3],[21,21]], 
            [[3,3],[9,9],[15,15],[21,21]],  
            [[3,15],[9,9],[15,3]],    
            [[3,3],[3,15],[15,15]],   
        ],
        answerKeyNum: 2,
    },
    { //-------------------------------------------- Q.9
        partLabel: 1,
        questionLabel: 9,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[24,24]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[24,0],[12,12],[24,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[12,24],[24,24]],
                        fVal: 4,
                        sVal: 0,
                    },
                        {
                        pts: [[24,0],[12,12],[12,24],[24,24]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[24,0],[12,12],[24,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[12,24],[24,24]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[24,0],[12,12],[12,24],[24,24]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
                hole: [[21,9]],
            },
        ],
        answerOptions: [
            [[9,9],[15,15]], 
            [[3,9],[9,3],[21,9],[21,15]],
            [[3,9],[3,15],[21,9],[21,15]], 
            [[15,3],[21,9]],   
            [[9,3],[3,9]],
        ],
        answerKeyNum: 4,
    },
    { //-------------------------------------------- Q.10
        partLabel: 1,
        questionLabel: 10,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[0,0],[0,24],[24,24],[24,12],[12,12],[12,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[12,24],[24,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[0,12],[12,24]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[0,12],[0,24],[12,24]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[0,0],[0,12],[12,24],[24,24]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[12,24],[24,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,12],[0,12],[12,24]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[0,12],[0,24],[12,24]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[0,0],[0,12],[12,24],[24,24]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
                hole: [[9,15]],
            },
        ],
        answerOptions: [
            [[9,15]], 
            [[9,15],[3,21]],
            [[3,3],[9,15],[21,21]],
            [[9,15],[15,9]],
            [[9,15],[15,9],[21,3]],
        ],
        answerKeyNum: 4,
    },
];

const PART_2 = [
    { //-------------------------------------------- Q.1
        partLabel: 2,
        questionLabel: 1,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[24,24],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[24,24],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
                hole: [[18,6]],
            },
        ],
        answerOptions: [
            [[6,6],[18,6]], 
            [[6,6],[18,18]], 
            [[18,6],[6,18]], 
            [[6,18],[18,18]], 
            [[18,6],[18,18]], 
        ],
        answerKeyNum: 2,
    },
    { //-------------------------------------------- Q.2
        partLabel: 2,
        questionLabel: 2,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,12],[0,24],[24,24],[24,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,12],[0,24],[12,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,12],[0,24],[12,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[3,21]],
            },
        ],
        answerOptions: [
            [[3,21],[21,3]], 
            [[3,3],[3,21],[21,3],[21,21]], 
            [[3,21],[21,21]], 
            [[3,3],[3,21]], 
            [[3,3],[3,21],[21,21]], 
        ],
        answerKeyNum: 1,
    },
    { //-------------------------------------------- Q.3
        partLabel: 2,
        questionLabel: 3,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,8],[24,8],[24,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[0,8],[0,16],[24,16],[24,8]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,8],[0,16],[24,16],[24,8]],
                        fVal: 3,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,8],[0,16],[24,16],[24,8]],
                        fVal: 3,
                        sVal: 1,
                    },
                ],
                hole: [[18,12]],
            },
        ],
        answerOptions: [
            [[18,4],[18,12],[18,20]], 
            [[6,4],[6,12],[6,20]], 
            [[18,6],[18,18]], 
            [[4,12],[12,12],[20,12]], 
            [[6,12],[18,12]],  
        ],
        answerKeyNum: 0,
    },
    { //-------------------------------------------- Q.4
        partLabel: 2,
        questionLabel: 4,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[24,0],[0,24],[24,24]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[24,0],[12,12],[24,24]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[24,0],[12,12],[24,24]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[18,12]],
            },
        ],
        answerOptions: [
            [[6,6],[6,18],[18,6],[18,18]],
            [[12,18],[18,12]],
            [[6,12],[18,12]],
            [[18,6],[6,18]],
            [[12,6],[6,12],[18,12],[12,18]],
        ],
        answerKeyNum: 4,
    },
    { //-------------------------------------------- Q.5
        partLabel: 2,
        questionLabel: 5,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[0,24],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 3,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[0,24],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 3,
                        sVal: 1,
                    },
                ],
                hole: [[9,9]],
            },
        ],
        answerOptions: [
            [[9,9],[15,15]],
            [[9,9],[15,15],[21,21]],
            [[3,3],[9,9]],
            [[3,3],[21,21]],
            [[3,3],[9,9],[15,15],[21,21]],
        ],
        answerKeyNum: 1,
    },
    { //-------------------------------------------- Q.6
        partLabel: 2,
        questionLabel: 6,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,8],[0,16],[24,16],[24,8]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[0,16],[0,24],[24,24],[24,16]],
                        fVal: 1,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,8],[0,16],[24,16],[24,8]],
                        fVal: 3,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,8],[12,16],[24,16],[24,8]],
                        fVal: 6,
                        sVal: 1,
                    },
                ],
            },
            // Frame.4
            {
                polygons: [
                    {
                        pts: [[12,8],[12,16],[24,16],[24,8]],
                        fVal: 6,
                        sVal: 1,
                    },
                ],
                hole: [[18,12]],
            }, 
        ],
        answerOptions: [
            [[6,6],[6,12],[6,18],[18,6],[18,12],[18,18]],
            [[18,6],[18,12],[18,18]],
            [[6,6],[6,12],[6,18]],
            [[6,12],[12,12],[18,12]],
            [[3,3],[3,21],[21,3],[21,21],[9,12],[15,12]],
        ],
        answerKeyNum: 0,
    },
    { //-------------------------------------------- Q.7
        partLabel: 2,
        questionLabel: 7,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[24,24],[24,12],[12,12],[12,0]],
                        fVal: 1,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12],[12,0]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 3,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[24,12],[24,0]],
                        fVal: 1,
                        sVal: 0,
                    },
                    {
                        pts: [[0,0],[0,12],[24,12],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    }
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12],[12,0]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,12],[24,12]],
                        fVal: 3,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[24,12],[24,0]],
                        fVal: 1,
                        sVal: 0,
                    },
                    {
                        pts: [[0,0],[0,12],[24,12],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    }
                ],
                hole: [[21,3]],
            },
        ],
        answerOptions: [
            [[21,3],[3,21],[21,21]],
            [[21,3],[21,21],[15,9]],
            [[3,21],[21,21]],
            [[21,3],[21,21]],
            [[21,21]],
        ],
        answerKeyNum: 4,
    },
    { //-------------------------------------------- Q.8
        partLabel: 2,
        questionLabel: 8,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[24,12],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[0,12],[0,24],[12,24],[12,12]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[0,0],[0,24],[12,24],[12,12]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[12,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.4
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[12,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[9,15]],
            },
        ],
        answerOptions: [
            [[9,3],[3,9],[3,15],[9,21]],
            [[3,9],[9,15],[15,9],[21,15]],
            [[3,3],[9,9],[9,15],[3,21]],
            [[21,3],[15,9],[15,15],[21,21]],
            [[15,3],[21,9],[21,15],[15,21]],
        ],
        answerKeyNum: 3,
    },
    { //-------------------------------------------- Q.9
        partLabel: 2,
        questionLabel: 9,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[12,24],[12,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,12],[0,24],[12,24],[12,12]],
                        fVal: 2,
                        sVal: 1,
                    },
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[12,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
            },
            // Frame.4
            {
                polygons: [
                    {
                        pts: [[12,0],[0,12],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                    {
                        pts: [[0,12],[12,24],[12,12]],
                        fVal: 4,
                        sVal: 1,
                    },
                ],
                hole: [[9,15]],
            },
        ],
        answerOptions: [
            [[3,15],[9,21],[15,21],[21,15]],
            [[9,9],[9,15],[15,15],[15,9]],
            [[9,15],[15,15]],
            [[3,21],[9,15],[15,15],[21,21]],
            [[3,21],[21,21]],
        ],
        answerKeyNum: 3,
    },
    { //-------------------------------------------- Q.10
        partLabel: 2,
        questionLabel: 10,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,24],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[12,0],[12,12],[24,0]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[24,0],[12,12],[24,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,12],[24,24],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
            },
            // Frame.3
            {
                polygons: [
                    {
                        pts: [[12,0],[12,12],[24,0]],
                        fVal: 4,
                        sVal: 0,
                    },
                    {
                        pts: [[24,0],[12,12],[24,24]],
                        fVal: 2,
                        sVal: 0,
                    },
                    {
                        pts: [[12,0],[12,12],[24,24],[24,0]],
                        fVal: 0,
                        sVal: 1,
                    },
                ],
                hole: [[21,15]],
            },
        ],
        answerOptions: [
            [[3,15],[9,21],[15,21],[21,15]],
            [[15,21],[21,15]],
            [[3,15],[9,21]],
            [[3,15],[21,15]],
            [[21,15]],
        ],
        answerKeyNum: 2,
    },
];

export const QUESTIONS = [ PART_1, PART_2 ];
export const quiz = [
    PART_1.slice(0, 2),
    PART_2.slice(0, 2),
];

export const SECTION = {
    A: PART_1,
    B: PART_2,
};

export const EXAMPLE = { //-------------------------------------------- Q.1
        partLabel: -1,
        questionLabel: -1,
        questionFrames: [
            FRAME_0,
            // Frame.1
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[24,12],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
            },
            // Frame.2
            {
                polygons: [
                    {
                        pts: [[0,0],[0,12],[24,12],[24,0]],
                        fVal: 2,
                        sVal: 1,
                    },
                ],
                hole: [[6,6]],
            },
        ],
        answerOptions: [
            [[3,9],[9,3]], 
            [[6,6],[18,18]], 
            [[6,6],[6,18]], 
            [[18,6],[6,18]], 
            [[6,6],[18,6]], 
        ],
        answerKeyNum: 2,
};


/**
 * Below are some points for drawing the 'pencil' on one illustration frame
 */
const pi = Math.PI;
const sin45 = Math.sin(pi * 0.25);
// punching-point (start)
const x0 = 6 - sin45;
const y0 = 6 - sin45;
// pencil-end (start)
const x1 = x0 + 10;
const y1 = y0 - 10;
// pencil-end (end)
const x2 = x1 + 2 * sin45;
const y2 = y1 + 2 * sin45;
// punching-point (end)
const x3 = 6 + sin45;
const y3 = 6 + sin45;
// pencil-head (start)
const x4 = x0 - 7;
const y4 = y0 + 7;
// pencil-tip
const x5 = 6 - 10;
const y5 = 6 + 10;
// pencil-head (end)
const x6 = x4 + 2 * sin45;
const y6 = y4 + 2 * sin45;

export const FOLDING_STEPS = [
    FRAME_0,
    {
        polygons: [
            {
                pts: [[0,0],[0,12],[24,12],[24,0]],
                fVal: 1,
                sVal: 1,
            },
        ],
        postPath: [
            {
                data: `
                    M 0 12
                    A 6 6 0 0 1 5 17
                    L 29 17
                    A 6 6 0 0 0 24 12
                    Z
                `,
                fVal: 1,
                sVal: 1,
            },
        ],
    },
    {
        polygons: [
            {
                pts: [[0,0],[0,12],[24,12],[24,0]],
                fVal: 2,
                sVal: 1,
            },
        ],
    },
    {
        polygons: [
            {
                pts: [[0,0],[0,12],[24,12],[24,0]],
                fVal: 2,
                sVal: 1,
            },
        ],
        hole: [[6,6]],
        prePath:[
            {
                data: `
                    M ${x0} ${y0}
                    L ${x4} ${y4}
                    L ${x5} ${y5}
                    L ${x6} ${y6}
                    L ${x2} ${y2}
                `,
                fVal: 1,
                sVal: 1,
                fill: 'rgb(234, 159, 53)',
            }
        ],
        postPath: [
            {
                data: `
                    M ${x0} ${y0}
                    L ${x1} ${y1}
                    A 1 1 0 0 1 ${x2} ${y2}
                    L ${x3} ${y3}
                    A 1 1 0 0 1 ${x0} ${x0}
                `,
                fVal: 1,
                sVal: 1,
                fill: 'rgb(234, 159, 53)',
            },
            {
                data: `
                    M ${17} ${-4}
                    A 1 1 0 1 0 ${15} ${-4}
                    A 1 1 0 1 0 ${17} ${-4}
                `,
                fVal: 1,
                sVal: 1,
                fill: 'rgb(234, 159, 53)',
            },
        ],
    },
    {
        polygons: [
            {
                pts: [[0,0],[0,12],[24,12],[24,0]],
                fVal: 2,
                sVal: 1,
            },
        ],
        hole: [[6,6]],
    },
];

export const UNFOLDING_STEPS = [
    {
        polygons: [
            {
                pts: [[0,0],[0,12],[24,12],[24,0]],
                fVal: 2,
                sVal: 1,
            },
        ],
        hole: [[6,6]],
    },
    {
        polygons: [
            {
                pts: [[0,0],[0,12],[24,12],[24,0]],
                fVal: 1,
                sVal: 1,
            },
        ],
        postPath: [
            {
                data: `
                    M 0 12
                    A 6 6 0 0 1 5 17
                    L 29 17
                    A 6 6 0 0 0 24 12
                    Z
                `,
                fVal: 1,
                sVal: 1,
            },
            {
                data: `
                    M ${10} ${14}
                    A 1 0.45 0 1 0 ${7.5} ${14}
                    A 1 0.45 0 1 0 ${10} ${14}
                `,
                fVal: 1,
                sVal: 1,
                fill: 'rgb(255, 255, 255)',
            },
        ],
        hole: [[6,6]],
    },
    {
        polygons: [
            {
                pts: [[0,0],[0,24],[24,24],[24,0]],
                fVal: 1,
                sVal: 1,
            },
        ],
        hole: [[6,6], [6,18]],
    },
];
