
/*
Ofc i have noticed there is a small hidden border
in the first "row" of the mockup, so i incluced a second approach for array slicing wich is in the comments's section, yet
i remember u said u like creativity in our interview, so why not turning this game list into a simple puzzle words :) itself, ofc the
API has to be changed to simple letters in the altImg
*/

 

import React, {useEffect, useState} from 'react';
    import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../actions/games';
import { Container, Row, Col } from 'reactstrap';
//import {Loader} from '../Dumb/Loader';

import './styles.css';

const Home = () => {
    const dispatch = useDispatch();
    const [filterInstruction, setFilterInstruction] = useState('all');
    const [search, setSearch] = useState('');
    const gamesList = useSelector(state => state.gamesReducer);

    /*API helper that comes from the server its just for simplicity to help checking
        {
                id:"someId1",
                url:"https://dummyimage.com/600x600/000/fff&text=new,+4",
                newItem: true, / false
                rank: 4,
                type: "big",
                altImg: "Metro"
            },
    
    
    */

    useEffect(() => {
        dispatch(getGames());
        
    }, [dispatch]);

    const handleFilterInstructions = (filtertype) => {
        setFilterInstruction((prevInstruction)=> prevInstruction = filtertype);
        filtering(filterInstruction, gamesList)
    }

    // can go to ../helpers or something but because its simple, i will leave it like that
    const filtering = (filterInstruction, gamesList) => {
        const data = [...gamesList]; //dont want it "in place" really  oterwise just = gamesList, just the values are fine both ways
        if(filterInstruction === "all"/*these could be make more abstractive*/) {
            return gamesList;
        } else if(filterInstruction === "new" ) {
             const newGames = data.sort((a, b) => a.newItem - b.newItem).reverse(); // reduce if we had a date condition included 
             return newGames;

        } else if (filterInstruction === "top" ) {
            const topGames = data.sort((a, b) => a.rank - b.rank).reverse();
            return topGames
        }
        
        else {
            return gamesList
        }   
    }
    

    
  const handleChange = (e) => {
      setSearch(e.target.value)
  }

  //will apply on the top of any filter, 

  //state escpesticism / useMemo or useCallback does not worth the memory
  const filteredGames = gamesList.filter(game => {
      return game.altImg.toLowerCase().includes(search.toLowerCase());
  });

  /*
  const gamesArrayGlobalFiltered = filtering(filterInstruction, filteredGames);
  const half = Math.ceil(gamesArrayGlobalFiltered.length / 2);
  const firstRow = gamesArrayGlobalFiltered.slice(0, half);
  const secondRow = gamesArrayGlobalFiltered.slice(0, -half); */
    return (
      
 
        <Container style={{marginTop: "20px"}}>
 
            <Row>
                <Col sm="12" md="7">
                    <h3 className="primary-color" >SLOTS</h3>
                </Col>
                <Col sm="12" md="5">
                    <ul className="filterList">
                        <li>
                            <div className={"menu-items" + ((filterInstruction === 'all') ? ' active' : ' inactive')}
                            onClick={()=> handleFilterInstructions('all', gamesList)}>
                                <i className="far fa-th-list"> </i><span >All</span> 
                            </div> 
                            
                            <div className={"menu-items" + ((filterInstruction === 'new') ? ' active' : ' inactive')} style={{marginLeft: "10px", marginRight: "10px" }} 
                            onClick={()=> handleFilterInstructions('new', gamesList)}>
                                <i className="far fa-trophy"> </i><span >New</span> 
                            </div>
                          
                            <div className={"menu-items" + ((filterInstruction === 'top') ? ' active' : ' inactive')}
                            onClick={()=> handleFilterInstructions('top', gamesList)}> 
                                <i className="far fa-star"> </i><span >Top</span> 
                            </div>
                        </li>
                        <li id="searchBox"> 
                            <div className="box">
                                <input type="text" placeholder="Search" 
                                value={search}
                                onChange={handleChange}
                                area-            
                                />
                                <i className="far fa-search"> </i>
                            </div>                      
                        </li>
                    </ul>
                </Col>        
            </Row>
            <div className="grid"> 
                {filtering(filterInstruction, filteredGames).map((game, index) => {
                    const blocks = ["block"];
                if ([2,15].includes(index)) blocks.push('big')
                    return (
                        <div className={blocks.join(' ')} key={game.id}>
                            <img src={game.url} alt ={game.altImg}/>
                        </div>
                    )
                })}   
            </div>

        {/* <div className="grid firstRow"> 
            {firstRow.map((game, index) => {
                 const blocks = ["block"];
               if ([2].includes(index)) blocks.push('big')
                return (
                    <div className={blocks.join(' ')} key={game.id}>
                        <img src={game.url} alt ={game.altImg}/>
                    </div>
                )
            })}   
        </div>
            <div className="grid">
                {secondRow.map((game, index) => {
                    const blocks = ["block"];
                if ([4].includes(index)) blocks.push('big') 
                    return (
                        
                        <div className={blocks.join(' ')} key={game.id}>
                            <img src={game.url} alt ={game.altImg}/>
                        </div>
                    )
                })}    
            
            </div>    */} 
        </Container>
    )
}   

export default Home
 