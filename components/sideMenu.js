import Modal from "./modal";
import {createMovie} from "../actions";
import React from "react";
import MovieCreateHtmlForm from "./movieCreateForm";


const SideMenu = (props) => {

    const {categories} = props
    let modal = null

    const handleCreateMovie = (movie) => {

        createMovie(movie).then((movie)=>{
            console.log(JSON.stringify(movie))
            modal.closeModal() // получаем по ref объекта Modal
        })

    }

    return (
        <div>
            <Modal ref={ele => modal = ele} hasSubmit={false}>
                <MovieCreateHtmlForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                { categories.map(c =>
                    <a
                        key={c.id}
                        href="#"
                        className="list-group-item">{c.name}</a>
                )
                }
            </div>
        </div>
    )
}

export default SideMenu
