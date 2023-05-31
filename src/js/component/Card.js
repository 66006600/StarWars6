import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Favorites, favorites } from "../component/navbar";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Home = () => {
    const [planets, setPlanets] = useState([]);
    const { store, actions } = useContext(Context);
    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    console.log(store.planets, "planets");
    console.log(store.characters, "characters");
    console.log(store.vehicles, "Vehicles");

    return (
        <div className="container">
            
                <div className="col">
                    <h2>Planetas</h2>
                    <div className="row">
                        {store.planets.map((planet, index) => (
                            <div key={index} className="col-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`} alt={planet.name} />
                                    <Card.Body>
                                        <Card.Title>{planet.name}</Card.Title>
                                        <Card.Text>
                                            Population: {planet.population}
                                            <br />
                                            Climate: {planet.climate}
                                            <br />
                                            Gravity: {planet.gravity}
                                            <br />
                                            Terrain: {planet.terrain}
                                        </Card.Text>
                                        <Link to={"/single/" + index}>
                                            <Button variant="primary">Learn More!</Button>
                                        </Link>
                                        <Button variant="outline-warning position-absolute bottom-0 end-0" onClick={e => actions.agregarFavoritos(index, "planets")}>♡</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col">
                    <h2>Personajes</h2>
                    <div className="row">
                        {store.characters.map((character, index) => (
                            <div key={index} className="col-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt={character.name} />
                                    <Card.Body>
                                        <Card.Title>{character.name}</Card.Title>
                                        <Card.Text>
                                            Birth Year: {character.birth_year}
                                            <br />
                                            Gender: {character.gender}
                                            <br />
                                            Height: {character.height}
                                            <br />
                                            Mass: {character.mass}
                                        </Card.Text>
                                        <Link to={"/personaje/" + index}>
                                            <Button variant="primary">Learn More!</Button>
                                        </Link>
                                        <Button variant="outline-warning position-absolute bottom-0 end-0" onClick={e => actions.agregarFavoritos(index, "characters")}>♡</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col">
                    <h2>Vehículos</h2>
                    <div className="row">
                        {store.vehicles.map((vehicle, index) => (
                            <div key={index} className="col-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} alt={vehicle.name} />
                                    <Card.Body>
                                        <Card.Title>{vehicle.name}</Card.Title>
                                        <Card.Text>
                                            Model: {vehicle.model}
                                            <br />
                                            Manufacturer: {vehicle.manufacturer}
                                        </Card.Text>
                                        <Link to={"/vehicles/" + vehicle.uid}>
                                            <Button variant="primary">Learn More!</Button>
                                        </Link>
                                        <Button variant="outline-warning position-absolute bottom-0 end-0" onClick={e => actions.agregarFavoritos(index, "vehicles")}>♡</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            
        </div>
    );
}

