import express from 'express';

export const getGames = async (req, res) => { 
    try {
          
        const postMessages = [
            {
                id:"someId1",
                url:"https://dummyimage.com/300x300/42add1/fff&text=A",
                newItem: true,
                rank: 4,
                type: "normal",
                altImg:"and"
            },
            
            {
                id:"someId2",
                url:"https://dummyimage.com/300x300/42add1/fff&text=B",
                newItem: true,
                rank: 5,
                type: "normal",
                altImg: "bracer b",
            },
            {
                id:"someId3",
                url:"https://dummyimage.com/300x300/42add1/fff&text=E",
                newItem: false,
                rank: 2,
                type: "big",
                altImg: "end",
            },
            {
                id:"someId4",
                url:"https://dummyimage.com/300x300/42add1/fff&text=F",
                newItem: false,
                rank: 1,
                type: "normal",
                altImg: "force",
            },  
            {
                id:"someId5",
                url:"https://dummyimage.com/300x300/42add1/fff&text=G",
                newItem: false,
                rank: 1,
                type: "normal",
                altImg: "great",
            },
            {
                id:"someId6",
                url:"https://dummyimage.com/300x300/42add1/fff&text=H" ,
                newItem: false,
                rank: 1,
                type: "normal",
                altImg: "hive",
            },  
            {
                id:"someId7",
                url:"https://dummyimage.com/300x300/42add1/fff&text=C",
                newItem: false,
                rank: 1,
                type: "normal",
                altImg:"center",
            }, 
            {
                id:"someId8",
                url:"https://dummyimage.com/300x300/42add1/fff&text=D",
                newItem: false,
                rank: 1,
                type: "normal",
                altImg: "dance",
            },   
            {
                id:"someId80",
                url:"https://dummyimage.com/300x300/42add1/fff&text=I",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg:"ivory",
            },
            {
                id:"someId9",
                url:"https://dummyimage.com/300x300/42add1/fff&text=J",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg:"jeremy",
            },
            {
                id:"someId10",
                url:"https://dummyimage.com/300x300/42add1/fff&text=K",
                newItem: true,
                rank: 2,
                type: "normal",
                altImg: "key",
            },
            {
                id:"someId11",
                url:"https://dummyimage.com/300x300/42add1/fff&text=L",
                newItem: true,
                rank: 3,
                type: "normal",
                altImg: "lion",
            },
            {
                id:"someId12",
                url:"https://dummyimage.com/300x300/42add1/fff&text=M",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "mother",
            },
            {
                id:"someId13",
                url:"https://dummyimage.com/300x300/42add1/fff&text=N",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "number",
            },
            {
                id:"someId14",
                url:"https://dummyimage.com/300x300/42add1/fff&text=O",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "ocean",
            },
            {
                id:"someId15",
                url:"https://dummyimage.com/300x300/42add1/fff&text=T",
                newItem: true,
                rank: 3,
                type: "big",
                altImg: "tech",
            },
            {
                id:"someId16",
                url:"https://dummyimage.com/300x300/42add1/fff&text=U",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "utinility",
            },
            {
                id:"someId17",
                url:"https://dummyimage.com/300x300/42add1/fff&text=P",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "person",
            },
            {
                id:"someId18",
                url:"https://dummyimage.com/300x300/42add1/fff&text=Q",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "queue",
            },
            {
                id:"someId19",
                url:"https://dummyimage.com/300x300/42add1/fff&text=R",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "race",
            },
            {
                id:"someId20",
                url:"https://dummyimage.com/300x300/42add1/fff&text=S",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "silver",
            },
            {
                id:"someId21",
                url:"https://dummyimage.com/300x300/42add1/fff&text=V",
                newItem: true,
                rank: 1,
                type: "normal",
                altImg: "verssion",
            },
             
             //fake data
        ]
        //all types of possible data, tried to be random ranking / assuming there will be a serverside logic doing the filtering instead
        // due to its front end task i rather do the filtering on the FE (wich i consider a bad practice, working with data)
        // u can add all 26 letters  and rename the altImg with just a simple letter so you can write stuff.

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};